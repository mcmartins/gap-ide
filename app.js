const {app, dialog, Menu, BrowserWindow} = require('electron');
const menu = require('./src/core.menu/index.js');

// initialize menu
menu.initialize(Menu, dialog);

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/static/index.html');
});