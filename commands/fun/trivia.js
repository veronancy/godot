module.exports = {
    name: "trivia",
    description: "Sends a random ace attorney fact",
    cooldown: 0,
    guildOnly: true,
      execute: async (message, args, client) => {
        try {
            let replies = ["I am the best character 🙄" , "Larry's name in Japaneese is Yahari Masashi.  Yahari translates to 'I knew it' or 'Of course'.  His last name, Masashi, comes from 'Masashiku' which translates to 'with certainty'.  Instead of 'When something smells its usually the Butz', it's 'When something happens, of course it's Yahari." , "Trite is the only character who has a canon birthday, which is October 12th.  He shares a birthday with Ace Attorney's anniversary, which is very fitting since he is the orignal protag." , "My Japaneese VA is Hideki Kamiya, better known as the creator of Bayonetta, Dmc, and Okami.  See, I'm just that awesome *blocks you*" , "The name 'Gumshoe' means 'Detective' in Japaneese." , "Klavier's name means 'piano' in German.  He also says 'ja', which means 'yes' in German" , "Trite is a playable fighter in the Marvel VS Capcom fighting game along with Maya Fey, who fights with him as one character.  You see Smash Bros, this is why you should add him, THIS IS W-" , "Larry has had 9 known girlfriends in the entire triogy and out of all of them, we have only seen one, aka Cindy Stone, the first turnabout victim." , "I actually was originally intended to be more into whiskey and smoking, but the addiction was changed to coffee so I wouldn't be a bad influence on children." , "Larry's Spirit of Justice beta design contained a scarf.  Guys we could have had scarf Larry we were robbed" , "This year is Ace Attorney's 20th anniversary!" , "In the game Coffee Talk, there is a little statement you see when you look at the description of the Expresso.  It says 'Blacker than a moonless night, hotter and more bitter than hell itself.'  Sound familar?" , "Ace Attorney's trilogy has an anime!  Season 1 is the first and second game while the second season is only the third game.  I'm in it 😏"
        ,"Edgeworth's english anime VA is Christopher Wehkamp, he also voices Eraserhead from Boku no Hero Academia" , "Apollo Justice was released before Trials & Tribulations in Europe."];
            let final = replies[Math.floor(Math.random()*(replies.length))]
 message.channel.send(`${final}`)
        }
        
    
          


catch (error) {
    console.log(error)
}
    }
	
	};