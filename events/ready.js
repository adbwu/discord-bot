const { Events } = require('discord.js');

//logs to console when client is ready
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};