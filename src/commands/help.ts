import { EmbedBuilder, Message } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { Command } from '../index';

export default {
  name: 'help',
  description: 'this is a help command',
  execute: async (message: Message) => {
    const embed = new EmbedBuilder().setTitle('help info').setDescription('my prefix is `.`');

    const commandFiles = readdirSync(join(process.cwd(), 'dist', 'commands')).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = (await import(`./${file}`)) as Command;
      embed.addFields({ name: `${command.default.name}`, value: `${command.default.description}` });
    }

    message.channel.send({ embeds: [embed] });
  }
};
