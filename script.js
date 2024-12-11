function toggleMenu() {
    const menu = document.querySelector(".menu-links");  // Get the menu
    const icon = document.querySelector(".hamburger-icon");  // Get the hamburger icon
    menu.classList.toggle("open");  // Toggle 'open' class on the menu to show/hide it
    icon.classList.toggle("open");  // Toggle 'open' class on the hamburger icon to animate it
}
