let options = {
    day:"numeric",
    month:"numeric",
    year:"numeric"
};
let lastDate = new Date();
document.getElementById('lastDate').textContent = lastDate.toLocaleDateString("en-US", options);
document.getElementById('lastTime').textContent = lastDate.toLocaleTimeString("en-US", {hour12:true});