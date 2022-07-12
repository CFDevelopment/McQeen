const {Client, MessageEmbed, Util } = require('discord.js')
const fetch = require('node-fetch');


const bot = new Client()

const token = 'token'

const PREFIX = '$'

bot.on('ready', () =>{
    console.log('Connected to', bot.user)
})

module.exports = {
    help: {
      name: 'help',
      description: 'Shows all the commands in the bot',
      usage: 'rhelp',
      inHelp: 'yes'
    },
    run: function(args){
      //Run the "help" command
    }
}

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(' ')

    switch(args[0]){
        case 'mc':  
        
        if(!args[1] ) return message.channel.send('You Must Provide A Minecraft Server IP And Port For Example 0.0.0.0:25565')

                async function status(){
                    
                    let res = await fetch(`https://mcapi.xdefcon.com/server/${args[1]}/full/json`);
                    let json = await res.json();
                   
                    if (json.serverStatus = "online"){
                        const status = new MessageEmbed()
                        .setTitle('**Server Status**')
                        .addField('ServerIP', json.serverip)
                        .addField('Version', json.version)
                        .addField('Online Players', json.players)
                        .addField('MAX Players', json.maxplayers)
                        .setColor('AQUA')
                        .setTimestamp()
                        .setFooter('McQeen','https://wallpapercave.com/wp/wp2211947.jpg')
    
                        message.channel.send(status)
                        
                     }
                     else{
                         message.channel.send("Cannot Fetch Details The Server Maybe Offline Or Unreachable")
                     }
                }


            status()
    }   
    switch(args[0]){
        case 'help':
            const help = new MessageEmbed()
                   .setTitle('**👑 My Help Menu 👑**')
                   .addField('MineCraft Server Status🎮', '`$mc {serverIP} {serverPORT}`')
                   .addField('Top Minecraft Servers List!')
                   .addField('Live Minecraft Server Update', 'Coming Soon')
                   .addField('Ping', '`$ping`')
                   .addField('Creaters', 'ItzCrazyKns#3507')
                   .setColor('AQUA')
	               .setTimestamp()
                   .setFooter('McQeen','https://wallpapercave.com/wp/wp2211947.jpg')

                   message.channel.send(help)
    }
    switch(args[0]){
        case 'invite':
            const invite = new MessageEmbed()
                   .setTitle('**👑 Invite Me To Your Server 👑**')
                   .addField('Invite Me With Non-Admin Perms', 'https://discord.com/api/oauth2/authorize?client_id=929408778829439036&permissions=275414809601&scope=bot')
                   .addField('Invite Me With Admin Perms', 'https://discord.com/api/oauth2/authorize?client_id=929408778829439036&permissions=8&scope=bot')
                   .setColor('AQUA')
	               .setTimestamp()
                   .setFooter('Created By ItzCrazyKns#3507')

                   message.channel.send(invite)
    }
    switch(args[0]){
        case 'ping':
            const invite = new MessageEmbed()
                   .setTitle('**👑 McQeen"s Status👑**')
                   .addField('Ping',Math.round(bot.ws.ping) + 'ms')
                   .setColor('AQUA')
	               .setTimestamp()
                   .setFooter('Created By ItzCrazyKns#3507')

                   message.channel.send(invite)
    }
    

})

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

bot.login(token)
