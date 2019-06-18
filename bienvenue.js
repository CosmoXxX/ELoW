client.on("guildMemberAdd", member =>{
    const welcome = member.guild.channels.find((x) => x.id === "")//id du chanel entre les "" 
    let b_embed = new Discord.RichEmbed()
    .setDescription(`${member.user.username} nous a rejoin :poop:`)
    return welcome.send(b_embed)
})
 
