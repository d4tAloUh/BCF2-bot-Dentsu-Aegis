const { bot, link } = require('../../../../configs/telegram/bot');
const { msg } = require('./config');

const { visitor } = require('../../../../configs/google/analytics');

bot.command('help',
    ctx => {
        visitor
            .event(link, "Click Slash Command", "/help")
            .send();
        ctx.reply(msg)
    });
