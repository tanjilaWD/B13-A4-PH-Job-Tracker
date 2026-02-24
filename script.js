let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function calculateCount(){
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id){

   allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
   interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
   rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

   allFilterBtn.classList.add('bg-white', 'text-[#64748B]');
   interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');
   rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');


   const selected = document.getElementById(id);
   selected.classList.remove('bg-white', 'text-[#64748B]');
   selected.classList.add('bg-[#3B82F6]', 'text-white');
   if(id === 'all-filter-btn'){
       filterSection.classList.add('hidden');
       allCardsSection.classList.remove('hidden');
   }

   if(id === 'interview-filter-btn'){
       allCardsSection.classList.add('hidden');
       filterSection.classList.remove('hidden');
       renderInterview();
   }

   if(id === 'rejected-filter-btn'){
       allCardsSection.classList.add('hidden');
       filterSection.classList.remove('hidden');
       renderRejected();
   }
}

mainContainer.addEventListener('click', function(event){

   const interviewBtn = event.target.closest('.interview-btn');
   const rejectedBtn = event.target.closest('.rejected-btn');

   if(interviewBtn){

     const card = interviewBtn.closest('.card');
     if(!card) return;

     const companyName = card.querySelector('.companyName').innerText;
     const position = card.querySelector('.position').innerText;
     const location = card.querySelector('.location').innerText;
     const type = card.querySelector('.type').innerText;
     const salary = card.querySelector('.salary').innerText;
     const description = card.querySelector('.description').innerText;

     const companyExist = interviewList.find(item => item.companyName === companyName);

     card.querySelector('.status').innerText = 'Interview';

     if(!companyExist){
        interviewList.push({
            companyName,
            position,
            location,
            type,
            salary,
            description,
            status: 'Interview'
        });
     }

     calculateCount();
   }

   if(rejectedBtn){

     const card = rejectedBtn.closest('.card');
     if(!card) return;

     const companyName = card.querySelector('.companyName').innerText;
     const position = card.querySelector('.position').innerText;
     const location = card.querySelector('.location').innerText;
     const type = card.querySelector('.type').innerText;
     const salary = card.querySelector('.salary').innerText;
     const description = card.querySelector('.description').innerText;

     const companyExist = rejectedList.find(item => item.companyName === companyName);

     card.querySelector('.status').innerText = 'Rejected';

     if(!companyExist){
        rejectedList.push({
            companyName,
            position,
            location,
            type,
            salary,
            description,
            status: 'Rejected'
        });
     }

     calculateCount();
   }

});

function renderInterview(){
    filterSection.innerHTML = '';

    interviewList.forEach(interview => {

        let div = document.createElement('div');
        div.className = 'card bg-white p-7 rounded-md border border-[#F1F2F4]';

        div.innerHTML = `
         <div class="flex justify-between">
            <div>
                <h2 class="text-xl font-bold text-[#002C5C] companyName">${interview.companyName}</h2>
                <p class="text-[#64748B] mt-1 position">${interview.position}</p>
            </div>
         </div>

         <div class="flex gap-3 my-4">
            <p class="text-[#64748B] text-sm location">${interview.location}</p>
            <p class="text-[#64748B] text-sm type">${interview.type}</p>
            <p class="text-[#64748B] text-sm salary">${interview.salary}</p>
         </div>

         <div>
            <button class="status bg-[#EEF4FF] py-2 px-3 rounded-md text-[#002C5C] mb-2 uppercase">${interview.status}</button>
            <p class="text-[#323B49] description">${interview.description}</p>
         </div>
        `;

        filterSection.appendChild(div);
    });
}

