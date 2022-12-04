module.exports = {
    name: "generate",
    description: "randomly generated ace attorney trial",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            const Discord = require(`discord.js-light`)
               let defends = ["Phoenix Wright", "Mia Fey", "Diego Armando", "Kristoph Gavin", "Raymond Shields", "Apollo Justice", "Athena Cykes", "Gregory Edgeworth"];
               let defense = defends[Math.floor(Math.random()*(defends.length))]

               let defendants = ["Phoenix Wright", "Mia Fey", "Diego Armando", "Kristoph Gavin", "Raymond Shields", "Apollo Justice", "Athena Cykes", "Gregory Edgeworth", "Miles Edgeworth", "Manfred Von Karma", "Franziska Von Karma", "Godot", "Larry Butz", "Klavier Gavin", "Sebastion Debeste", "Simon Blackquil", "Dick Gumshoe", "Maya Fey", "Pearl Fey", "Lotta Hart", "Ema Skye", "Lana Skye", "Trucy Wright", "Dahlia Hawthrone", "Iris Hawthrone", "Matt Engarde", "Adrian Andrews", "Ron Delite", "Dessie Delite", "Juniper Woods", "Aura Blackquil", "Bobby Fulbright", "Clay Terran", "Will Powers", "Winston Payne"];
               let defendant = defendants[Math.floor(Math.random()*(defendants.length))]


               let Prosecutions = ["Miles Edgeworth", "Manfred Von Karma", "Franziska Von Karma", "Godot", "Klavier Gavin", "Sebastion Debeste", "Simon Blackquil"];
               let prosecution = Prosecutions[Math.floor(Math.random()*(Prosecutions.length))]

               let victims = ["Phoenix Wright", "Mia Fey", "Diego Armando", "Kristoph Gavin", "Raymond Shields", "Apollo Justice", "Athena Cykes", "Gregory Edgeworth", "Miles Edgeworth", "Manfred Von Karma", "Franziska Von Karma", "Godot", "Larry Butz", "Klavier Gavin", "Sebastion Debeste", "Simon Blackquil", "Dick Gumshoe", "Maya Fey", "Pearl Fey", "Lotta Hart", "Ema Skye", "Lana Skye", "Trucy Wright", "Dahlia Hawthrone", "Iris Hawthrone", "Matt Engarde", "Adrian Andrews", "Ron Delite", "Dessie Delite", "Juniper Woods", "Aura Blackquil", "Bobby Fulbright", "Clay Terran", "Will Powers", "Winston Payne"];
               let victim = victims[Math.floor(Math.random()*(victims.length))]

               let culprits = ["Phoenix Wright", "Mia Fey", "Diego Armando", "Kristoph Gavin", "Raymond Shields", "Apollo Justice", "Athena Cykes", "Gregory Edgeworth", "Miles Edgeworth", "Manfred Von Karma", "Franziska Von Karma", "Godot", "Larry Butz", "Klavier Gavin", "Sebastion Debeste", "Simon Blackquil", "Dick Gumshoe", "Maya Fey", "Pearl Fey", "Lotta Hart", "Ema Skye", "Lana Skye", "Trucy Wright", "Dahlia Hawthrone", "Iris Hawthrone", "Matt Engarde", "Adrian Andrews", "Ron Delite", "Dessie Delite", "Juniper Woods", "Aura Blackquil", "Bobby Fulbright", "Clay Terran", "Will Powers", "Winston Payne"];
               let culprit = culprits[Math.floor(Math.random()*(culprits.length))]


               const Embed = new Discord.MessageEmbed()
               .setColor('RANDOM')
               .setTitle('Randomly Generated Case')
               .setDescription(`Here is your randomized Ace Attorney case!\nVictim: **${victim}**\nCulprit: **${culprit}**\nDefendant: **${defendant}**\nDefense: **${defense}**\nProsecutor: **${prosecution}**`)
               
               
                message.channel.send(Embed)
               }




            
            
            
        
    
          


catch (error) {
    console.log(error)
}
    }
    
    };
