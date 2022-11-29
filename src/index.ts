import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log('bot is online');
});

client.on('messageCreate', message => {
  if (message.content === 'ping') message.channel.send('hello');
});

client.login(process.env.TOKEN);
