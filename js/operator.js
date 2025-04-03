document.addEventListener('DOMContentLoaded', () => {
    const pathParts = window.location.pathname.split('/');
    const operatorId = pathParts[pathParts.indexOf('character') + 1];

    if (!operatorId) {
        document.getElementById('operatorName').textContent = 'Operator Not Found';
        return;
    }

    const operator = arknightsData.operators.find(op => op.id === operatorId);

    if (!operator) {
        document.getElementById('operatorName').textContent = 'Operator Not Found';
        return;
    }

    document.getElementById('operatorAvatar').src = operator.image;
    document.getElementById('operatorAvatar').alt = operator.name;
    document.getElementById('operatorName').textContent = operator.name;

    document.title = `${operator.name} - Arknights Story Appearance Index`;

    const mainStories = [];
    const sideStories = [];
    const vignettes = [];
    const operatorRecords = [];

    arknightsData.stories.forEach(story => {
        const storyData = {
            id: story.id,
            name: story.name,
            url: story.url,
            stages: []
        };

        if (story.stages && story.stages.length > 0) {
            story.stages.forEach(stage => {
                if (stage.operators && stage.operators.includes(operatorId)) {
                    storyData.stages.push({
                        code: stage.code,
                        title: stage.title
                    });
                }
            });
        }

        if (story.episodes && story.episodes.length > 0) {
            story.episodes.forEach((episode, index) => {
                if (episode.operators && episode.operators.includes(operatorId)) {
                    storyData.stages.push({
                        code: episode.title,
                        title: episode.title
                    });
                }
            });
        }

        if (storyData.stages.length > 0) {
            switch (story.category) {
                case 'main-story':
                    mainStories.push(storyData);
                    break;
                case 'side-story':
                    sideStories.push(storyData);
                    break;
                case 'vignette':
                    vignettes.push(storyData);
                    break;
                case 'operator-record':
                    operatorRecords.push(storyData);
                    break;
            }
        }
    });

    const totalAppearances = mainStories.length + sideStories.length + vignettes.length + operatorRecords.length;

    const appearanceCounter = document.createElement('div');
    appearanceCounter.className = 'appearance-counter';
    const appearanceText = totalAppearances === 1 ? 'appearance' : 'appearances';
    appearanceCounter.innerHTML = `<span class="counter-value">${totalAppearances}</span> ${appearanceText}`;

    const operatorInfo = document.createElement('div');
    operatorInfo.className = 'operator-info';

    const nameElement = document.getElementById('operatorName');
    const nameParent = nameElement.parentNode;
    operatorInfo.appendChild(nameElement);
    operatorInfo.appendChild(appearanceCounter);

    nameParent.appendChild(operatorInfo);

    populateTabContent('main-story', mainStories);
    populateTabContent('side-story', sideStories);
    populateTabContent('vignette', vignettes);
    populateTabContent('operator-record', operatorRecords);

    function populateTabContent(tabId, stories) {
        const tabContent = document.getElementById(tabId);

        if (stories.length === 0) {
            tabContent.innerHTML = '<div class="no-appearances">No appearances found in this category.</div>';
            return;
        }

        let contentHTML = '<div class="stories-container">';

        stories.forEach(story => {
            contentHTML += `
                <div class="story-section">
                    <h2 class="chapter-title clickable" data-story-id="${story.id}">${story.name}</h2>
                    <div class="stage-buttons">
                        ${story.stages.map(stage =>
                `<p class="stage-button">${stage.code}</p>`
            ).join('')}
                    </div>
                </div>
            `;
        });

        contentHTML += '</div>';

        tabContent.innerHTML = contentHTML;

        tabContent.querySelectorAll('.chapter-title').forEach(title => {
            title.addEventListener('click', () => {
                const storyId = title.getAttribute('data-story-id');
                localStorage.setItem('selectedStoryId', storyId);
                window.location.href = 'story';
            });
        });
    }

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

    document.body.classList.add('loaded');
});