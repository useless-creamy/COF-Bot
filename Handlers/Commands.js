const { Perms } = require("../Validation/Permissions");
const { Client, ApplicationCommandManager } = require("discord.js");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table")

/**
 * 
 * @param {Client} client
 */
module.exports = async(client) => {
    const Table = new Ascii("Commands Loaded");

    CommandsArray = [];

    (await PG(`${process.cwd().replace(/\\/g, "/")}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if(!command.name)
        return Table.addRow(file.split("/")[7], "❌ FAILED", "Missing a name.");

        if(!command.description)
        return Table.addRow(file.split("/")[7], "❌ FAILED", "Mising a description.");

        if(command.permission) {
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else
            return Table.addRow(command.name, "⛔ FAILED", "Permission is invalid.")
        }

        client.commands.set(command.name, command);
        CommandsArray.push(command);

        await Table.addRow(command.name, "✅");
    });

    console.log(Table.toString());


    client.on("ready", async () => {
        const MainGuild = await client.guilds.cache.get("1126818815725027390")


    });


    
    
}