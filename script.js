const Sample_image_src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png";
let fleetData=JSON.parse(localStorage.getItem('fleetData'))||[];
function saveFleetData(){
    localStorage.setItem('FleetData',JSON.stringify(fleetData));
}
const loginForm=document.getElementById('login-form');
if(loginForm){
    loginForm.addEventListener('submit',function(event){
        event.preventDefault();
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const validEmail='admin@gmail.com'
        const validPassword='admin1234';
        if(email===validEmail && password===validPassword){
            alert('login success');
            window.location.href='admin.html';
        }else{
            alert('Wrong email or password')
        }
    });

}
const fleetCardsContainer=document.getElementById('fleet-cards-container');
const fleetForm=document.getElementById('fleet-form');
const categoryFilter=document.getElementById('category-filter');
const availabilityFilter=document.getElementById('availability-filter');
const clearFilterBtn=document.getElementById("clean-filter-btn");
function createVehilcleCard(vehicle){
    const card=document.createElement('div');
    card.classList.add('vehicle-card');
    card.dataset.regNo=vehicle.regNo;
    card.innerHTML=`
    <img src="${Sample_image_src}${Math.random()}" alt="Vehicle Image">
    <p><strong>Reg No:</strong> $ {vehicle.regNo}</p>
    <p><strong>Category:</strong> $ {vehicle.category}</p>
    <p><strong>Driver Name:</strong><span class="driver-name-display">${vehicle.driverName}</span></p>
    <p><strong>Availability:</strong><span class="availability-display">${vehicle.isAvailable}</span></p>
    <button class="update-driver-btn">update driver</button>
    <button class="change-availability-btn">${vehicle.isAvailable==='Available' ?'Set Unavailable':'Set Available'}</button>
    `;
    card.querySelector('.update-driver-btn').addEventListener('click',()=>updateDriver(vehicle.regNo));
    card.querySelector('.change-availability-btn').addEventListener('click',(e)=>changeAvailability(vehicle.regNo,e.target));
    card.querySelector('.delete-vehicle-btn').addEventListener('click',()=>deleteVehicle(vehicle.regNo));
    return card;

}