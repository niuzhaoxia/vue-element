import Cookies from 'js-cookie'
export function SET_LANGUAGE (state, language){
    state.language = language
    Cookies.set('language', language)
}

export function addTabItem(state, option) {
    state.editableTabs.push(option)
}

export function removeTabItem(state, option) {
    state.editableTabs.filter((item) => {
        item.name !== option
    })
}

export function changeTabValue (state, option) {
    state.editableTabsValue = option
}