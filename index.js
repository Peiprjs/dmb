/////////////////ND Modules///////////////////
// noinspection SpellCheckingInspection

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
/////////////////Once interaction///////////////////
// noinspection SpellCheckingInspection
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
/////////////////Spagheetto Redireccto///////////////////
    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply('Server info.');
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});
/////////////////LogMeIn Discordi///////////////////
client.login(token);