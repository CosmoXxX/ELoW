if (command === 'user-info') {
                      let inline = true
                      let resence = true
                      const status = {
                          online: "En ligne",
                          idle: "Inactif",
                          dnd: "Ne pas déranger",
                          offline: "Déconecté/Invisible"
                        }
                          
                  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
                  let target = message.mentions.users.first() || message.author
                  
                  if (member.user.bot === true) {
                    bot = "Oui";
                  } else {
                    bot = "Non";
                  }
 
