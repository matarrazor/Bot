module.exports = async client => {
    console.log(`O ${client.user.username} foi iniciado com sucesso! Com ${client.users.cache.size} usuários, ${client.channels.cache.size} canais e ${client.guilds.cache.size} servidores.`);	
    
    client.user.setActivity(": Deverzinho ", {
        type: "STREAMING",
        url: "https://www.twitch.tv/Dever"
      });

}