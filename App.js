import { Client } from 'discord.js';
import 'dotenv/config';
import { readdirSync } from "fs";

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    presence: {
        status: "dnd",
        activities: [{
            name: "SametJR Test",
            type: "STREAMING"
        }]
    }
});

//Event Loader
readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default);
    event(client);
})


client.login(process.env.token);