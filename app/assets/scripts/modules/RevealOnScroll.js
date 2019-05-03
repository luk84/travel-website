import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

// class RevealOnScroll {
//   constructor() {
//     this.itemsToReveal = $(".feature-item"); // " ,.testimonials" could gohere but we want it to have different waypoint offset
//     this.hideInitially();
//     this.createWaypoints();
//   }

//   hideInitially() {
//     this.itemsToReveal.addClass("reveal-item");
//   }

//   createWaypoints() {
//     this.itemsToReveal.each(function() {
//       var currentItem = this;
//       new Waypoint({
//         element: currentItem,
//         handler: function() {
//           $(currentItem).addClass("reveal-item--is-visible");
//         },
//         offset: "85%" //height of the window
//       });
//     });
//   }
// }

//so changet it to:
class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset; // has to be before createWaypoints()
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        //have access to waypoint object cause imported waypoints
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        //offset: this.offsetPercentage //this by default here points to the waypoint object being created, with 'that' variable will be previous context
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
