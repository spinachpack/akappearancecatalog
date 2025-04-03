document.addEventListener('DOMContentLoaded', function() {
  
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    function populateStories() {
        if (!window.arknightsData || !window.arknightsData.stories) {
            console.error('Story data not found!');
            return;
        }
        
        const mainStoryTab = document.getElementById('main-story');
        const sideStoryTab = document.getElementById('side-story');
        const vignetteTab = document.getElementById('vignette');
        const operatorRecordTab = document.getElementById('operator-record');
        
        mainStoryTab.innerHTML = '<ul class="story-list"></ul>';
        sideStoryTab.innerHTML = '<ul class="story-list"></ul>';
        vignetteTab.innerHTML = '<ul class="story-list"></ul>';
        operatorRecordTab.innerHTML = '<ul class="story-list"></ul>';
        
        const mainStoryList = mainStoryTab.querySelector('.story-list');
        const sideStoryList = sideStoryTab.querySelector('.story-list');
        const vignetteList = vignetteTab.querySelector('.story-list');
        const operatorRecordList = operatorRecordTab.querySelector('.story-list');
        
        const mainStories = [];
        const sideStories = [];
        const vignettes = [];
        const operatorRecords = [];
        
        window.arknightsData.stories.forEach(story => {
            switch(story.category) {
                case 'main-story':
                    mainStories.push(story);
                    break;
                case 'side-story':
                    sideStories.push(story);
                    break;
                case 'vignette':
                    vignettes.push(story);
                    break;
                case 'operator-record':
                    operatorRecords.push(story);
                    break;
            }
        });
        
        sideStories.sort((a, b) => a.name.localeCompare(b.name));
        vignettes.sort((a, b) => a.name.localeCompare(b.name));
        operatorRecords.sort((a, b) => a.name.localeCompare(b.name));
        
        function addStoriesToList(stories, listElement) {
            stories.forEach(story => {
                const li = document.createElement('li');
                li.className = 'story-item';
                
                const a = document.createElement('a');
                a.href = "story.html";  
                a.textContent = story.name;
                
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.setItem('selectedStoryId', story.id);
                    window.location.href = "story.html";
                });
                
                li.appendChild(a);
                listElement.appendChild(li);
            });
        }
        
        addStoriesToList(mainStories, mainStoryList);
        addStoriesToList(sideStories, sideStoryList);
        addStoriesToList(vignettes, vignetteList);
        addStoriesToList(operatorRecords, operatorRecordList);
    }
    
    populateStories();
    
    const searchInput = document.getElementById('navSearch');
    const searchButton = searchInput.nextElementSibling;
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) return;
        
        const matchingStories = window.arknightsData.stories.filter(story => 
            story.name.toLowerCase().includes(searchTerm)
        );
        
        if (matchingStories.length > 0) {
            localStorage.setItem('selectedStoryId', matchingStories[0].id);
            window.location.href = "story.html";
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});