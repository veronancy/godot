module.exports = {
    name: "blessed",
    description: "Sends a random blessed Ace attorney image!",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            let replies = ["https://media.discordapp.net/attachments/801984296054685746/801987000822923284/image0.jpg?width=672&height=473","https://cdn.discordapp.com/attachments/801984296054685746/801987001330827284/image1.png","https://cdn.discordapp.com/attachments/801984296054685746/801987002177945600/image2.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987002424623124/image3.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987002424623124/image3.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987002702102538/image4.png","https://cdn.discordapp.com/attachments/801984296054685746/801987003016544286/image5.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987003276984350/image6.png","https://cdn.discordapp.com/attachments/801984296054685746/801987004114927627/image7.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987004396601344/image8.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987004711436308/image9.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801987047002079272/image0.png","https://cdn.discordapp.com/attachments/801984296054685746/801987047329759282/image1.png","https://cdn.discordapp.com/attachments/801984296054685746/801987047795458078/image2.png","https://cdn.discordapp.com/attachments/801984296054685746/801987048500232293/image3.jpg","https://cdn.discordapp.com/attachments/801984296054685746/801988049353048094/image0.png"
        ,"Edgeworth's english anime VA is Christopher Wehkamp, he also voices Eraserhead from Boku no Hero Academia" , "Apollo Justice was released before Trials & Tribulations in Europe."];
               let coffee = replies[Math.floor(Math.random()*(replies.length))]
               message.channel.send(`${coffee}`)
        }
        
    
          


catch (error) {
    console.log(error)
}
    }
	
	};