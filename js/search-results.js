document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    const filter = urlParams.get('filter') || 'all';
    
    document.getElementById('queryDisplay').textContent = query;
    
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        if (tab.dataset.filter === filter) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
        
        tab.addEventListener('click', function() {
            const newFilter = this.dataset.filter;
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('filter', newFilter);
            window.history.pushState({}, '', newUrl);
            
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            displaySearchResults(query, newFilter);
        });
    });
    
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]');
    searchInputs.forEach(input => {
        input.value = query;
    });
    
    displaySearchResults(query, filter);
});

function displaySearchResults(query, filter) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    
    if (!query) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h2>No search query provided</h2>
                <p>Please enter a search term to find characters and stories.</p>
            </div>
        `;
        return;
    }
    
    const results = getSearchResults(query);
    
    let totalResults = results.operators.length + results.stories.length;
    document.getElementById('resultsCount').textContent = `Found ${totalResults} result${totalResults !== 1 ? 's' : ''}`;
    
    if (totalResults === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h2>No results found</h2>
                <p>Your search for "${query}" did not match any characters or stories.</p>
                <p>Try different keywords or check your spelling.</p>
            </div>
        `;
        return;
    }
    
    if ((filter === 'all' || filter === 'operator') && results.operators.length > 0) {
        const operatorsSection = document.createElement('div');
        operatorsSection.className = 'results-section';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.innerHTML = `<span>Characters</span> <span>(${results.operators.length})</span>`;
        operatorsSection.appendChild(sectionTitle);
        
        const operatorResults = document.createElement('div');
        operatorResults.className = 'story-results';
        operatorResults.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
        
        results.operators.forEach(operator => {
            const operatorCard = document.createElement('a');
            operatorCard.className = 'story-card';
            operatorCard.href = `character.html?id=${operator.id}`;
            
            //random color for the background circle
            const colors = ['#16A085', '#8E44AD', '#D35400', '#2980B9', '#C0392B', '#27AE60'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            operatorCard.innerHTML = `
                <div class="story-info" style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div class="story-name">${operator.name}</div>
                        <div class="story-type">${operator.playable ? 'Playable Operator' : 'NPC'}</div>
                    </div>
                    <div style="width: 45px; height: 45px; border-radius: 50%; background-color: ${randomColor}; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                        <img src="${operator.image}" alt="${operator.name}" style="width: 45px; height: 45px; object-fit: cover; object-position: center;">
                    </div>
                </div>
            `;
            
            operatorResults.appendChild(operatorCard);
        });
        
        operatorsSection.appendChild(operatorResults);
        resultsContainer.appendChild(operatorsSection);
    }
    
    if ((filter === 'all' || filter === 'story') && results.stories.length > 0) {
        const storiesSection = document.createElement('div');
        storiesSection.className = 'results-section';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.innerHTML = `<span>Stories</span> <span>(${results.stories.length})</span>`;
        storiesSection.appendChild(sectionTitle);
        
        const storyResults = document.createElement('div');
        storyResults.className = 'story-results';
        storyResults.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
        
        results.stories.forEach(story => {
            const storyCard = document.createElement('a');
            storyCard.className = 'story-card';
            storyCard.href = 'javascript:void(0)';
            storyCard.addEventListener('click', function() {
                localStorage.setItem('selectedStoryId', story.id);
                window.location.href = 'story.html';
            });
            
            let categoryLabel;
            switch(story.category) {
                case 'main-story': categoryLabel = 'Main Story'; break;
                case 'side-story': categoryLabel = 'Side Story'; break;
                case 'vignette': categoryLabel = 'Vignette'; break;
                case 'operator-record': categoryLabel = 'Operator Record'; break;
                default: categoryLabel = 'Story';
            }
            
            let operatorCount = 0;
            if (story.stages) {
                const uniqueOperators = new Set();
                story.stages.forEach(stage => {
                    stage.operators.forEach(op => uniqueOperators.add(op));
                });
                operatorCount = uniqueOperators.size;
            } else if (story.episodes) {
                const uniqueOperators = new Set();
                story.episodes.forEach(episode => {
                    episode.operators.forEach(op => uniqueOperators.add(op));
                });
                operatorCount = uniqueOperators.size;
            }
            
            storyCard.innerHTML = `
                <div class="story-info">
                    <div class="story-name">${story.name}</div>
                    <div class="story-type">${operatorCount} characters appear</div>
                    <span class="story-category ${story.category}">${categoryLabel}</span>
                </div>
            `;
            
            storyResults.appendChild(storyCard);
        });
        
        storiesSection.appendChild(storyResults);
        resultsContainer.appendChild(storiesSection);
    }
}

function getSearchResults(query) {
    query = query.toLowerCase();
    
    const results = {
        operators: [],
        stories: []
    };
    
    arknightsData.operators.forEach(operator => {
        if (operator.name.toLowerCase().includes(query)) {
            results.operators.push(operator);
        }
    });
    
    arknightsData.stories.forEach(story => {
        if (story.name.toLowerCase().includes(query)) {
            results.stories.push(story);
        }
    });
    
    return results;
}