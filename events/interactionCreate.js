const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    //checks to ensure it's a slash command
		if (!interaction.isChatInputCommand()) return;

    //tries to find command and registers it to variable
		const command = interaction.client.commands.get(interaction.commandName);
    
    //checks if command exists
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

    //tries to execute command
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};
