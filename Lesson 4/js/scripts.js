const mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const m = new Date()
const monthName = mlist[m.getMonth()]

const year = new Date().getFullYear()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const d = new Date()
const dayName = days[d.getDay()]
const day = new Date().getDate()

document.getElementById("currentDate").textContent = `${dayName}, ${day} ${monthName} ${year}`;

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide")
}
let options = {
    day:"numeric",
    month:"numeric",
    year:"numeric"
};
let lastDate = new Date();
document.getElementById('lastDate').textContent = lastDate.toLocaleDateString("en-US", options);
document.getElementById('lastTime').textContent = lastDate.toLocaleTimeString("en-US", {hour12:true});