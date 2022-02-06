'use strict';

// THIS IS AUTO TRANSPILED TO CJS by ROLLUP with some minor manually made tweaks [projektorius96]

// const {Chart/* , registerables */} = require('chart.js/auto') // if intended to use static ES6 import

/* var printChart =  */module.exports = (function(){
var chart_js = require('chart.js/dist/chart'); // if intended to use ES5 require()
// Dynamically create canvas container for charts :
const canvasElement = document.createElement('canvas');
document.body.insertAdjacentElement('afterbegin', canvasElement);
canvasElement.id = 'myChartjs';
const canvasElementBase = document.getElementById(canvasElement.id);
/* console.log(canvasElementBase) */ // [PASSED]
function setAttrs(element, attrs){
    Object.entries(attrs).forEach( ([key, value])=>element.setAttribute(key, value) );
}
setAttrs(canvasElementBase, {'width': '400','height': '400'});
/*  */
/* chart_js.Chart.register(...chart_js.registerables); */
const ctx = canvasElementBase.getContext('2d');
new chart_js.Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 21],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/* console.log(myChart); */

}());
