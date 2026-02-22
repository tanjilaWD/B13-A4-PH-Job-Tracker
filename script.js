let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const allCardsSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


interviewList.push()
function calculateCount(){
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    
}
calculateCount();

function toggleStyle(id){
    
   allFilterBtn.classList.add('bg-white', 'text-[#64748B]' );
   interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]' );
   rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]' );
   
   allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white' );
   interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white' );
   rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white' );

  
   const seleted = document.getElementById(id);
   seleted.classList.remove('bg-white', 'text-[#64748B]');
   seleted.classList.add('bg-[#3B82F6]', 'text-white');
}