# chartist-to-image

Generating chart images from "Chartist" charts was a bit of challange, but now by using this module you can render images of your chartist chart without any hassle.


# Installation
> npm i chartist-to-image 

## Attention!

Most of the image rendering packages not compatible with "Chartist" because
chartist uses  <**foreignObject**> in their svgs. 
So becuase of that you have to replace <**foreignObject**> by using  <**text**>
**This can be easily done** like,
 >  var chartistLineChart = new Chartist.Line('.ct-chart', data, options);
   > chartistLineChart.supportsForeignObject = **false**; 

if you are using angular 2-5
> this.chartistLineChart = new Chartist.Line('.ct-chart', data, options);
>    this.chartistLineChart.supportsForeignObject = **false**; 

## Usage
Following will describes to how to use chartist-to-image on **Angular 2-5**,
but also you can take insight from following to implement in js
**Import**

 
 
    import chartist2image from 'chartist-to-image';
**Calling**

	let options = {
      outputImage: {
        quality: 0.35,
        bgcolor: '#000000',
        name: 'my-chartist-charts'
      },
      format: 'jpeg',
      download: true,
      log: true,

    };
    let base64;
    async genImage(){
    await chartist2image.toJpeg('pie-chart-content',options).then(
      (res) => {
        base64 = res;
        console.log('Logged >>>>>>>>',base64);
      }
    );
    }
It is better to use chartist-to-image with **async** and **wait** since it takes some time to render the image.

After it generates the 'base64' value you can easily use it on an HTML
like 

    <img src="{{base64-string}}"><img>
Currently chartist-to-image generates only .jpeg's, but in future we will add other formats as well.

## Options

'chartist-to-image' accepts a 'json' object which is having following attributes

|  Attribute              |                Default        |Other                         |
|----------------|-------------------------------|-----------------------------|
|outputImage|**json** Attributes **quality: 1.00**,**bgcolor: '#000000'**, **name: 'Chart Image'**    |'**quality**: 0-1 **bgcolor**: {#anyColor} **name**: {your's name to chart}             |
|format         |`.jpeg           |More formats in further releases          |
|download          |true **auto download the image after rendering**|false|


