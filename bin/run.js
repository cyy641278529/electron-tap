#!/usr/bin/env node

'use strict';

const electron = require('electron');
const {spawn} = require('child_process');

let processArgv = process.argv.slice(2);

let args = ['./node_modules/electron-node-tap/'].concat(processArgv);

let app = spawn(electron, args, {
  stdio: 'inherit'
});

app.on('close', () => {
  // User closed the app. Kill the host process.
  process.exit();
});
