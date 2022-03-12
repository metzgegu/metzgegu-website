import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

export const setupI18n = () => {
  const languages = ['fr', 'en'];
  languages.forEach((lng) => register(lng, () => import(`../locales/${lng}.json`)));
  const navigatorLocale = getLocaleFromNavigator()?.split('-')[0];

  init({
    fallbackLocale: 'en',
    initialLocale: languages.find((v) => v === navigatorLocale) ? navigatorLocale : 'en'
  });
};
