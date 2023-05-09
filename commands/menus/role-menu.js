const {SlashCommandBuilder} = requie('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role-menu')
    .setDescription('Responds with role selction menu.')
}