const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  //cooldown: seconds users has to wait before using command again
  cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		// await interaction.reply({ content: 'Pong!', ephemeral: true });
    await interaction.deferReply();
    await wait(000);
    await interaction.editReply('Pong!');
	},
};