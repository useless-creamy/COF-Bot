const { Client, MessageEmbed } = require("discord.js");
const { connection } = require('mongoose');
require("../../Events/Client/Ready");


module.exports = {
    name: "status",
    description: "Shows the status & activity of COF bot.",
    permission: "SEND_MESSAGES",
    /**
     * 
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Response = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**Client**: \`✅ONLINOS\` - \`${client.ws.ping}MILISECONDS\`\n **Active since**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
        **Database**: \`${switchTo(connection.readyState)}\``)

        interaction.reply({ embeds: [Response]})
    }
}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0 : status = `❌ DISCONNECTED`
        break;
        case 1 : status = `✅ CONNECTED`
    }
    return status;
}
