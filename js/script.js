function myFunction(x) {
    x.classList.toggle("change");

    // Open the side menu and overlay
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Close the menu only when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');
    const menuButton = document.querySelector('.container');

    sideMenu.classList.remove('open');
    overlay.classList.remove('open');
    menuButton.classList.remove('change');
});

// Prevent closing the menu when clicking outside (remove this if you want to close on overlay click)
document.querySelector('.overlay').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing the menu when clicking outside
});