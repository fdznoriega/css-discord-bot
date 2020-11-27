
const {token, prefix} = require('./config.json');

const Discord = require('discord.js'); // use the discord.js module
const client = new Discord.Client(); // create a new discord client that the bot will use

// when the client is ready, fun this code
client.once('ready', () => {
	console.log('Ready!');
});

// listen for messages!
client.on('message', (message) => {
    if(message.content === `${prefix}ping`) {
        message.channel.send("pong!")
    }
});

// log in to discord with the token
client.login(token);
