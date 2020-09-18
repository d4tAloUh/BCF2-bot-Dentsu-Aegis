const {
    bot,
    link,
    Extra
} = require('../../../../../configs/telegram/bot');

const {msgWorkWithUs, msgAccountManager, msgBookKeeper, msgCopyWriter, msgGraphicDesigner, msgHRManager, msgSEOSpecialist} = require('./config');


const {visitor} = require('../../../../../configs/google/analytics');

bot.action('ActionHandlerWorkWithUs',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/WorkWithUs")
            .send();
        ctx.editMessageText(
            msgWorkWithUs,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton(
                            'Junior Account manager',
                            'ActionHandlerWorkJuniorAccount'
                        ),
                    ],
                    [
                        m.callbackButton(
                            'Creative Copywriter',
                            'ActionHandlerWorkCreativeCopywriter'
                        ),
                    ],
                    [
                        m.callbackButton(
                            'Junior Book-Keeper',
                            'ActionHandlerWorkJuniorBookKeeper'
                        ),
                    ],
                    [
                        m.callbackButton(
                            'Junior HR Manager',
                            'ActionHandlerWorkJuniorHRManager'
                        ),
                    ],
                    [
                        m.callbackButton(
                            'Junior SEO specialist',
                            'ActionHandlerWorkJuniorSEOSpecialist'
                        ),
                    ],
                    [
                        m.callbackButton(
                            'Graphic Designer',
                            'ActionHandlerWorkGraphicDesigner'
                        ),
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerStudentAbilities'
                        ),
                    ]
                ])
            )
        );
    });

bot.action('ActionHandlerWorkJuniorAccount',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Work/JuniorAccount")
            .send();
        ctx.editMessageText(
            msgAccountManager,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            '📃 Надіслати резюме',
                            'https://forms.office.com/Pages/ResponsePage.aspx?id=nrjj_-a1UEajN8fzwNwAs3ZpTSoHZ0JOk2vjwMN8XG5UQlNIVldITjhPWERQMjhTSkNHMDZEUEZaQi4u'
                        ),
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/alena_zakharchenko'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerWorkWithUs'
                        ),
                    ]

                ])
            )
        );
    });

bot.action('ActionHandlerWorkCreativeCopywriter',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Work/CreativeCopywriter")
            .send();
        ctx.editMessageText(
            msgCopyWriter,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            '📃 Надіслати резюме',
                            'https://forms.office.com/Pages/ResponsePage.aspx?id=nrjj_-a1UEajN8fzwNwAs3ZpTSoHZ0JOk2vjwMN8XG5UQlNIVldITjhPWERQMjhTSkNHMDZEUEZaQi4u'
                        ),
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/alena_zakharchenko'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerWorkWithUs'
                        ),
                    ]

                ])
            )
        );
    });

bot.action('ActionHandlerWorkJuniorBookKeeper',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Work/JuniorBookkeeper")
            .send();
        ctx.editMessageText(
            msgBookKeeper,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            '📃 Надіслати резюме',
                            'https://forms.office.com/Pages/ResponsePage.aspx?id=nrjj_-a1UEajN8fzwNwAs3ZpTSoHZ0JOk2vjwMN8XG5UQlNIVldITjhPWERQMjhTSkNHMDZEUEZaQi4u'
                        ),
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/alena_zakharchenko'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerWorkWithUs'
                        ),
                    ]

                ])
            )
        );
    });

bot.action('ActionHandlerWorkJuniorHRManager',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Work/JuniorHRManager")
            .send();
        ctx.editMessageText(
            msgHRManager,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            '📃 Надіслати резюме',
                            'https://forms.office.com/Pages/ResponsePage.aspx?id=nrjj_-a1UEajN8fzwNwAs3ZpTSoHZ0JOk2vjwMN8XG5UQlNIVldITjhPWERQMjhTSkNHMDZEUEZaQi4u'
                        ),
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/alena_zakharchenko'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerWorkWithUs'
                        ),
                    ]

                ])
            )
        );
    });

bot.action('ActionHandlerWorkJuniorSEOSpecialist',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Work/JuniorSEOSpecialist")
            .send();
        ctx.editMessageText(
            msgSEOSpecialist,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            '📃 Надіслати резюме',
                            'https://forms.office.com/Pages/ResponsePage.aspx?id=nrjj_-a1UEajN8fzwNwAs3ZpTSoHZ0JOk2vjwMN8XG5UQlNIVldITjhPWERQMjhTSkNHMDZEUEZaQi4u'
                        ),
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/alena_zakharchenko'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerWorkWithUs'
                        ),
                    ]

                ])
            )
        );
    });

bot.action('ActionHandlerWorkGraphicDesigner',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/Work/GraphicDesigner")
            .send();
        ctx.editMessageText(
            msgGraphicDesigner,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            '📃 Надіслати резюме',
                            'https://forms.office.com/Pages/ResponsePage.aspx?id=nrjj_-a1UEajN8fzwNwAs3ZpTSoHZ0JOk2vjwMN8XG5UQlNIVldITjhPWERQMjhTSkNHMDZEUEZaQi4u'
                        ),
                    ],
                    [
                        m.urlButton(
                            '✉️Поспілкуватись з представником    ',
                            't.me/alena_zakharchenko'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerWorkWithUs'
                        ),
                    ]

                ])
            )
        );
    });


