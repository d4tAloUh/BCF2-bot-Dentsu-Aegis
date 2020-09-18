const {
    bot,
    link,
    Extra
} = require('../../../../../configs/telegram/bot');

const {msgStudy} = require('./config');

const {visitor} = require('../../../../../configs/google/analytics');


bot.action('ActionHandlerStudyWithUs',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Study")
            .send();
        ctx.editMessageText(
            msgStudy,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'The Big Ads Theory',
                            'https://www.facebook.com/events/269954714429678/?active_tab=discussion'
                        ),
                    ],
                    [
                        m.urlButton(
                            'Summer Media Class',
                            'https://www.facebook.com/events/3010132619004801/?active_tab=discussion'
                        )
                    ],
                    [
                        m.urlButton(
                            'Media Challenge',
                            'https://www.facebook.com/events/262202894669012/?active_tab=discussion'
                        ),
                    ],
                    [
                        m.urlButton(
                            'Summer DigitalClass',
                            'https://www.facebook.com/events/445742265893924/?active_tab=discussion'
                        )
                    ],
                    [
                        m.urlButton(
                            '📸 Instagram',
                            'https://www.instagram.com/dan_career/'
                        ),

                        m.urlButton(
                            '👤 Facebook',
                            'https://www.facebook.com/dancareer/'
                        )

                    ],

                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerStudentAbilities'
                        )
                    ]

                ])
            )
        );
    });
