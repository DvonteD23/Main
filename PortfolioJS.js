function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Targeting Menu Linke
    const icon = document.querySelector(".hamburger-icon"); //Targeting Hamburger Icon
    menu.classList.toggle("open"); //Upon Click removing the open class
    icon.classList.toggle("open");
}