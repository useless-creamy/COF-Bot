const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");



module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member
     */
    execute(member) {

        const { user, guild } = member;

        member.roles.add("1128012620683808768");
        
        const Welcomer = new WebhookClient({
            id: "1128008306800201890",
            token: "VwbCOP5SWq1WPpkzPk-Ud4S1g_XdzAhS9OZbocKRs2qvX400x4zULYOkNQCWD1-fc0MA"
        });


        const Welcome = new MessageEmbed()
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setColor("AQUA")
        .setDescription(`HILLO ${member} and welcome to the COF aka City of Fuckheads. The Mayor is Sxnflower, and yes. But pleae be careful of Hubert, he might be hungry so just be careful THANKE for listening......\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\n
        Member Count: **${guild.member}**`)
        .setTimestamp()

        Welcomer.send({embeds: [Welcome]})
    }
}