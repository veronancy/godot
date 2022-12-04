module.exports = {
    name: "coffee",
    description: "Random facts about coffee",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            let replies = ['Hot Chocolate may not be coffee, but it is still a very good and hot drink for those who do not like the bitterness of caffine \n Bitterness Level: 1 \n Sweetness Level: 9 \n https://assets.myfoodandfamily.com/adaptivemedia/rendition/52645_3000x2000.jpg?id=f1eaa137e42e2419720d2703e7dcbf912f5639c3&ht=650&wd=1004&clid=pim ',"Ah, good ol causal coffee.  Depending on how much cream, sugar, etc you put in it, the bitterness and sweetness level can be different, but let us assume that there is no cream or sugar involved. \n Bitterness Level: 8 \n Sweetness Level: 2 \n https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg" , "Blacker than a moonless light.. more bitter than hell itse- sorry I got a little carried away haha.  Expressos are the perfect balance between bitter and sour, I am quite a fan.  However, it isn't very sweet. \n Bitterness Level: 7 \n Sweetness Level: 1 \n https://coffeemakingworld.com/wp-content/uploads/2018/12/espresso-.jpg" , "Like hot chocolate, boba tea is a good beverage for those who aren't too into anything bitter.  It's very sweet but sometimes I accidently choke at the balls at the bottom.  That... sounds weird.. \n Bitterness Level: 0 \n Sweetness Level: 10 \n https://www.thespruceeats.com/thmb/X97M6DmQ4JgfHIZ9w2351AvXov0=/4480x2988/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-bubble-tea-766451-hero-02-104b1784762141919156913cfc86fdaf.jpg" , "Teh Tarik, a mix of tea and milk.  Pretty bitter but not very sweet.. \n Bitterness Level: 7 \n Sweetness Level: 1 \n https://www.kuali.com/wp-content/uploads/2016/06/Teh-Tarik-stock-photo.jpg" , "Mocha, the perfect mix between caffine and hot chocolate.  Good for people who are more in the middle.  My bot demimom likes this a lot. \n Bitterness Level: 4 \n Sweetness Level: 7 \n https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mocha-001-8301418.jpg" , "Ginger Lattes are a mix of coffee, ginger, and milk.  I've had some good times drinking it in the evening. \n Bitterness Level: 9 \n Sweetness Level: 2 \n https://simpleveganblog.com/wp-content/uploads/2017/12/Ginger-tea-latte.jpg" , "There's something about Cappuccinos.. I cannot tell you how many times I've heard people order these.  They're not bad, but what's the hype..?  Anyways, the cappuccino is a Italitan milky beverage. \n Bitterness Level: 8 \n Sweetness Level: 1 \n https://www.thespruceeats.com/thmb/SyX_yUyCFOtuqWC2QFrM25JTmsA=/4413x2942/filters:fill(auto,1)/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg"];
               let coffee = replies[Math.floor(Math.random()*(replies.length))]
               message.channel.send(`${coffee}`)
        }
        
    
          


catch (error) {
    console.log(error)
}
    }
	
	};