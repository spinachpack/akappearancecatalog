document.addEventListener('DOMContentLoaded', function() {
    // Get storyId from URL query parameter instead of localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const selectedStoryId = urlParams.get('id') || localStorage.getItem('selectedStoryId');
    
    if (window.arknightsData && selectedStoryId) {
        const story = window.arknightsData.stories.find(s => s.id === selectedStoryId);
        
        if (story) {
            document.title = `${story.name} - Arknights Story Appearance Index`;
            document.querySelector('.story-header h1').textContent = story.name;
            document.querySelector('.story-header .meta').textContent = getCategoryDisplay(story.category);
            
            // Update URL if loaded from localStorage
            if (!urlParams.get('id') && selectedStoryId) {
                const newUrl = `story?id=${selectedStoryId}`;
                history.pushState({storyId: selectedStoryId}, story.name, newUrl);
            }
            
            createFilterControls();
            populateTable(story);
            setupNavigationButtons(story);
        }
    }
});

function createFilterControls() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'operator-filter';
    
    const filterLabel = document.createElement('span');
    filterLabel.textContent = 'Filter characters: ';
    filterContainer.appendChild(filterLabel);
    
    const filterSelect = document.createElement('select');
    filterSelect.id = 'operatorFilter';
    
    const options = [
        { value: 'playable', text: 'Playable Only' },
        { value: 'npc', text: 'NPCs Only' },
        { value: 'all', text: 'All Characters' }
    ];
    
    options.forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option.value;
        optElement.textContent = option.text;
        filterSelect.appendChild(optElement);
    });
    
    filterContainer.appendChild(filterSelect);
    
    const storyTable = document.querySelector('.story-table');
    storyTable.parentNode.insertBefore(filterContainer, storyTable);
    
    filterSelect.addEventListener('change', function() {
        // Get storyId from URL instead of localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const selectedStoryId = urlParams.get('id');
        
        const story = window.arknightsData.stories.find(s => s.id === selectedStoryId);
        if (story) {
            populateTable(story);
        }
    });
}

function populateTable(story) {
    const filterValue = document.getElementById('operatorFilter').value;
    const tbody = document.querySelector('.story-table tbody');
    tbody.innerHTML = '';
    
    if (story.stages && story.stages.length > 0) {
        populateStageTable(tbody, story.stages, filterValue);
    } else if (story.episodes && story.episodes.length > 0) {
        populateEpisodeTable(tbody, story.episodes, filterValue);
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="3">No stages available for this story.</td>';
        tbody.appendChild(tr);
    }
}

function getCategoryDisplay(category) {
    switch(category) {
        case 'main-story':
            return 'Main Story';
        case 'side-story':
            return 'Side Story';
        case 'vignette':
            return 'Vignette';
        case 'operator-record':
            return 'Operator Record';
        default:
            return category;
    }
}

function populateStageTable(tbody, stages, filterValue) {
    stages.forEach(stage => {
        const tr = document.createElement('tr');
        
        // Stage code
        const tdCode = document.createElement('td');
        tdCode.textContent = stage.code;
        tr.appendChild(tdCode);
        
        // Stage title
        const tdTitle = document.createElement('td');
        tdTitle.textContent = stage.title;
        tr.appendChild(tdTitle);
        
        // Operators
        const tdOperators = document.createElement('td');
        const operatorList = document.createElement('div');
        operatorList.className = 'operator-list';
        
        // Find operator data and create tags based on filter
        if (stage.operators && stage.operators.length > 0) {
            const operatorsToDisplay = [];
            
            stage.operators.forEach(opId => {
                const operator = window.arknightsData.operators.find(o => o.id === opId);
                if (operator) {
                    // Apply filtering based on playable status
                    if (filterValue === 'all' || 
                        (filterValue === 'playable' && operator.playable === true) || 
                        (filterValue === 'npc' && operator.playable === false)) {
                        operatorsToDisplay.push(operator);
                    }
                }
            });
            
            operatorsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
            
            operatorsToDisplay.forEach(operator => {
                const operatorTag = createOperatorTag(operator);
                operatorList.appendChild(operatorTag);
            });
        }
        
        tdOperators.appendChild(operatorList);
        tr.appendChild(tdOperators);
        
        tbody.appendChild(tr);
    });
}

function populateEpisodeTable(tbody, episodes, filterValue) {
    episodes.forEach((episode, index) => {
        const tr = document.createElement('tr');
        
        // Episode number
        const tdCode = document.createElement('td');
        tdCode.textContent = ` `;
        tr.appendChild(tdCode);
        
        // Episode title
        const tdTitle = document.createElement('td');
        tdTitle.textContent = episode.title;
        tr.appendChild(tdTitle);
        
        // Operators
        const tdOperators = document.createElement('td');
        const operatorList = document.createElement('div');
        operatorList.className = 'operator-list';
        
        if (episode.operators && episode.operators.length > 0) {
            const operatorsToDisplay = [];
            
            episode.operators.forEach(opId => {
                const operator = window.arknightsData.operators.find(o => o.id === opId);
                if (operator) {
                    // Apply filtering based on playable status
                    if (filterValue === 'all' || 
                        (filterValue === 'playable' && operator.playable === true) || 
                        (filterValue === 'npc' && operator.playable === false)) {
                        operatorsToDisplay.push(operator);
                    }
                }
            });
            
            operatorsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
            
            operatorsToDisplay.forEach(operator => {
                const operatorTag = createOperatorTag(operator);
                operatorList.appendChild(operatorTag);
            });
        }
        
        tdOperators.appendChild(operatorList);
        tr.appendChild(tdOperators);
        
        tbody.appendChild(tr);
    });
}

function createOperatorTag(operator) {
    const a = document.createElement('a');
    a.href = `/character/${operator.id}`;
    a.className = 'operator-tag';
    
    // Add a class to distinguish playable vs non-playable operators
    if (operator.playable) {
        a.classList.add('playable');
    } else {
        a.classList.add('npc');
    }
    
    const img = document.createElement('img');
    img.src = operator.image;
    img.alt = operator.name;
    
    const span = document.createElement('span');
    span.textContent = operator.name;
    
    a.appendChild(img);
    a.appendChild(span);
    
    return a;
}

function setupNavigationButtons(currentStory) {
    const prevBtn = document.querySelector('.nav-button.prev');
    const nextBtn = document.querySelector('.nav-button.next');
    
    if (currentStory.category === 'main-story') {
        const mainStories = window.arknightsData.stories.filter(s => s.category === 'main-story');
        const sortedStories = mainStories.sort((a, b) => {
            const aNum = parseInt(a.id.split('-')[1]);
            const bNum = parseInt(b.id.split('-')[1]);
            return aNum - bNum;
        });
        
        const currentIndex = sortedStories.findIndex(s => s.id === currentStory.id);
        
        if (currentIndex > 0) {
            const prevStory = sortedStories[currentIndex - 1];
            prevBtn.textContent = `${prevStory.name}`;
            // Update href to use query parameter
            prevBtn.href = `/story/${prevStory.id}`;
            prevBtn.onclick = null; // Remove the onclick handler
        } else {
            prevBtn.style.visibility = 'hidden';
        }
        
        if (currentIndex < sortedStories.length - 1) {
            const nextStory = sortedStories[currentIndex + 1];
            nextBtn.textContent = `${nextStory.name}`;
            // Update href to use query parameter
            nextBtn.href = `/story/${nextStory.id}`;
            nextBtn.onclick = null; // Remove the onclick handler
        } else {
            nextBtn.style.visibility = 'hidden';
        }
    } else {
        document.querySelector('.chapter-navigation').style.display = 'none';
    }
}