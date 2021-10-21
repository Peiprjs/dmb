/////////////////ND Modules///////////////////
const fs = require('fs');
const random = require('random')
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
/////////////////Discord Modules///////////////////
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
/////////////////Once ready///////////////////
client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);