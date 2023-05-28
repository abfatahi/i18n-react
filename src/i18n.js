import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { DateTime } from "luxon";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: function (value, format, lng) {
        if (format === "DATE_HUGE") {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime.DATE_HUGE);
        }
        return value;
      },
    },
  });

export default i18n;
