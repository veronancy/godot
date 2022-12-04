module.exports = {
    name: "godot",
    description: "godot",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            let replies = ["https://cdn.discordapp.com/attachments/786398992267345941/817268198528778280/unknown.png", "https://cdn.discordapp.com/attachments/714962190565638245/817271161494175784/image2.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271161276465152/image1.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271161049317386/image0.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271118024278036/image9.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271117822558218/image8.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271117608910868/image7.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271117357776917/image6.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271117105463296/image5.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271116854067210/image4.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271116643958794/image3.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271116430573568/image2.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271116204343296/image1.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271116204343296/image1.png" , "https://cdn.discordapp.com/attachments/714962190565638245/817271115965661184/image0.png"];
            let final = replies[Math.floor(Math.random()*(replies.length))]
 message.channel.send(`${final}`)
        }
        
    
          


catch (error) {
    console.log(error)
}
    }
	
	};