const {
    bot,
    link,
    Extra
} = require('../../../../configs/telegram/bot');

const {msg} = require('./config');

const {visitor} = require('../../../../configs/google/analytics');


bot.command('start',
    ctx => {
        visitor
            .event(link, "Click Slash Command", "/start")
            .send();
        ctx.replyWithHTML(msg,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton(
                            '🧐 Про компанію',
                            'ActionHandlerAbout'
                        ),
                    ],
                    [
                        m.callbackButton(
                            '⭐️ Можливості для студентів',
                            'ActionHandlerStudentAbilities'
                        )
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/test'
                        )
                    ],

                ])
            ))

    });
