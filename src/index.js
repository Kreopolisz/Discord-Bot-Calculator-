require('dotenv').config();
const { Client, IntentsBitField } = require(`discord.js`);

const kreopoliz = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
});

kreopoliz.once('ready', () => {
    console.log(`${kreopoliz.user.tag} anoije to bot kai einai etoimo na se boithisei!`);

    kreopoliz.user.setActivity({
        name: "Kreopoliz Botakia",
        type: 0 // 0 = PAIZO, 1 KANO STREAM
    });
});

kreopoliz.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        return interaction.reply(`kanei ${num1 + num2} mathe mathimatika barethika na se boithao`);
    }
});

kreopoliz.login(process.env.TOKEN);