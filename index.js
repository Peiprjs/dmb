/////////////////Required modules///////////////////
const fs = require('fs');
const Discord = require("discord.js");
const config = require("./config.json");
const random = require('random')
const cliProgress = require(
    'cli-progress');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};
console.log("Gay")