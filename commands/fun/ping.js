const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  //cooldown: seconds users has to wait before using command again
  cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};