'use strict';

// |- Native modules :
const { spawn } = require('child_process');
const { app , BrowserWindow , BrowserView } = require('electron');
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']=true;

let viewReadyToLoad = null; 
console.log("initial viewReadyToLoad (null expected): ", viewReadyToLoad);

viewReadyToLoad = spawn(`npm run dev:serv`, {
    env:{
        PORT: process.env.PORT
    },
    shell: true,
})

// Dynamic import for Native module of child_process [PASSED], but [FAILED] in preload.js :
/* viewReadyToLoad = import('child_process').then(({default: cp})=>cp.spawn(
    `npm run dev:serv`, {
        env:{
            PORT: process.env.PORT
        },
        shell: true,
    }
)) */

app.whenReady().then(() => {
console.log("app was initialized");

if (viewReadyToLoad !== null) createWindow();

})

function createWindow () {

    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences : {
            preload: path.join(`${__dirname}/preload.js`),
        }
    });

    let wContents = win.webContents;
    wContents.openDevTools();

    win.on('ready-to-show', ()=>{
        console.log("'ready-to-show' : the renderer process has rendered the web content (page)");
        win.show();
    })

    win.webContents.loadURL(`http://localhost:${process.env.PORT || 8080}`);
    
    win.on('closed', ()=>{
        win = null;
    })

}