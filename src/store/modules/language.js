import Cookies from 'js-cookie'

export default {
  language: Cookies.get('language') || 'en',
}