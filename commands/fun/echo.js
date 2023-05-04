const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module_exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Echoes user input string.')
};