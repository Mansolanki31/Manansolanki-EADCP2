 const bulb = document.getElementById('bulb');
const btnOn = document.getElementById('btn-on');
const btnOff = document.getElementById('btn-off');
btnOn.addEventListener('click', () => {
bulb.src = 'bulb_on.png';
});
btnOff.addEventListener('click', () => {
bulb.src = 'bulb_off.png';
});
