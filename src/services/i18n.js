import { getLocaleFromNavigator, init, addMessages } from 'svelte-i18n';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

export const setupI18n = () => {
  const languages = ['fr', 'en'];
  const navigatorLocale = getLocaleFromNavigator()?.split('-')[0];
  addMessages('fr', fr);
  addMessages('en', en);
  init({
    fallbackLocale: 'en',
    initialLocale: languages.find((v) => v === navigatorLocale) ? navigatorLocale : 'en'
  });
};
