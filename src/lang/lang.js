import { LANG_CHINESE, LANG_ENGLISH, LANG_SPANISH } from '../../constants/lang.const';
import ES_JSON from './translations/es.json';
import EN_JSON from './translations/en.json';
import CN_JSON from './translations/cn.json';


function Language() {
    let translations = null;
    
    return {
        setLang(lang) {
            switch (lang) {
            case LANG_SPANISH:
                translations = ES_JSON;
                break;
            case LANG_ENGLISH:
                translations = EN_JSON;
                break;
            case LANG_CHINESE:
                translations = CN_JSON;
                break;
            }
        },
        t(textNode = null) {
            if (textNode == null) throw new Error('Missing Param for <  t(node)  > ');
            return translations[textNode];
        }
    };
}

const Lang = new Language();
Lang.setLang(LANG_SPANISH);
export const { t } =  Lang;

