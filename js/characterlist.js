document.addEventListener('DOMContentLoaded', () => {
    const characterGrid = document.getElementById('characterGrid');
    const paginationContainer = document.getElementById('pagination');
    const filterPlayable = document.getElementById('filterPlayable');
    const filterNPC = document.getElementById('filterNPC');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    // Pagination settings
    const charactersPerPage = 24;
    let currentPage = 1;
    let filteredCharacters = [];
    
    // Initial load
    filterAndDisplayCharacters();
    
    // Event listeners for filters
    filterPlayable.addEventListener('change', () => {
        currentPage = 1;
        filterAndDisplayCharacters();
    });
    
    filterNPC.addEventListener('change', () => {
        currentPage = 1;
        filterAndDisplayCharacters();
    });
    
    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        filterAndDisplayCharacters(searchTerm);
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filter characters based on selected options and search term
    function filterAndDisplayCharacters(searchTerm = '') {
        // Use operators array instead of characters array
        filteredCharacters = arknightsData.operators.filter(character => {
            const matchesType = (character.playable && filterPlayable.checked) || 
                               (!character.playable && filterNPC.checked);
            
            const matchesSearch = searchTerm === '' || 
                                 character.name.toLowerCase().includes(searchTerm);
            
            return matchesType && matchesSearch;
        })
        .sort((a, b) => a.name.localeCompare(b.name));
        
        // Display current page
        displayCharactersPage(currentPage);
        
        // Update pagination
        generatePagination();
    }
    
    // Display the specified page of characters
    function displayCharactersPage(page) {
        // Calculate start and end indices
        const startIndex = (page - 1) * charactersPerPage;
        const endIndex = startIndex + charactersPerPage;
        const charactersToDisplay = filteredCharacters.slice(startIndex, endIndex);
        
        // Clear the grid
        characterGrid.innerHTML = '';
        
        // Add characters to the grid
        charactersToDisplay.forEach(character => {
            const characterType = character.playable ? 'playable' : 'npc';
            const typeBadge = character.playable ? 'Playable' : 'NPC';
            const badgeClass = character.playable ? 'playable-badge' : 'npc-badge';
            
            const characterCard = `
                <a href="character.html?id=${character.id}" class="character-link">
                    <div class="character-card">
                        <span class="character-type-badge ${badgeClass}">${typeBadge}</span>
                        <div class="character-image-container">
                            <img src="${character.image}" alt="${character.name}" class="character-image">
                        </div>
                        <div class="character-name">${character.name}</div>
                    </div>
                </a>
            `;
            
            characterGrid.innerHTML += characterCard;
        });
        
        // If no characters match the criteria
        if (charactersToDisplay.length === 0) {
            characterGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 30px;">
                    <h3>No characters found matching your criteria.</h3>
                    <p>Try adjusting your filters or search terms.</p>
                </div>
            `;
        }
    }
    
    // Generate pagination buttons
    function generatePagination() {
        const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
        paginationContainer.innerHTML = '';
        
        // Don't show pagination if there's only one page
        if (totalPages <= 1) {
            return;
        }
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.className = `pagination-button ${currentPage === 1 ? 'disabled' : ''}`;
        prevButton.textContent = 'Previous';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayCharactersPage(currentPage);
                generatePagination();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // Page number buttons
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        
        // Adjust startPage if we're near the end
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayCharactersPage(currentPage);
                generatePagination();
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.className = `pagination-button ${currentPage === totalPages ? 'disabled' : ''}`;
        nextButton.textContent = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayCharactersPage(currentPage);
                generatePagination();
            }
        });
        paginationContainer.appendChild(nextButton);
    }
});