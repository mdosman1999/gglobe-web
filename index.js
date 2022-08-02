wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       50,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();












//    // Helper function for add element box list in WOW
//         WOW.prototype.addBox = function(element) {
//             this.boxes.push(element);
//         };

//         // Attach scrollSpy to .wow elements for detect view exit events,
//         // then reset elements and add again for animation
//         $('.wow').on('scrollSpy:exit', function() {
//             $(this).css({
//             'visibility': 'hidden',
//             'animation-name': 'none'
//             }).removeClass('animate__animated');
//             wow.addBox(this);
//         }).scrollSpy();