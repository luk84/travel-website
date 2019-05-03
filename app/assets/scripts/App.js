import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileMenu = new MobileMenu();
// below was like this:
// var revealOnScroll = new RevealOnScroll();
//but we want 2 instances (for feature items and testimonials) so:
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();

//that were hypothetical examples, will leave it here

// var $ = require("jquery");
// //var Person = require("./modules/Person"); // require won't work in a browser, this is node.js, with webpack will work

// // but actually can do (ES6 way):
// import Person from "./modules/Person"; //espetially that with babel/webpack now it's converted to ES5?

// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " now owes $0 in taxes.");
//   }
// }

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Adult("Jane Smith", "orange");
// jane.greet();
// jane.payTaxes();

// $("h1").remove();
// //so it removed all h1 on site
