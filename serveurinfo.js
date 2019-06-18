informations un serveur
if (message.content === ''serveur-info') {
           
              let servIcon = message.guild.iconURL;
              let verifLevels = ["Aucun (0/4)", "Faible (1/4)", "Moyen (2/4)", "(╯°□°）╯︵  ┻━┻ (3/4)", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (4/4)"];
              let region = {
                  "brazil": ":flag_br: Brazil",
                  "eu-central": ":flag_eu: Central Europe",
                  "singapore": ":flag_sg: Singapore",
                  "us-central": ":flag_us: U.S. Central",
                  "sydney": ":flag_au: Sydney",
                  "us-east": ":flag_us: U.S. East",
                  "us-south": ":flag_us: U.S. South",
                  "us-west": ":flag_us: U.S. West",
                  "eu-west": ":flag_eu: Western Europe",
                  "vip-us-east": ":flag_us: VIP U.S. East",
                  "london": ":flag_gb: London",
                  "amsterdam": ":flag_nl: Amsterdam",
                  "hongkong": ":flag_hk: Hong Kong",
                  "russia": ":flag_ru: Russia",
                  "southafrica": ":flag_za:  South Africa"
              };
        
              function checkDays(date) {
                let now = new Date();
                let diff = now.getTime() - date.getTime();
                let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " day" : " days") + " ago";
            };
  
 
const embed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, servIcon)
                  .addField("Nom", message.guild.name, true)
                  .addField("ID", message.guild.id, true)
                  .addField("Propriétaire", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
                  .addField("Région", region[message.guild.region], true)
                  .addField("Total | Humains | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
                  .addField("Niveau de vérification", verifLevels[message.guild.verificationLevel], true)
                  .addField("Salons", message.guild.channels.size, true)
                  .addField("Rôles", message.guild.roles.size, true)
                  .addField("Date de création", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
                  .setColor('00FFFF')
                  .setThumbnail(servIcon)
              message.channel.send(embed);
            }
