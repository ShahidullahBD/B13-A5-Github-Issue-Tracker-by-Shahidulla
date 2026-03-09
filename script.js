const allButton = document.getElementById('all-btn');
const openButton = document.getElementById('openn-btn');
const closedButton = document.getElementById('closed-btn');
const totalIssueCount = document.getElementById('total-issues');


const openIssuesDot = document.getElementById('open-icon');
const closedIssuesDot = document.getElementById('closed-icon');


let currentBtn = 'all-btn';
const allBtn = ['btn-primary'];
const openBtn = ['btn-success'];
const closedBtn = ['bg-purple-500'];


const allContentContainer = document.getElementById('all-content-container');
// console.log(allContentContainer);
const openContentContainer = document.getElementById('open-content-container');
const closedContentContainer = document.getElementById('closed-content-container');


const openIcon = './assets/Open-Status.png';
const closedIcon = './assets/Closed-Status.png';



function switchBtn(id) {

    // const btns = [all, openn, closed]

    // for(b of btns){
    //     const btnName = document.getElementById(b+'-btn');
    //     if(b == 'all-btn'){
    //         btnName.classList.remove('btn-outline')
    //         btnName.classList.add(...allBtnallBtn)
    //     }else if(b == 'openn-btn')


    if (id == 'openn-btn') {

        openContent()

        openButton.classList.remove('btn-outline')
        openButton.classList.add(...openBtn)
        closedButton.classList.add('btn-outline')
        closedButton.classList.remove('bg-purple-500')
        allButton.classList.add('btn-outline')
        allContentContainer.classList.add('hidden');
        openContentContainer.classList.remove('hidden');
        closedContentContainer.classList.add('hidden');

        openIssuesDot.classList.remove('text-green-100')
        openIssuesDot.classList.add('text-green-500')
        closedIssuesDot.classList.add('text-purple-100');


    } else if (id == 'closed-btn') {

        closedContent()

        closedButton.classList.remove('btn-outline')
        closedButton.classList.add(...closedBtn)
        allButton.classList.add('btn-outline')
        openButton.classList.add('btn-outline')
        closedContentContainer.classList.remove('hidden');
        openContentContainer.classList.add('hidden');
        allContentContainer.classList.add('hidden');

        closedIssuesDot.classList.remove('text-purple-100');
        closedIssuesDot.classList.add('text-purple-500');
        openIssuesDot.classList.add('text-green-100')
        openIssuesDot.classList.remove('text-green-500')


    } else if (id = 'all-btn') {

        allContent()

        allButton.classList.remove('btn-outline')
        allButton.classList.add(...allBtn)
        openButton.classList.add('btn-outline')
        closedButton.classList.remove('bg-purple-500')
        closedButton.classList.add('btn-outline')
        allContentContainer.classList.remove('hidden');
        openContentContainer.classList.add('hidden');
        closedContentContainer.classList.add('hidden');

        closedIssuesDot.classList.remove('text-purple-500');
        closedIssuesDot.classList.add('text-purple-100');
        openIssuesDot.classList.add('text-green-100')
        openIssuesDot.classList.remove('text-green-500')


    }
}


function allContent() {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url).then((res) => res.json()).then((data) => {

        allContentContainer.innerHTML = '';

        data.data.forEach(issue => {
            // console.log(issue.description);
            const card = document.createElement('div');
            // contentContainer.innerHTML = '';
            card.innerHTML = `
        <div onclick="issueDetails(${issue.id})" class="card bg-bage-100 shadow-lg rounded border-t-3 ${issue.status == 'open' ? 'border-t-green-500' : 'border-t-purple-500'} h-full">
                        <div class="space-y-3 p-4 cursor-pointer">
                            <div class="flex justify-between">
                                <img src=${issue.status == 'closed' ? closedIcon : openIcon} alt="">
                                <p class="py-1 px-5 bg-[#feecec] text-[#f36c6c] text-xs rounded-xl uppercase">${issue.priority}</p>
                            </div>
                            <div class="space-y-3">
                                <p class="text-sm text-black">${issue.title}</p>
                                <p class="text-xs line-clamp-2 overflow-hidden">${issue.description}</p>
                                <div class="flex gap-3">
                                    <div class="bg-[#feecec] rounded-xl text-[#f36c6c] flex items-center px-2 gap-1">
                                        <i class="fa-solid fa-bug"></i>
                                        <p class="py-1 text-[10px] uppercase">${issue.labels[0]}</p>
                                    </div>
                                    <div class="bg-[#fff8db] rounded-xl text-[#d97706] flex items-center px-2 gap-1">
                                        <i class="fa-solid fa-life-ring"></i>
                                        <p class="py-1 text-[10px] uppercase">${issue.labels?.[1]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="p-4 text-xs space-y-1 cursor-pointer">
                            <p>by ${issue.author}</p>
                            <p>${issue.createdAt}</p>
                        </div>
                    </div>
        `
            allContentContainer.appendChild(card);

            totalIssueCount.innerText = allContentContainer.children.length;
        });
    })
}


