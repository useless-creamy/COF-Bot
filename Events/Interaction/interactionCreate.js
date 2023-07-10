const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * 
     * @param {CommandInteraction} interaction
     * @param {Client} client
      */
     async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor('RED')
                .setDescription("eRrOr: Strangely there's been an error DM ZeroDawn ples.")
        ]}) && client.commands.delete(interaction.commandName);


        command.execute(interaction, client);
     }
   }
}