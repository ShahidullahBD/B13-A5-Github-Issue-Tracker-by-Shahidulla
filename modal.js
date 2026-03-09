const singleIssue = document.getElementById('modal');
const contentArea = document.getElementById('content-area');
const modalBox = document.getElementById('my_modal_5');

async function issueDetails(issueId){
    // console.log(issueId, 'issueId');
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`);
    const data = await res.json();
    let issue = data.data;
    // console.log(issue);

    modalBox.innerHTML = '';

    const modalDetail = document.createElement('div');
    modalDetail.innerHTML = `
    <div class="modal-box p-5 space-y-6">
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <h3 class="text-2xl font-bold text-black">${issue.title}</h3>
                                <p class="cursor-pointer text-red-500"
                                onclick="document.getElementById('my_modal_5').close()">X</p>
                            </div>
                            <div class="flex gap-8 items-center">
                                <p class="py-1 px-5 bg-green-500 text-white text-xs rounded-xl">${issue.status}</p>
                                <div>
                                    <ul class="flex gap-8 list-disc text-xs">
                                        <li>Opened by ${issue.author}</li>
                                        <li>22/02/2026</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex gap-3">
                                <div class="bg-[#feecec] rounded-xl text-[#f36c6c] flex items-center px-2 gap-1">
                                    <i class="fa-solid fa-bug"></i>
                                    <p class="py-1 text-xs">${issue.labels[0]}</p>
                                </div>
                                <div class="bg-[#fff8db] rounded-xl text-[#d97706] flex items-center px-2 gap-1">
                                    <i class="fa-solid fa-life-ring"></i>
                                    <p class="py-1 text-xs">${issue.labels?.[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>${issue.description}</p>
                        </div>
                        <div class="grid grid-cols-2 text-left bg-[#f8fafc] p-4">
                            <div>
                                <p>Assignee:</p>
                                <p class="font-semibold">${issue.createdAt}</p>
                            </div>
                            <div>
                                <p>Assignee:</p>
                                <div class="w-25 text-center">
                                    <p class="bg-[#fff8db] py-1 text-xs px-2 rounded-xl text-[#d97706]">${issue.priority}</p>
                                </div>
                            </div>
                        </div>

                        <div class="modal-action">
                            <label onclick="document.getElementById('my_modal_5').close()"
                            for="my_modal_6" class="btn btn-primary">Close!</label>
                        </div>
                    </div>
    `
    modalBox.appendChild(modalDetail);

    modalBox.showModal();
}