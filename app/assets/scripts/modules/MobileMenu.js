import $ from "jquery";

// listening for event defined like this, may seem complicated but he sais it's much better organized this way (avoiding code "spaghetti"). Splited into 3 parts( selecting DOM elements, event handling, defining functionality)
class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    //without .bind(this) this in toggleTheMenu() would mean object we click on (icon) and we want menu content div (the one from constructor?)
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible ");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
