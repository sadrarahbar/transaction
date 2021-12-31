const pages = [{
    pageId: '1',
    pageName: 'اشخاص حقیقی ایرانی',
    plans: [{
        planId: '1',
        planName: 'مراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '650000000',
            cashWithdrawal: '150000000',
            paymentFacilities: '150000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'فاقد محدودیت',
            cardToCard: '150000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '150000000',
            paya: '500000000',
            satna: 'فاقد محدودیت سقف حداقل یکصدو پنجاه میلیون ریال'
        }, {
            description: [
                'در انتقال وجه حضوری برای مبالغ بالاتر از دو میلیارد ریال ارائه مستندات بابت انتقال وجه الزامی است.',
                'واریز مبالغ نقدی بالاتر از 650 میلیون ریال در مراجعه حضوری مستلزم تکمیل فرم CTR می باشد.',
                ' حداکثر تراکنش خرید از هر کارت متعلق به اشخاص حقیقی بالاتر از 18 سال ( به استتثناء شرکت های هواپیمایی ، خودروسازی و شرکت پالایش و پخش فراورده های نفتی ایران ) روزانه پانصد میلیون ریال و مبلغ تراکنش های کارتی وی در شبکه بانکی روزانه مبلغ یک میلیارد ریال می باشد.'
            ],
            note: [
            ]
        }]
    }, {
        planId: '2',
        planName: 'تجهیزات مکانیزه ATM, BTM, CRS, BCR, VTMمراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '100000000',
            cashWithdrawal: '2000000',
            paymentFacilities: 'فاقد محدودیت',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '3',
        planName: 'کیوسک و کش لس',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '4',
        planName: 'سامانه بام، همراه بام',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه یک میلیارد ریال، ماهانه پنج میلیارد ریال',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '500000000',
            satna: '1000000000'
        }]
    }, {
        planId: '5',
        planName: 'سامانه سبا',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه یک میلیارد ریال، ماهانه پنج میلیارد ریال',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '250000000',
            satna: '500000000'
        }]
    }, {
        planId: '6',
        planName: 'همراه بانک',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه یک میلیارد ریال، ماهانه پنج میلیارد ریال',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '250000000',
            satna: '500000000'
        }]
    }, {
        planId: '7',
        planName: 'سایر اپلیکیشن ها (ایوا، بله، شصت و...)',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }]
}, {
    pageId: '2',
    pageName: 'اشخاص حقیقی ایرانی محجور( زیر 18 سال )',
    plans: [{
        planId: '1',
        planName: 'مراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '650000000',
            cashWithdrawal: '150000000',
            paymentFacilities: '150000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه پانصد میلیون ریال و مجموع ماهانه پنج میلیارد ریال',
            cardToCard: '150000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '150000000',
            paya: '500000000',
            satna: 'فاقد محدودیت سقف حداقل یکصدو پنجاه میلیون ریال'
        }, {
            description: [
                'آستانه مجاز مبالغ برداشت حضوری از کلیه حسابهای سپرده متعلق به شخص محجور روزانه مبلغ پانصد میلیون ریال و ماهانه مبلغ پنج میلیارد ریال می باشد.',
                'واریز مبالغ نقدی بالاتر از 650 میلیون ریال در مراجعه حضوری مستلزم تکمیل فرم CTR می باشد.',
                'حداكثر تراكنش خريد روزانه از هر كارت متعلق به اشخاص بالاتر از ۱۲سال تمام تا ۱8سال تمام و همچنین مجانین و اشخاص غیررشید بالاتر از 18 سال تمام مبلغ يکصد و پنجاه میلیون ريال و مجموع تراكنشهای انجام شده خريد با كل كارتها در شبکه بانکي برای اشخاص مذكور ، روزانه پانصد میلیون ريال ميباشد ، در هر حال مجموع تراکنش های خرید با کارت های اختصاص یافته به حساب های مشتری در هر ماه نباید از یک میلیارد ریال بالاتر رود.',
                ' حداكثر تراكنش خريد روزانه از هر كارت متعلق به اشخاص بالاتر از 7 سال تمام تا 12 سال تمام مبلغ يکصد میلیون ريال و مجموع تراكنشهای انجام شده خريد با كل كارتها در شبکه بانکي برای اشخاص مذكور ، روزانه سیصد میلیون ريال ميباشد ، در هر حال مجموع تراکنش های خرید با کارت های اختصاص یافته به حساب های مشتری در هر ماه نباید از پانصد میلیون ریال بالاتر رود.',
                ' ابزار برداشت تحویل نماینده قانونی (  ولی ، وصی ، قیم  ) خواهد گردید.'
            ],
            note: [
                'افتتاح حساب پس انداز و تحویل کارت برای اشخاص بالای 15 سال بدون حضور نماینده قانونی انجام می پذیرد.',
                'افتتاح حساب پس انداز برای اشخاص بالای 12 سال با شرط برداشت رسیدن به سن 15 سال انجام می پذیرد.'
            ]
        }]
    }, {
        planId: '2',
        planName: 'تجهیزات مکانیزه ATM, BTM, CRS, BCR, VTMمراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '100000000',
            cashWithdrawal: '2000000',
            paymentFacilities: 'فاقد محدودیت',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '3',
        planName: 'کیوسک و کش لس',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '4',
        planName: 'سامانه بام، همراه بام',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه یک میلیارد ریال، ماهانه پنج میلیارد ریال',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '500000000',
            satna: '1000000000'
        }]
    }, {
        planId: '5',
        planName: 'سامانه سبا',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه 150 میلیون ریال و ماهانه پانصد میلیون ریال',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '250000000',
            satna: '500000000'
        }]
    }, {
        planId: '6',
        planName: 'همراه بانک',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه 150 میلیون ریال و ماهانه پانصد میلیون ریال',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '250000000',
            satna: '500000000'
        }]
    }, {
        planId: '7',
        planName: 'سایر اپلیکیشن ها (ایوا، بله، شصت و...)',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }]
}, {
    pageId: '3',
    pageName: 'اشخاص حقوقی ایرانی',
    plans: [{
        planId: '1',
        planName: 'مراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '650000000',
            cashWithdrawal: '150000000',
            paymentFacilities: '150000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'فاقد محدودیت',
            cardToCard: '150000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '150000000',
            paya: '500000000',
            satna: 'فاقد محدودیت سقف حداقل یکصدو پنجاه میلیون ریال'
        }, {
            description: [
                'در انتقال وجه حضوری برای مبالغ بالاتر از ده میلیارد ریال ارائه مستندات بابت انتقال وجه الزامی است.',
                'واریز مبالغ نقدی بالاتر از 650 میلیون ریال در مراجعه حضوری مستلزم تکمیل فرم CTR می باشد.',
                'خدمات مبتنی بر کارت از طریق کارت برداشت ریالی اشخاص حقوقی انجام می پذیرد و سقف برداشت، انتقال وجه و خرید از پایانه های فروشگاهی متناسب با درخواست مشتری و در چارچوب مقررات مربوطه قابل تغییر می باشد.'
            ],
            note: [
            ]
        }]
    }, {
        planId: '2',
        planName: 'تجهیزات مکانیزه ATM, BTM, CRS, BCR, VTMمراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '100000000',
            cashWithdrawal: '2000000',
            paymentFacilities: 'فاقد محدودیت',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '3',
        planName: 'کیوسک و کش لس',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '4',
        planName: 'سامانه بام شرکتی و سازمانی',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه یک میلیارد ریال و سقف ماهانه وجود ندارد',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '500000000',
            satna: '1000000000'
        }]
    }, {
        planId: '5',
        planName: 'سامانه  BIB',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'روزانه یک میلیارد ریال و سقف ماهانه وجود ندارد',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '250000000',
            satna: '500000000'
        }]
    }]
}, {
    pageId: '4',
    pageName: 'اشخاص حقیقی غیر ایرانی(اتباع بیگانه)',
    plans: [{
        planId: '1',
        planName: 'مراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '650000000',
            cashWithdrawal: '150000000',
            paymentFacilities: '150000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'فاقد محدودیت',
            cardToCard: '150000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '150000000',
            paya: '500000000',
            satna: 'فاقد محدودیت سقف حداقل یکصدو پنجاه میلیون ریال'
        }, {
            description: [
                'در انتقال وجه حضوری برای مبالغ بالاتر از دو میلیارد ریال ارائه مستندات بابت انتقال وجه الزامی است.',
                'واریز مبالغ نقدی بالاتر از 650 میلیون ریال در مراجعه حضوری مستلزم تکمیل فرم CTR می باشد.',
                'حداکثر تراکنش خرید از کارت متعلق به اشخاص حقیقی خارجی غیرمقیم روزانه مبلغ 150 میلیون ریال می باشد.',
                'درخصوص اشخاص حقیقی و حقوقی خارجی غیرمقیم افتتاح حساب تا مبلغ گردش سالانه پنج میلیارد ریال بلامانع می باشد.'
            ],
            note: [
            ]
        }]
    }, {
        planId: '2',
        planName: 'تجهیزات مکانیزه ATM, BTM, CRS, BCR, VTMمراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '100000000',
            cashWithdrawal: '2000000',
            paymentFacilities: 'فاقد محدودیت',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }, {
        planId: '3',
        planName: 'کیوسک و کش لس',
        cards: [{
            cardType: 'general',
            cashDeposit: '----',
            cashWithdrawal: '----',
            paymentFacilities: '20000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: '----',
            cardToCard: '100000000'
        }, {
            cardType: 'betweenBank',
            cardToCard: '100000000',
            paya: '----',
            satna: '----'
        }]
    }]
}, {
    pageId: '5',
    pageName: 'اشخاص حقوقی غیر ایرانی(اتباع بیگانه)',
    plans: [{
        planId: '1',
        planName: 'مراجعه حضوری به شعب',
        cards: [{
            cardType: 'general',
            cashDeposit: '650000000',
            cashWithdrawal: '150000000',
            paymentFacilities: '150000000',
            buyRecharges: 'فاقد محدودیت'
        }, {
            cardType: 'intraBank',
            byAccountNumber: 'فاقد محدودیت',
            cardToCard: '----'
        }, {
            cardType: 'betweenBank',
            cardToCard: '----',
            paya: '500000000',
            satna: 'فاقد محدودیت سقف حداقل یکصدو پنجاه میلیون ریال'
        }, {
            description: [
                'در انتقال وجه حضوری برای مبالغ بالاتر از ده میلیارد ریال ارائه مستندات بابت انتقال وجه الزامی است.',
                'واریز مبالغ نقدی بالاتر از 650 میلیون ریال در مراجعه حضوری مستلزم تکمیل فرم CTR می باشد.',
                'درخصوص اشخاص حقیقی و حقوقی خارجی غیرمقیم افتتاح حساب تا مبلغ گردش سالانه پنج میلیارد ریال بلامانع می باشد.'
            ],
            note: [
            ]
        }]
    }]
}
];