require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'add',
    description: 'Bale Duo Arithmous Gia Na Breis To Apotelesma.',
    options: [
      {
        name: 'first-number',
        description: 'O Protos Arithmos.',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'second-number', 
        description: 'O Deuteros Arithmos.',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
];


console.log("CLIENT_ID:", process.env.CLIENT_ID);
console.log("GUILD_ID:", process.env.GUILD_ID);
console.log("TOKEN starts with:", process.env.TOKEN?.slice(0, 5));

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Douleuei Slash Commands');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('douleuei to Slash Commands');
  } catch (error) {
    console.error(`den douleuei logo autou tou:`, error);
  }
})();
