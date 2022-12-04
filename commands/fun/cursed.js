module.exports = {
    name: "cursed",
    description: "Sends a random cursed ace image",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            let replies = ["https://cdn.discordapp.com/attachments/801984308407566366/801987113154510868/image0.png","https://cdn.discordapp.com/attachments/801984308407566366/801987113620471828/image1.png","https://cdn.discordapp.com/attachments/801984308407566366/801987113900834836/image2.png","https://cdn.discordapp.com/attachments/801984308407566366/801987114203611146/image3.png","https://cdn.discordapp.com/attachments/801984308407566366/801987114505207818/image4.png","https://cdn.discordapp.com/attachments/801984308407566366/801987115118231582/image5.jpg","https://cdn.discordapp.com/attachments/801984308407566366/801987115449319474/image6.jpg","https://cdn.discordapp.com/attachments/801984308407566366/801988477646274570/video0.mp4","https://cdn.discordapp.com/attachments/801984308407566366/801988490451484712/video1.mp4","https://cdn.discordapp.com/attachments/801984308407566366/801988527503048724/image0.png","https://media.discordapp.net/attachments/817292622640185384/817406306531934218/y3q0yoq3z2d31.png?width=1004&height=473","https://media.discordapp.net/attachments/817292622640185384/817406574187905054/c74.png?width=694&height=473","https://media.discordapp.net/attachments/817292622640185384/817406704341745694/unknown.png","https://media.discordapp.net/attachments/817292622640185384/817406767247130634/DcNwfCFUQAAw_uN.png?width=353&height=473","https://media.discordapp.net/attachments/817292622640185384/817406817851670588/47bbcb16c2c88228c5f67e5748094f3a.png?width=315&height=473","https://cdn.discordapp.com/attachments/817292622640185384/817406947610722304/7igj44j6nhs31.png","https://tenor.com/view/ace-attorney-phoenix-wright-objection-phoenix-wright-gif-17060373","https://cdn.discordapp.com/attachments/817292622640185384/817465945823117322/80b22bee12a5b6e6ae44d5c4cacc4606.png","https://cdn.discordapp.com/attachments/817292622640185384/817466221057933372/270px-Phoenix_muscle.png","https://cdn.discordapp.com/attachments/817292622640185384/817466793265856562/unknown.png","https://cdn.discordapp.com/attachments/817292622640185384/817466970617282580/unknown.png","https://cdn.discordapp.com/attachments/817292622640185384/817467020520980540/unknown.png","https://cdn.discordapp.com/attachments/817292622640185384/817467120812032000/unknown.png","https://cdn.discordapp.com/attachments/817292622640185384/817469340198371358/zod5vmp4dek61.png","https://www.youtube.com/watch?v=zedQa27c5XY","https://cdn.discordapp.com/attachments/817292622640185384/834254240092389376/unknown.png","https://cdn.discordapp.com/attachments/817292622640185384/831004393553526834/image0.jpg","https://cdn.discordapp.com/attachments/817292622640185384/830260907182784514/2F7DAD2B-FDD8-4CFC-A5FC-D5BAEBA8A437.jpeg","https://cdn.discordapp.com/attachments/817292622640185384/827279342836514846/unknown.png","https://cdn.discordapp.com/attachments/742418529130643697/827231359981584384/unknown.png"];
               let coffee = replies[Math.floor(Math.random()*(replies.length))]
               message.channel.send(`${coffee}`)
        }
        
    
          


catch (error) {
    console.log(error)
}
    }
	
	};