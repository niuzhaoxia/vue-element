export const offset = (ele) => {
    let left = ele.offsetLeft
    let top = ele.offsetTop
    let parent = ele.offsetParent
    while (parent && parent.nodeName.toLowerCase() !== 'body') {
        left += parent.offsetLeft
        top += parent.offsetTop
        parent = parent.offsetParent
    }
    return {
        left,
        top
    }
}

