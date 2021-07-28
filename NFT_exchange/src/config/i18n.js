import I18n from 'react-native-i18n';

import en from './locales/en';
import ko from './locales/ko';

I18n.fallbacks = true;

I18n.translations = {
    ko : ko,
    en : en,
    
};

export default I18n;
