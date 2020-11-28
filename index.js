
const {token, prefix} = require('./config.json');

const Discord = require('discord.js'); // use the discord.js module
const client = new Discord.Client(); // create a new discord client that the bot will use

// when the client is ready, run this code
client.once('ready', () => {
	console.log('Ready!');
});

// listen for messages!
client.on('message', (message) => {

    // lets check the author and the presence of the prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // slice removes characters from a string
    // trim removes white space from the sides
    // split creates an array from that string

    // NEW CODE
    if(command === 'beep') {
        message.channel.send("boop");
    }
    else if(command === 'ping') {
        message.channel.send("pong");
    }

    // OLD CODE
    // if(message.content === `${prefix}ping`) {
    //     message.channel.send("pong!")
    // }
    // else if(message.content === `${prefix}beep`) {
    //     message.channel.send("boop");
    // }

});

// log in to discord with the token
client.login(token);