function renderRejected(){
    filterSection.innerHTML = '';

    rejectedList.forEach(rejected => {

        let div = document.createElement('div');
        div.className = 'card bg-white p-7 rounded-md border border-[#F1F2F4]';

        div.innerHTML = `
         <div class="flex justify-between">
            <div>
                <h2 class="text-xl font-bold text-[#002C5C] companyName">${rejected.companyName}</h2>
                <p class="text-[#64748B] mt-1 position">${rejected.position}</p>
            </div>
         </div>

         <div class="flex gap-3 my-4">
            <p class="text-[#64748B] text-sm location">${rejected.location}</p>
            <p class="text-[#64748B] text-sm type">${rejected.type}</p>
            <p class="text-[#64748B] text-sm salary">${rejected.salary}</p>
         </div>

         <div>
            <button class="status bg-[#EEF4FF] py-2 px-3 rounded-md text-[#002C5C] mb-2 uppercase">${rejected.status}</button>
            <p class="text-[#323B49] description">${rejected.description}</p>
         </div>
        `;

        filterSection.appendChild(div);
    });
}

function checkAndRenderEmpty() {
    if (!allCardsSection.classList.contains('hidden') && allCardsSection.children.length === 0) {
        filterSection.classList.remove('hidden');
        allCardsSection.classList.add('hidden');
        renderEmptyState();
        return;
    }
    if (!filterSection.classList.contains('hidden') && interviewList.length === 0 && rejectedList.length === 0) {
        renderEmptyState();
    }
}

function toggleStyle(id){

   allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
   interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
   rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

   allFilterBtn.classList.add('bg-white', 'text-[#64748B]');
   interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');
   rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');

   const selected = document.getElementById(id);
   selected.classList.remove('bg-white', 'text-[#64748B]');
   selected.classList.add('bg-[#3B82F6]', 'text-white');

   if(id === 'all-filter-btn'){
       filterSection.classList.add('hidden');
       allCardsSection.classList.remove('hidden');

       if(allCardsSection.children.length === 0){
           filterSection.classList.remove('hidden');
           allCardsSection.classList.add('hidden');
           renderEmptyState();
       }
   }

   if(id === 'interview-filter-btn'){
       allCardsSection.classList.add('hidden');
       filterSection.classList.remove('hidden');

       if(interviewList.length === 0){
           renderEmptyState();
       } else {
           renderInterview();
       }
   }

   if(id === 'rejected-filter-btn'){
       allCardsSection.classList.add('hidden');
       filterSection.classList.remove('hidden');

       if(rejectedList.length === 0){
           renderEmptyState();
       } else {
           renderRejected();
       }
   }
}

function renderEmptyState(){
    filterSection.innerHTML = `
        <div class="bg-white p-16 rounded-md border border-[#F1F2F4] text-center">
            <div class="flex justify-center mb-4">
                <img src="jobs.png" alt="">
            </div>
            <h2 class="text-xl font-bold text-[#002C5C] mb-2">No jobs available</h2>
            <p class="text-[#64748B] text-sm">Check back soon for new job opportunities</p>
        </div>
    `;
}


function renderEmptyState(){
    filterSection.innerHTML = `
        <div class="bg-white p-16 rounded-md border border-[#F1F2F4] text-center">
            <div class="flex justify-center mb-4">
                <img src="jobs.png" alt="">
            </div>
            <h2 class="text-xl font-bold text-[#002C5C] mb-2">No jobs available</h2>
            <p class="text-[#64748B] text-sm">Check back soon for new job opportunities</p>
        </div>
    `;
}

const totalJobsEl = document.getElementById('total-jobs');

function updateJobCount() {
    const allCards = document.querySelectorAll('#allCards .card');
    const count = allCards.length;
    totalJobsEl.innerText = `${count} job${count !== 1 ? 's' : ''}`;
}
updateJobCount();


