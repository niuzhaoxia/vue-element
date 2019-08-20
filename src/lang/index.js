import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import locale from 'element-ui/lib/locale';
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: Object.assign(enLocale, elementEnLocale),
  zh: Object.assign(zhLocale, elementZhLocale)
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'en',
  messages
})
locale.i18n((key, value) => i18n.t(key, value))
console.log(messages)
export default i18n