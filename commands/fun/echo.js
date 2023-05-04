const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module_exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Echoes user input string.')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to echo back')),
  async execute(interaction) {
    const input = interaction.options.getString('input') ?? 'No input provided';

    await interaction.reply(`'Echo: ${input}`);
  }
};