document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('dropdown-styles')) {
        const style = document.createElement('style');
        style.id = 'dropdown-styles';
        style.textContent = `
            .search-dropdown {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                z-index: 9999;
                max-height: 400px;
                overflow-y: auto;
                color: #2C3E50;
            }
            
            .dropdown-category {
                padding: 10px 0;
                border-bottom: 1px solid #ECF0F1;
            }
            
            .category-title {
                padding: 5px 15px;
                font-weight: bold;
                color: #3498DB;
                background-color: #ECF0F1;
            }
            
            .dropdown-item {
                padding: 8px 15px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .dropdown-item:hover, .dropdown-item.selected {
                background-color: #ECF0F1;
            }
            
            .dropdown-item .item-icon {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                object-fit: cover;
            }
            
            .dropdown-item .category-badge {
                font-size: 0.7rem;
                padding: 2px 8px;
                border-radius: 10px;
                color: white;
            }
            
            .dropdown-item .category-badge.main-story {
                background-color: #16A085;
            }
            
            .dropdown-item .category-badge.side-story {
                background-color: #8E44AD;
            }
            
            .dropdown-item .category-badge.vignette {
                background-color: #D35400;
            }
            
            .dropdown-item .category-badge.operator-record {
                background-color: #2980B9;
            }
            
            .dropdown-item .search-icon {
                font-size: 1.2rem;
            }
            
            .see-all, .search-all {
                font-style: italic;
                background-color: #F5F5F5;
            }
            
            .no-results {
                font-style: italic;
                color: #95A5A6;
                padding: 10px 15px;
            }
            
            @media (max-width: 768px) {
                .header-right.active .search-dropdown {
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
            
            @media (max-width: 480px) {
                .search-dropdown {
                    max-height: 300px;
                }
                
                .dropdown-item {
                    padding: 10px 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Set up a MutationObserver to watch for changes in the DOM
    // This helps detect when the search elements are added dynamically
    setupSearchObserver();
    
    // Also attempt to initialize immediately in case elements are already there
    initializeSearchElements();
    
    // Add a fallback to initialize search elements after a short delay
    // This ensures search works even if DOM is ready but elements aren't fully initialized
    setTimeout(() => {
        initializeSearchElements();
    }, 500);
});

function setupSearchObserver() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]:not([data-search-initialized])');
                if (searchInputs.length > 0) {
                    initializeSearchElements();
                }
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

function initializeSearchElements() {
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]:not([data-search-initialized]), #navSearch:not([data-search-initialized])');
    const searchButtons = document.querySelectorAll('.main-search button:not([data-search-initialized]), .nav-search button:not([data-search-initialized])');
    
    if (searchInputs.length === 0 && searchButtons.length === 0) {
        return;
    }
    
    console.log("Initializing search elements:", searchInputs.length, "inputs,", searchButtons.length, "buttons");

    searchInputs.forEach(input => {
        input.setAttribute('data-search-initialized', 'true');
        
        if (input.parentNode) {
            input.parentNode.style.position = 'relative';
        }
        
        let dropdownContainer = input.parentNode.querySelector('.search-dropdown');
        if (!dropdownContainer) {
            dropdownContainer = document.createElement('div');
            dropdownContainer.className = 'search-dropdown';
            input.parentNode.appendChild(dropdownContainer);
        }
        
        input.addEventListener('input', function() {
            handleSearchInput(this, dropdownContainer);
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitSearch(this.value);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                navigateDropdown(dropdownContainer, 'down');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                navigateDropdown(dropdownContainer, 'up');
            }
        });
        
        document.addEventListener('click', function(e) {
            if (e.target !== input) {
                dropdownContainer.innerHTML = '';
            }
        });
    });
    
    searchButtons.forEach(button => {
        button.setAttribute('data-search-initialized', 'true');
        
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input && input.tagName.toLowerCase() === 'input' && input.value.trim()) {
                submitSearch(input.value);
            }
        });
    });
}

function handleSearchInput(inputElement, dropdownContainer) {
    const query = inputElement.value.trim().toLowerCase();
    
    if (!query) {
        dropdownContainer.innerHTML = '';
        return;
    }
    
    if (!isArknightsDataAvailable()) {
        console.log("Data not yet available, checking data source...");
        
        tryLoadingDataFromStorage();
        
        if (!isArknightsDataAvailable()) {
            dropdownContainer.innerHTML = '';
            const loading = document.createElement('div');
            loading.className = 'dropdown-item no-results';
            loading.textContent = 'Loading data...';
            dropdownContainer.appendChild(loading);
            return;
        }
    }
    
    const results = getSearchResults(query);
    
    displayDropdownResults(results, dropdownContainer, query);
}

function isArknightsDataAvailable() {
    return typeof window.arknightsData !== 'undefined' && 
           window.arknightsData !== null && 
           typeof window.arknightsData.operators !== 'undefined' && 
           typeof window.arknightsData.stories !== 'undefined';
}

function tryLoadingDataFromStorage() {
    try {
        const storedData = localStorage.getItem('arknightsData');
        if (storedData) {
            window.arknightsData = JSON.parse(storedData);
            console.log("Data loaded from localStorage");
        } else {
            console.log("No data found in localStorage");
        }
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
    }
}

function getSearchResults(query) {
    const results = {
        operators: [],
        stories: []
    };
    
    if (!isArknightsDataAvailable()) {
        console.error('arknightsData is not available for search');
        return results;
    }
    
    if (window.arknightsData.operators && Array.isArray(window.arknightsData.operators)) {
        window.arknightsData.operators.forEach(operator => {
            if (operator && operator.name && operator.name.toLowerCase().includes(query)) {
                results.operators.push(operator);
            }
        });
    }
    
    if (window.arknightsData.stories && Array.isArray(window.arknightsData.stories)) {
        window.arknightsData.stories.forEach(story => {
            if (story && story.name && story.name.toLowerCase().includes(query)) {
                results.stories.push(story);
            }
        });
    }
    
    results.operators.sort((a, b) => a.name.localeCompare(b.name));
    results.stories.sort((a, b) => a.name.localeCompare(b.name));
    
    return results;
}

function displayDropdownResults(results, dropdownContainer, query) {
    dropdownContainer.innerHTML = '';
    
    if (results.operators.length === 0 && results.stories.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'dropdown-item no-results';
        noResults.textContent = 'No results found';
        dropdownContainer.appendChild(noResults);
        return;
    }
    
    const createCategorySection = (title, items, type) => {
        if (items.length === 0) return;
        
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'dropdown-category';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = title;
        categoryContainer.appendChild(categoryTitle);
        
        items.slice(0, 5).forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'dropdown-item';
            
            if (type === 'operator') {
                const imageSrc = item.image || 'images/default-operator.png';
                itemElement.innerHTML = `
                    <img src="${imageSrc}" alt="${item.name}" class="item-icon">
                    <span>${item.name}</span>
                `;
                itemElement.addEventListener('click', () => {
                    window.location.href = `character.html?id=${item.id}`;
                });
            } else {
                const categoryBadge = getCategoryBadge(item.category);
                itemElement.innerHTML = `
                    <span class="category-badge ${item.category}">${categoryBadge}</span>
                    <span>${item.name}</span>
                `;
                itemElement.addEventListener('click', () => {
                    localStorage.setItem('selectedStoryId', item.id);
                    window.location.href = 'story.html';
                });
            }
            
            categoryContainer.appendChild(itemElement);
        });
        
        if (items.length > 5) {
            const seeAll = document.createElement('div');
            seeAll.className = 'dropdown-item see-all';
            seeAll.textContent = `See all ${items.length} results`;
            seeAll.addEventListener('click', () => {
                submitSearch(query, type);
            });
            categoryContainer.appendChild(seeAll);
        }
        
        dropdownContainer.appendChild(categoryContainer);
    };
    
    createCategorySection('Operators', results.operators, 'operator');
    createCategorySection('Stories', results.stories, 'story');
    
    const searchAll = document.createElement('div');
    searchAll.className = 'dropdown-item search-all';
    searchAll.innerHTML = `<span class="search-icon">🔍</span> Search for "${query}"`;
    searchAll.addEventListener('click', () => {
        submitSearch(query);
    });
    dropdownContainer.appendChild(searchAll);
}

function getCategoryBadge(category) {
    switch(category) {
        case 'main-story': return 'Main';
        case 'side-story': return 'Side';
        case 'vignette': return 'Vignette';
        case 'operator-record': return 'Record';
        default: return 'Story';
    }
}

function navigateDropdown(dropdownContainer, direction) {
    const items = dropdownContainer.querySelectorAll('.dropdown-item');
    if (items.length === 0) return;
    
    const currentIndex = Array.from(items).findIndex(item => item.classList.contains('selected'));
    
    items.forEach(item => item.classList.remove('selected'));
    
    let newIndex;
    if (currentIndex === -1) {
        newIndex = direction === 'down' ? 0 : items.length - 1;
    } else {
        newIndex = direction === 'down' ? 
            (currentIndex + 1) % items.length : 
            (currentIndex - 1 + items.length) % items.length;
    }
    
    items[newIndex].classList.add('selected');
    items[newIndex].scrollIntoView({ block: 'nearest' });
}

function submitSearch(query, filterType = '') {
    if (!query.trim()) return;
    let searchUrl = `search-results.html?q=${encodeURIComponent(query.trim())}`;
    if (filterType) {
        searchUrl += `&filter=${filterType}`;
    }
    
    window.location.href = searchUrl;
}

window.addEventListener('load', function() {
    setTimeout(() => {
        initializeSearchElements();
    }, 300);
});

console.log("Search script loaded and waiting for DOM content");