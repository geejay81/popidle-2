"use client"

import Script from "next/script";

type ConsentManagementPlatformProps = {
    GA_MEASUREMENT_ID : string
};

export default function ConsentManagementPlatform({GA_MEASUREMENT_ID} : ConsentManagementPlatformProps)
{
    return (
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></Script>
            <Script id="gtag-config">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });

            gtag('config', '${GA_MEASUREMENT_ID}');
            `}</Script>
            <Script src="//www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"></Script>
            <Script id="termsfeed" src="/scripts/termsfeed-config.js"></Script>
            <a href="#" id="open_preferences_center">Update cookies preferences</a>
        </>
    );
}