const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        let ping = interaction.createdAt - Date.now()
        await interaction.reply({ content: `Pong! This message had a ping of ${ping}ms`, ephemeral: true });
    },
};