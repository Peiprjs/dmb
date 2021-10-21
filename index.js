/////////////////ND Modules///////////////////
// noinspection JSUnusedLocalSymbols

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
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
/////////////////Command collection///////////////////
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}
/////////////////Once ready///////////////////
client.once('ready', () => {
    console.log('Ready!');
});
/////////////////Once interaction///////////////////
// noinspection SpellCheckingInspection
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    // noinspection JSUnresolvedVariable
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        // noinspection JSUnresolvedFunction
        await interaction.reply({ content: 'Whoopsies! Something broke', ephemeral: true });
    }
});
/////////////////LogMeIntoDiscordAndBeyond///////////////////
// noinspection JSIgnoredPromiseFromCall
client.login(token);