# chartist-to-image

Generating chart images from "Chartist" charts was a bit of challange, but now by using this module you can render images of your chartist chart without any hassle.


# Installation
> npm i chartist-to-image 

## Attention!

Most of the image rendering packages not compatible with "Chartist" because
chartist uses  <**foreignObject**> in their svgs. 
So becuase of that you have to replace <**foreignObject**> by using  <**text**>
This can be easily done like,
 >  var chartistLineChart = new Chartist.Line('.ct-chart', data, options);
   > chartistLineChart.supportsForeignObject = **false**; 

if you are using angular 2-5
> this.chartistLineChart = new Chartist.Line('.ct-chart', data, options);
>    this.chartistLineChart.supportsForeignObject = false; 

