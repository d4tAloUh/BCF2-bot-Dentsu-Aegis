const {
    bot,
    link,
    Extra
} = require('../../../../../configs/telegram/bot');

const {msgInternship, msgStudyWithUs, msgWorkWithUs} = require('./config');


const {visitor} = require('../../../../../configs/google/analytics');


bot.action('ActionHandlerStudentAbilities',
    ctx => {
        visitor
            .event(link, "Click Action", "/show/StudentAbilities")
            .send();
        ctx.editMessageText(
            msgInternship,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton(
                            '🧷 Працюй з нами',
                            'ActionHandlerWorkWithUs'
                        ),
                    ],
                    [
                        m.callbackButton(
                            '📚 Навчайся з нами',
                            'ActionHandlerStudyWithUs'
                        )
                    ],
                    [
                        m.callbackButton(
                            '◀️ Повернутись назад',
                            'ActionHandlerGoBack'
                        )
                    ]
                ])
            )
        );
    });
