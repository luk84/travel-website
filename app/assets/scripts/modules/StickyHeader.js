import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll"; // that's a bit different than ho i used smooth scroll (guess only needed jquery)

class StickyHeader {
  constructor() {
    // this.lazyImages = $(".lazyload"); //lazysizes by delaing images loading caused waypoints to break but seems it was the case with some older version
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints(); // methods listed here so waypoints were created as soon as page is loaded
    this.addSmoothScrolling();
    // this.refreshWaypoints(); // not needed also (lazysizes)
  }

  // refreshWaypoints() {
  //   this.lazyImages.on("load", function() {
  //     Waypoint.refreshAll(); //don't have to do the same for RevealOnScroll module as it works globaly (the way library was created)
  //   });
  // }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll(); // jquery smooth scroll method
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0], //[0] gives native DOM object, cause Waypoint cannot have here jquery object
      // handler: function() {
      //   that.siteHeader.addClass("site-header--dark");

      // will work on up and down scroll:
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark"); // wonder why only here we need 'that' and not in "element: this.headerTriggerElement[0]" as it is also in Waypoint object?
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this; //this here points towards the DOM elementfrom collection that is currently being looped
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link"); // css in primary-nav
          }
        },
        offset: "18%" //without it link highlighted when top of section hits top of browser window. with ofset 18% lower then top of browser (so earlier)
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
