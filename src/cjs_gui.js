// import {Pane} from 'tweakpane';
// export default (function(){
// const pane = new Pane();
// const PARAMS = {
//     factor: 123,
//     title: 'hello',
//     color: '#0f0',
// };
// pane.addInput(PARAMS, 'factor');
// pane.addInput(PARAMS, 'title');
// pane.addInput(PARAMS, 'color');
// }());

module.exports = (function(){
    'use strict';
    const Pane = require('tweakpane').Pane;

    const pane = new Pane();
    
    const btnRef = pane.addButton({
        title: 'Print me',
    })

    btnRef.on('click', (e)=>{
    })

}());