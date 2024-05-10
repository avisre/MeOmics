 const messageBox = document.querySelector('.message-box');
    const socialLinksContainer = document.querySelector('.social-links-container');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menuItems.classList.toggle('active');
});
    
    messageBox.addEventListener('click', () => {
        socialLinksContainer.style.display = socialLinksContainer.style.display === 'none' ? 'block' : 'none';
    });
    
    // Close the social links container when clicked outside
    window.addEventListener('click', (e) => {
        if (!messageBox.contains(e.target) && !socialLinksContainer.contains(e.target)) {
            socialLinksContainer.style.display = 'none';
        }
    });
    