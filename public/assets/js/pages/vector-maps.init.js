/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Vector Maps init Js File
*/

!(function ($) {
  "use strict";

  var VectorMap = function () {};

  (VectorMap.prototype.init = function () {
    //various examples
    
    $("#world-map-markers").vectorMap({
      map: "world_mill_en",
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: false,
      regionStyle: {
        initial: {
          fill: "#d4dadd",
        },
      },
      markerStyle: {
        initial: {
          r: 9,
          fill: " #e84545",
          "fill-opacity": 0.9,
          stroke: "#fff",
          "stroke-width": 7,
          "stroke-opacity": 0.4,
        },

        hover: {
          stroke: "#fff",
          "fill-opacity": 1,
          "stroke-width": 1.5,
        },
      },
      backgroundColor: "transparent",
      markers: [
        {
          latLng: [14, 22]
        }
      ],
      
      
    },
    
    )
    
  
  
  }),
    //init
    
    ($.VectorMap = new VectorMap()),
    ($.VectorMap.Constructor = VectorMap)
    
})(window.jQuery),
  //initializing
(function ($) {
    "use strict";
    
    $.VectorMap.init();
    
})(window.jQuery);


  