mainContainer.addEventListener('click', function(event){
    const interviewBtn = event.target.closest('.interview-btn');
    const rejectedBtn = event.target.closest('.rejected-btn');

    if(interviewBtn || rejectedBtn){
        const card = (interviewBtn || rejectedBtn).closest('.card');
        if(!card) return;

        const companyName = card.querySelector('.companyName').innerText;
        const position = card.querySelector('.position').innerText;
        const location = card.querySelector('.location').innerText;
        const type = card.querySelector('.type').innerText;
        const salary = card.querySelector('.salary').innerText;
        const description = card.querySelector('.description').innerText;

        if(interviewBtn){
           
            rejectedList = rejectedList.filter(item => item.companyName !== companyName);

            if(!interviewList.find(item => item.companyName === companyName)){
                interviewList.push({
                    companyName, position, location, type, salary, description, status: 'Interview'
                });
            }

            card.querySelector('.status').innerText = 'Interview';
        }

        if(rejectedBtn){
            
            interviewList = interviewList.filter(item => item.companyName !== companyName);

            if(!rejectedList.find(item => item.companyName === companyName)){
                rejectedList.push({
                    companyName, position, location, type, salary, description, status: 'Rejected'
                });
            }

            card.querySelector('.status').innerText = 'Rejected';
        }

        calculateCount();
        updateJobCount();
        if(!filterSection.classList.contains('hidden')){
            const activeFilter = document.querySelector('.bg-[#3B82F6]').id;
            if(activeFilter === 'interview-filter-btn'){
                renderInterview();
            } else if(activeFilter === 'rejected-filter-btn'){
                renderRejected();
            } else {
                allCardsSection.classList.remove('hidden');
                filterSection.classList.add('hidden');
            }
        }
    }
});

function renderList(list) {
    filterSection.innerHTML = '';
    if(list.length === 0){
        renderEmptyState();
        return;
    }

    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card bg-white p-7 rounded-md border border-[#F1F2F4]';
        div.innerHTML = `
            <div class="flex justify-between">
                <div>
                    <h2 class="text-xl font-bold text-[#002C5C] companyName">${item.companyName}</h2>
                    <p class="text-[#64748B] mt-1 position">${item.position}</p>
                </div>
                <div class="flex gap-2">
                    <button class="interview-btn bg-green-100 text-green-600 px-3 py-1 rounded">INTERVIEW</button>
                    <button class="rejected-btn bg-red-100 text-red-600 px-3 py-1 rounded">REJECTED</button>
                </div>
            </div>
            <div class="flex gap-3 my-4">
                <p class="text-[#64748B] text-sm location">${item.location}</p>
                <p class="text-[#64748B] text-sm type">${item.type}</p>
                <p class="text-[#64748B] text-sm salary">${item.salary}</p>
            </div>
            <div>
                <button class="status bg-[#EEF4FF] py-2 px-3 rounded-md text-[#002C5C] mb-2 uppercase">${item.status}</button>
                <p class="text-[#323B49] description">${item.description}</p>
            </div>
        `;
        filterSection.appendChild(div);
    });
}

function renderInterview() { renderList(interviewList); }
function renderRejected() { renderList(rejectedList); }

allFilterBtn.addEventListener('click', () => {
    toggleStyle('all-filter-btn');
    filterSection.classList.add('hidden');
    allCardsSection.classList.remove('hidden');
    if(allCardsSection.children.length === 0) renderEmptyState();
});

interviewFilterBtn.addEventListener('click', () => {
    toggleStyle('interview-filter-btn');
    allCardsSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
});

rejectedFilterBtn.addEventListener('click', () => {
    toggleStyle('rejected-filter-btn');
    allCardsSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
});

mainContainer.addEventListener('click', function(event){
    const deleteBtn = event.target.closest('.delete-btn');
    if(deleteBtn){
        const card = deleteBtn.closest('.card');
        if(!card) return;
        const companyName = card.querySelector('.companyName').innerText;
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);
        card.remove();

        calculateCount();
        updateJobCount();
    }

});

function updateCounts() {
    const totalElement = document.getElementById('total');
    const totalJobsText = document.getElementById('total-jobs');
    const cards = document.querySelectorAll('#allCards .card');
    const count = cards.length;
    totalElement.innerText = count;
    totalJobsText.innerText = `${count} job${count !== 1 ? 's' : ''}`;
}

mainContainer.addEventListener('click', function(event){
    const deleteBtn = event.target.closest('.delete-btn');
    if(deleteBtn){
        const card = deleteBtn.closest('.card');
        if(card){
            card.remove();
            updateCounts();;
        }
    }

});