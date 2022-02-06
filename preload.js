'use strict';

// |- Native modules :
const path = require('path');
const fs = require('fs');
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
        __require(file){
            require(file);
        },
        __import(file){
            import(file).then(({default: defaultImport})=>{
                console.log(defaultImport);
                return defaultImport;
            }).catch((error) => 'An error occurred while loading the component dynamically');
        },
    }
)