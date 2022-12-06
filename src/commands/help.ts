import { Message } from 'discord.js';

export default {
  name: 'help',
  description: 'this is a help command',
  execute: (message: Message) => {
    message.channel.send('help');
  }
};
