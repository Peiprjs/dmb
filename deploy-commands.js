/////////////////Modules///////////////////
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
/////////////////Commands definition///////////////////
const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with the ping that the bot has at that moment!'),

]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

//TODO: Configure correctly config.json (IDK something about slash commands)
//TODO: Set the commands. I need, at least play, stop, queue.