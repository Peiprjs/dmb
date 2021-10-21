const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        let ping = interaction.createdAt - Date.now()
        await interaction.reply({ content: `https://discord.com/oauth2/authorize?client_id=900664144418734080&permissions=0&scope=applications.commands%20bot`, ephemeral: true });
    },
};
