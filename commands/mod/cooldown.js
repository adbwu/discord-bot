const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cooldown')
		.setDescription('Isolates user in a cooldown channel'),
	async execute(interaction) {
		await interaction.reply('');
	},
};