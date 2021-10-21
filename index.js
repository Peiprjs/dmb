/////////////////Modules, logins///////////////////
const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const random = require('random')
const cliProgress = require('cli-progress');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
/////////////////Once ready///////////////////
client.once('ready', () => {
    console.log('Ready!');
    client.login(token)});