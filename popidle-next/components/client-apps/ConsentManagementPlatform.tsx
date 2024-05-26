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
            {/* <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></Script>
            <Script strategy="afterInteractive" src="//www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"></Script>
            <Script id="defaultconsent" strategy="afterInteractive">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                });
        
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `}</Script>
            <Script id="termsfeed" strategy="afterInteractive">
                {`
                    console.log('adding event listener');
                    document.addEventListener("DOMContentLoaded", function() {
                    cookieconsent.run({
                        "notice_banner_type":"headline",
                        "consent_type":"express",
                        "palette":"light",
                        "language":"en",
                        "page_load_consent_levels":["strictly-necessary"],
                        "notice_banner_reject_button_hide":false,
                        "preferences_center_close_button_hide":false,
                        "page_refresh_confirmation_buttons":false,
                        "callbacks": {
                            "scripts_specific_loaded": (level) => {
                              switch(level) {
                                case 'targeting':
                                  gtag('consent', 'update', {
                                    'analytics_storage': 'granted'
                                  });
                                  break;
                              }
                            }
                          },
                          "callbacks_force": true})
                    });`}</Script> */}
        </>
    );
}