allContent()



function openContent() {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url).then((res) => res.json()).then((data) => {

        openContentContainer.innerHTML = '';

        data.data.forEach(issue => {

            const card = document.createElement('div');
            if (issue.status === 'open') {
                card.innerHTML = `
            <div onclick="issueDetails()" class="card bg-bage-100 shadow-lg rounded border-t-3 ${issue.status == 'open' ? 'border-t-green-500' : 'border-t-purple-500'} h-full">
                            <div class="space-y-3 p-4 cursor-pointer">
                                <div class="flex justify-between">
                                    <img src=${issue.status == 'closed' ? closedIcon : openIcon} alt="">
                                    <p class="py-1 px-5 bg-[#feecec] text-[#f36c6c] text-xs rounded-xl uppercase">${issue.priority}</p>
                                </div>
                                <div class="space-y-3">
                                    <p class="text-sm text-black">${issue.title}</p>
                                    <p class="text-xs line-clamp-2 overflow-hidden">${issue.description}</p>
                                    <div class="flex gap-3">
                                        <div class="bg-[#feecec] rounded-xl text-[#f36c6c] flex items-center px-2 gap-1">
                                            <i class="fa-solid fa-bug"></i>
                                            <p class="py-1 text-[10px] uppercase">${issue.labels[0]}</p>
                                        </div>
                                        <div class="bg-[#fff8db] rounded-xl text-[#d97706] flex items-center px-2 gap-1">
                                            <i class="fa-solid fa-life-ring"></i>
                                            <p class="py-1 text-[10px] uppercase">${issue.labels?.[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="p-4 text-xs space-y-1 cursor-pointer">
                                <p>by ${issue.author}</p>
                                <p>${issue.createdAt}</p>
                            </div>
                        </div>
            `
                openContentContainer.appendChild(card);

                totalIssueCount.innerText = openContentContainer.children.length;
            }
        });
    })
}


function closedContent() {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url).then((res) => res.json()).then((data) => {

        closedContentContainer.innerHTML = '';

        data.data.forEach(issue => {

            const card = document.createElement('div');
            if (issue.status === 'closed') {

                card.innerHTML = `
            <div onclick="issueDetails()" class="card bg-bage-100 shadow-lg rounded border-t-3 ${issue.status == 'open' ? 'border-t-green-500' : 'border-t-purple-500'} h-full">
                            <div class="space-y-3 p-4 cursor-pointer">
                                <div class="flex justify-between">
                                    <img src=${issue.status == 'closed' ? closedIcon : openIcon} alt="">
                                    <p class="py-1 px-5 bg-[#feecec] text-[#f36c6c] text-xs rounded-xl uppercase">${issue.priority}</p>
                                </div>
                                <div class="space-y-3">
                                    <p class="text-sm text-black">${issue.title}</p>
                                    <p class="text-xs line-clamp-2 overflow-hidden">${issue.description}</p>
                                    <div class="flex gap-3">
                                        <div class="bg-[#feecec] rounded-xl text-[#f36c6c] flex items-center px-2 gap-1">
                                            <i class="fa-solid fa-bug"></i>
                                            <p class="py-1 text-[10px] uppercase">${issue.labels[0]}</p>
                                        </div>
                                        <div class="bg-[#fff8db] rounded-xl text-[#d97706] flex items-center px-2 gap-1">
                                            <i class="fa-solid fa-life-ring"></i>
                                            <p class="py-1 text-[10px] uppercase">${issue.labels?.[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="p-4 text-xs space-y-1 cursor-pointer">
                                <p>by ${issue.author}</p>
                                <p>${issue.createdAt}</p>
                            </div>
                        </div>
            `
                closedContentContainer.appendChild(card);

                totalIssueCount.innerText = closedContentContainer.children.length;

            }
        });
    })
}