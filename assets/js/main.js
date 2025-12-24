function toggleMobileNav(){
  const nav = document.getElementById('mobileNav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
