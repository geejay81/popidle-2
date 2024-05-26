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
    });