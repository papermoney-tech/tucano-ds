import { createI18n } from 'vue-i18n';
import translations from '@papermoney/translates';

const i18n = createI18n({
  locale: 'en', // Idioma padrão
  messages: translations
});

export default i18n;