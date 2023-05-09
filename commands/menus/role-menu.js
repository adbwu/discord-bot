const {SlashCommandBuilder, EmbedBuilder} = requie('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role-menu')
    .setDescription('Responds with role selction menu.'),
  async execute(interaction) {
    const roleMenuEmbed = new EmbedBuilder()
      .setColor(0xff69b4)
      .setTitle(`Role Menu`)
      .setDescription(`Select the buttons below to choose your roles.`)
      
    await interaction.reply('')
  },
}