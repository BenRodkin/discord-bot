// Version 1.5
const Discord = require('discord.js')
const client = new Discord.Client();
const auth = require('./auth.json')
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token)

let commands = [];
let specialCommands = [];

//Default constructor for the command list

/*
commands.push ({
'command' : Your command,
'result' : Your output
})
*/

//List all commands here!
commands.push({'command' : 'test', 'result' : 'It worked - Robert Openhiemer'});
commands.push({'command' : 'hi', 'result' : 'Hello, hope you are having a great day'});
commands.push({'command' : 'blake', 'result' : 'Blake is the leader/founder of SLIC. He is also a SLIC god.'});
commands.push({'command' : 'Why are you great?', 'result' : 'Because Kody|1774 created me'});
commands.push({'command' : 'kody2', 'result' : 'Kody\'s second minon'});
commands.push({'command' : 'lucas', 'result' : 'The best animal is a Platypus!'});
commands.push({'command' : 'tank', 'result' : 'https://cdn.discordapp.com/attachments/633489197528907777/633489395554582567/mm-tank_memes-01_29_18-600-18.jpg'});
commands.push({'command' : 'scores', 'result' : 'Scores are not available yet & WIP'});
commands.push({'command' : 'mark the great', 'result' : 'THE GREATEST FTC PROGRAM LEADER!!!'});
commands.push({'command' : 'slicmeme', 'result' : 'https://media.discordapp.net/attachments/481176870096732160/634161801449439252/oxy_slic_blake.jpg'});
commands.push({'command' : 'slic', 'result' : 'https://youtu.be/ZaQnfhF58_A'});
commands.push({'command' : 'server', 'result' : '`Server name: '+ message.guild.name + '\nTotal members: ' + message.guild.memberCount + '`'});
specialCommands.push({'command' : 'help', 'result' : function() {
    var text = 'Here are a list of commands to try: \n';
    for(let j = 0; j < commands.length; j++) {
        text += String(commands[j].command.substring(0,1)) + String(commands[j].command.substring(1,commands[j].command.length)) + '\n';
    }
    msg.reply(text + '\nType help2 to see more commands!');
}});
specialCommands.push({'command' : 'help2', 'result' : function() {
    var text = 'Here are a list of commands to try: \n';
    for(let j = 0; j < commands.length; j++) {
        text += specialCommands[j].command.substring(0,1).toUpperCase + specialCommands[j].command + '\n';
    }
    msg.reply(text + '\nType help to see more commands!');
}});
/*specialCommands.push({'command' : 'server', 'result' : function() {
}});*/

client.on('message', msg => {

    var input = "";
    var valid = true;                                                        //Is the input valid?
    var doesExist = false;                                                    //Does the command exist?

    if(msg.content.substring(0,1) == "^") {
        input = String(msg.content.substring(1,msg.content.length).toLowerCase()) ;                        //Gets the text that the user inputted
        valid = true;                                                        //Input is valid
		
    } else {
        valid = false;                                                        //Input is not valid
    }


    if (valid) {



        //msg.reply(input);
        for (let i = 0; i < commands.length; i++) {                            //Cycles through each of the items in the list of commands

            if (String(commands[i].command).toLowerCase() === input) {
                msg.reply(commands[i].result);                                //Replies back with the result
                doesExist = true;                                            //Command does exist
                //break;                                                        //Ends the For loop
			}
        }

        if (!doesExist) {

            for (let i = 0; i< specialCommands.length; i++) {                //Cycles through the special commands
                if (String(specialCommands[i].command).toLowerCase() === input) {
                    specialCommands[i].result;
                    doesExist = true;
                   // break;
                }
            }
            if (!doesExist) {
                msg.reply('Sorry, that command does not exist.');                //Alternative statement if the command does not exist
            }
        }
    }

});


//Ping system (To keep the bot online 24/7)
const http = require('http');
const espress = require('express');
const app = express();
app.ger("/", (request, response) => {
	console.log(Date.now() + " Ping Recieved");
	response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
	http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 255000);
//End of ping system
