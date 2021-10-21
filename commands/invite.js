const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invites')
        .setDescription('Replies with the bot invitation!'),
    async execute(interaction) {
        await interaction.reply({ content: `https://discord.com/oauth2/authorize?client_id=900664144418734080&permissions=3149064&scope=applications.commands%20bot`, ephemeral: true });
    },
};
