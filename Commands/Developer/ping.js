const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Shows the latency to Discord.",
    permission: 'SEND_MESSAGES',
    /**
     * 
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    execute(interaction, client) {
        const Respone1 = new MessageEmbed()
        .setColor("#fd9f00")
        .setDescription(`Pong! **${client.ws.ping}**🏓`)
        interaction.reply({ embeds: [Respone1]})
    }
}