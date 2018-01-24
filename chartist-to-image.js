( function (root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define("chartist2image", [], function () {
            return (root["chartist2image"] = factory());
        });
    } else if (typeof module === "object" && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        root["chartist2image"] = factory();
    }
}(this, function () {


    (function (window, document) {
        'use strict';


        var domtoimage = require('dom-to-image');
        var chartist2image = {
            vaersion: "0.0.1"
        };

        chartist2image.toJpeg = function (divID) {
            domtoimage.toJpeg(document.getElementById(divID), {quality: 0.95, bgcolor: "#ffffff"})
                .then(function (dataUrl) {
                        var img = new Image();
                        img.src = dataUrl;
                        document.body.appendChild(img);
                        var link = document.createElement("a");
                        link.download = divID + ".jpeg";
                        link.href = dataUrl;
                        link.click();
                        console.log({title: "pie-chart", content: img.src});


                    },
                    function (error) {

                        console.log("Error occurred while rendering the Graph >>>>", error);
                    });
        };
    }(window, document));

    return chartist2image;

}));