const Discord = require("discord.js-light");
const client = new Discord.Client({
    cacheGuilds: true,
    cacheChannels: false,
    cacheOverwrites: false,
    cacheRoles: false,
    cacheEmojis: false,
    cachePresences: false
});
const botsettings = require('./botsettings.json');
const fs = require('fs');
const prefix = "g?"
const activities_list = [
    `watching Larry bullshit a trial ; g?help, bot made by Metallix#6942 and nancy#1987`, 
    `watching Trite scream nonsense at me ; g?help, bot made by Metallix#6942 and nancy#1987`,
`Ace Attorney Trials & Tribulations ; g?help, bot made by Metallix#6942 and nancy#1987`,
`around with a coffee machine to get new blends ; g?help, bot made by Metallix#6942 and nancy#1987`,
`watching myself be sexy in the Ace Attorney season 2 anime ; g?help, bot made by Metallix#6942 and nancy#1987`,
`Super Smash Bros Ultimate with Larry ; g?help, bot made by Metallix#6942 and nancy#1987`,
`watching Mia's grave ; g?help, bot made by Metallix#6942 and nancy#1987`,
  ];
  client.on('ready', async () => {
console.log('godot is now kissing larry')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]);
    }, 6000);

   
      
});
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
const cooldowns = new Discord.Collection();

client.on('message', message => {
    if(message.author.id === "770848165867290645") {
        if (message.content.toLowerCase().includes("godot")) {
           message.channel.send("https://cdn.discordapp.com/attachments/714962190565638245/846462435410182225/d39jcnj-7bbd86bb-aaaf-47ac-9806-e5c8543d4573.jpg")
        }
    }
})

client.on('message', message => {
    if(message.author.id === "363492147711705088") {
        if (message.content.toLowerCase().includes("godot")) {
           message.channel.send("https://cdn.discordapp.com/attachments/714962190565638245/846462435410182225/d39jcnj-7bbd86bb-aaaf-47ac-9806-e5c8543d4573.jpg")
        }
    }
})

// client.on('message', message => {
//     if(message.author.id === "773913767171850280") {
//            message.channel.send("https://tenor.com/view/undertale-sans-dunked-mercy-heart-gif-4992920")
        
//     }
// })

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I cannot do this command inside of DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('Yo, you cannot do this man.');
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Hey, wait ${timeLeft.toFixed(1)} more seconds before using that command again!`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, client, Discord);
	} catch (error) {
		console.error(error);
		message.reply("AH shit a error occured.");
	}
  
});


client.on('message', message => {
  

    if(message.author.bot || message.channel.type === "dm") return;
        if (message.content.toLowerCase().startsWith("ayo godot,")) {

let replies = ["Yes","What-","That's it we're going to court","No","Sure","I'd ask Trite about that one","NO","YES","Larry would know what to say about that","Yes","No","Maybe..."];
    let result = replies[Math.floor(Math.random()*(replies.length))]
     message.channel.send(`${result}`)


}

})
client.on('message', message => {
  

    if(message.author.bot || message.channel.type === "dm") return;
        if (message.content.toLowerCase().startsWith("ayo godot what do you think about")) {

let replies = ["I think yes","Yeeeaaaah no","I think we need to go to court","I don't think I should ask how you came up with that question","I think you should shut the hell up now","Eh, why not","Sure","I think yes","no","yes","no","I don't think so buster","Go off bestie","I do not have an opinion"];
    let result = replies[Math.floor(Math.random()*(replies.length))]
     message.channel.send(`${result}`)

}
})

client.on("message", message => {
    try {
    if(message.author.bot || message.channel.type === "dm") return;
        if (message.content.toLowerCase().includes("larry")) {
        if(message) message.react('🧡')
          
        }
if (message.content.toLowerCase().includes("like grandpa")) {
    message.channel.send('https://cdn.discordapp.com/attachments/846458479388393493/846539499332960267/video0.mov')

}
if (message.content.toLowerCase().includes("guilty love")) {
    message.channel.send('https://cdn.discordapp.com/attachments/714962190565638245/854992940060114954/video0.mov')

}
    
          if (message.content.toLowerCase().includes("phoenix")) {
            if(message) message.react('😒')
          }
        
    
         if (message.content.toLowerCase().includes("mia")) {
            if(message) message.react('😔')
         
        }
    
         if (message.content.toLowerCase().includes("coffee")) {
            if(message) message.react('☕')
         
        }
        if (message.content.toLowerCase().includes("gumshoe")) {
            if(message) message.react('🤨')
         
        }
        if (message.content.toLowerCase().includes("dahlia")) {
            if(message) message.react('😬')
         
        }
    
        if (message.content.toLowerCase().includes("klavier")) {
           if(message) message.react('🎹')
        
       }
   

    }

catch (err) {
    catchErr(err, message);
}
})

  
client.on('message', message => {
    if(message.author.bot || message.channel.type === "dm") return;
        if (message.content.toLowerCase().includes("packing")) {
     message.channel.send(`https://cdn.discordapp.com/attachments/817294348461801513/817451178144038972/video0.mov`)
        }

        if (message.content.toLowerCase().includes("womanizer")) {
     message.channel.send(`https://cdn.discordapp.com/attachments/742418529130643697/798410633413525524/video0.mov`)


}
        if (message.content.toLowerCase().includes("larry edit")) {
     message.channel.send(`https://cdn.discordapp.com/attachments/714962190565638245/817280831117721640/video0.mov`)

}

        if (message.content.toLowerCase().includes("phoenix mad sus")) {
     message.channel.send(`https://cdn.discordapp.com/attachments/784687705807388704/806025288852045844/video0.mov`)
}
if (message.content.toLowerCase().includes("sexbomb")) {
    message.channel.send(`https://www.youtube.com/watch?v=AINfHRXx1kQ`)

}
if (message.content.toLowerCase().includes("cosplay")) {
    message.channel.send(`https://cdn.discordapp.com/attachments/781287607149133834/819976828449456128/hair.mov`)

}
        
    })

client.login(botsettings.token);