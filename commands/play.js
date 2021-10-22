const { SlashCommandBuilder } = require('@discordjs/builders');
const ytdl = require('ytdl-core');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Attempts to play the selected song.'),
    execute: async function (interaction) {
        const queue = new Map();
        async function execute(message, serverQueue) {
            const args = message.content.split(" ");

            const voiceChannel = interaction.member.voice.channel;
            if (!voiceChannel)
                await interaction.reply({ content: `Whoopsies! You need to connect to a VC in order to use this command!`, ephemeral: true });
            const permissions = voiceChannel.permissionsFor(interaction.client.user);
            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                await interaction.reply({ content: `Error 403, forbidden. Please add the bot again with proper permissions.`, ephemeral: true });

            }
        }
        await interaction.reply({content: `Pong! This message had a ping of ${ping}ms`, ephemeral: true});
    },
};
