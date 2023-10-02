// window.onload = function() {
//     setTimeout(function() {
//         document.getElementById('loader').style.display = "none";
//         document.getElementById('content').style.display = "block";
//     }, 2000);
// }
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  navItems.style.display = navItems.style.display === 'none' ? 'block' : 'none';
});