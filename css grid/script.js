const navLinks = document.querySelectorAll('nav a');
const mainContent = document.getElementById('main-content');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior (page reload)

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
  
    // Add active class to clicked link
    link.classList.add('active');

    // Update main content based on clicked link ID
    const contentId = link.id.slice(4); // Remove "nav-" prefix
    const newContent = document.getElementById(contentId + '-content');
    
    if (newContent) {
      mainContent.innerHTML = newContent.innerHTML;
    } else {
      mainContent.innerHTML = "<h2>Content Not Found</h2>";
    }
  });
});
