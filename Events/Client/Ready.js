const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
            console.log("Client has been logged in.");

            const activities = [
                "Bored", 
                "Yes",
                "Watching kzylo and chaos",
                "watching crackheads argue",
                "playing with fuckers",
                "watching da server"                 
            ]

            setInterval(() => {
                const status = activities[Math.floor(Math.random() * activities.length)];
                client.user.setPresence({ activities: [{ name: `${status}`}]});
            }, 5000);

            if(!Database) return;
            mongoose.connect(Database, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                console.log("The client is connected to the Database!")
            }).catch((err) => {
                console.log(err)
            });
        
    }
}