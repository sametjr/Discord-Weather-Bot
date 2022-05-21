import weather from "../weather.js";


export default client => {

    client.on("messageCreate", async message => {
        const prefix = process.env.prefix;


        // if(message.author.username != 'JSL')
        // db(`INSERT INTO mesajlar values ('${message.author.username}','${message.content.replace(/'/g, `"`)}')`);

        if(!message.content.startsWith(prefix)) return;
        
        const args = message.content.slice(prefix.length).trim().split(" ").filter(a=>a);

        

        try{
            if(args[0] === "hava"){ 
                const degree = await weather.fetchWeather(args[1]);
                const vowels = ["a", "e", "o", "ö", "ı", "i", "u", "ü"];
                message.channel.send({content:`Genel hava durumu : ${degree[0]} \n${args[1]}'${vowels.some( v => args[1].endsWith(v)) ? vowels.indexOf(args[1][args[1].length - 1]) % 2 == 0 ? "da" : "de" : vowels.indexOf(Array.from(args[1]).reverse().find(v => vowels.includes(v))) % 2 == 0 ? "da" : "de"} şuan hava ${degree[1].toFixed(1).toString()} derece! \nHissedilen sıcaklık ${(degree[2]- 273.15).toFixed(1) } derece\nMinimum sıcaklık : ${(degree[3] - 273.15).toFixed(1).toString()} derece. Maximum sıcaklık : ${(degree[4] - 273.15).toFixed(1).toString()} derece!\nRüzgar hızı : ${degree[5]} km/h. Rüzgar yönü : ${degree[6]}\nIftar vakti : ${degree[7]}:${degree[8]}`});
    
            }
        }catch{
            message.channel.send("Hava durumu bilgileri getirilemedi. Şehir ismini doğru yazdığınıza emin olunuz! 🤬")
        }

        // if(args[0] === "getir"){
        //     const query = `SELECT * from mesajlar where gonderen = '${args[1]}' LIMIT ${args[2]} DESC` 
        //     var rows = await db(query);
        //     rows.forEach(element => {
        //         message.channel.send(`Gönderen : ${element.gonderen} icerik : ${element.icerik}`);
        //     });
        // }

        if(args[0] === "öpücük"){
            message.channel.send("Ummmaahh");
        }

    })
}

