const {
    bot,
    link,
    Extra
} = require('../../../../../configs/telegram/bot');

const {msgAbout} = require('./config');
const{msg} = require('../../../../commands/impl/start/config')

const {visitor} = require('../../../../../configs/google/analytics');


bot.action('ActionHandlerAbout',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/About")
            .send();
        ctx.editMessageText(msgAbout,
            Extra.HTML().markdown().markup((m) =>
                m.inlineKeyboard([
                        [
                            m.urlButton(
                                'Зазирнути в офіс компанії',
                                'https://happymonday.ua/company/dentsu-aegis-network-ukraine'
                            )
                        ],
                        [
                            m.urlButton(
                                '📸 Instagram',
                                'https://www.instagram.com/dan_career/'
                            )
                        ],
                        [
                            m.urlButton(
                                '👤 Facebook',
                                'https://www.facebook.com/dancareer/'
                            )
                        ],
                        [
                            m.callbackButton(
                                '◀️ Повернутись назад',
                                'ActionHandlerGoBack'
                            )
                        ]
                    ]
                )
            )
        ).then();
    });

bot.action('ActionHandlerGoBack',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Menu")
            .send();
        ctx.editMessageText(msg,
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
                            't.me/alena_zakharchenko'
                        )
                    ],

                ])
            ))

    });