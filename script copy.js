let currentTab = 'all';
const tabActive = ['btn', 'btn-primary'];
const tabInactive = ['btn', 'btn-outline']

const allCards = document.getElementById('all-cards');
const thriveCards = document.getElementById('thrive-cards');
const strugglingCards = document.getElementById('struggling-cards');
const emtyPlant = document.getElementById('emty-plant');

function switchTab(tab) {
    const tabs = ['all', 'thrive', 'struggling']

    for (const t of tabs) {
        const tabName = document.getElementById('tab-' + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.add(...tabInactive)
        }
    }

    emtyPlant.classList.add('hidden');
    
    if (tab === 'all') {
        allCards.classList.remove('hidden');
        thriveCards.classList.add('hidden');
        strugglingCards.classList.add('hidden');
        if(allCards.children.length<1){
            emtyPlant.classList.remove('hidden');
        }
    } else if (tab === 'thrive') {
        allCards.classList.add('hidden');
        thriveCards.classList.remove('hidden');
        strugglingCards.classList.add('hidden');
        if(thriveCards.children.length<1){
            emtyPlant.classList.remove('hidden');
        }
    } else {
        allCards.classList.add('hidden');
        thriveCards.classList.add('hidden');
        strugglingCards.classList.remove('hidden');
        if(strugglingCards.children.length<1){
            emtyPlant.classList.remove('hidden');
        }
    }
};
switchTab(currentTab);


// Card Counting upadate
const totalCardCount = document.getElementById('total-cards');
const thriveCardCount = document.getElementById('total-thrive-cards');
const strugglingCardCount = document.getElementById('total-struggling-cards');





document.body.addEventListener('click', function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest('.plan-card');
    const parent = card.parentNode;
    const status = card.querySelector('.status-card')

    if (clickedElement.classList.contains('thrive')) {
        status.innerText = 'thrived';
        thriveCards.appendChild(card);
        updateCount();
    }
    if (clickedElement.classList.contains('struggling')) {
        status.innerText = 'struggling';
        strugglingCards.appendChild(card);
        updateCount();
    }
    if (clickedElement.classList.contains('delete')) {
        parent.removeChild(card);
        updateCount();
    }


})

switchTab(currentTab);

function updateCount() {
    // totalCardCount.innerText = allCards.children.length;
    // thriveCardCount.innerText = thriveCards.children.length;
    // strugglingCardCount.innerText = strugglingCards.children.length;

    const counts = {
        all: allCards.children.length,
        thrive: thriveCards.children.length,
        struggling: strugglingCards.children.length
    }

    totalCardCount.innerText = counts.all;
    thriveCardCount.innerText = counts.thrive;
    strugglingCardCount.innerText = counts.struggling;

}



updateCount();