module.exports = {
    name: "help",
    description: "Pulls up the help menu!",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            const Discord = require('discord.js-light')
                  const helpEmbed = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setTitle('Help')
          .setDescription("These are my commands!")
          .setImage("https://cdn.discordapp.com/attachments/811178974012899408/817261825846149150/tenor.gif")
          .addFields(
              { name: 'g?coffee', value: 'Sends a random cafe beverage and some facts about it!', inline: true },
              { name: 'g?godot', value: 'Sends a sexy picture of me.', inline: true },
              { name: 'g?blessed', value: 'Sends a blessed image!', inline: true },
              { name: 'g?cursed', value: 'Sends a cursed image..', inline: true },
              { name: 'g?trivia', value: 'Sends a random Ace Attorney fact, will be updated!', inline: true },
              { name: 'g?ace', value: 'Sends a random Ace Attorney character from the very first game.', inline: true },
              { name: 'g?generate', value: 'Sends a randomly generated Ace Attorney trial.', inline: true }, 
              { name: 'ayo godot,', value: 'Ask godot a question!', inline: true },
              { name: 'ayo godot what do you think about', value: 'Godot tells you what he thinks about what you send.', inline: true },
              { name: 'larry', value: 'When something smells..', inline: true },
              { name: 'mia, phoenix, coffee, klavier, gumshoe, dahlia', value: 'I react to messages containing these words!', inline: true },
              { name: 'larry edit', value: 'Sends a Larry edit.', inline: true },
              { name: 'phoenix mad sus', value: 'Sends REAL FOOTAGE of Phoenix Trite acting SUS', inline: true },  
              { name: 'cosplay', value: 'You can change your hair.', inline: true },                      
              { name: 'Thats not all..', value: 'Can you find the hidden funny commands 🤔?', inline: true },
              { name: 'Support Server', value: '[Join my Support Server](https://discord.gg/8eBtmwD)', inline: true },
                { name: 'Bot Invite', value: '[Invite me!](https://discord.com/api/oauth2/authorize?client_id=817281711188082748&permissions=8&scope=bot)', inline: true },
              { name: 'Created By', value: 'Metallix#6942 and nancy#1987', inline: true },
          
          
          )
           message.channel.send(helpEmbed).catch(console.error);
          }
        
    
          


catch (error) {
    console.log(error)
}
    }
	
	};