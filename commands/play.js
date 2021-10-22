const { SlashCommandBuilder } = require('@discordjs/builders');
const ytdl = require('ytdl-core');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Attempts to play the selected song.'),
    execute: async function (interaction) {

    },
};
