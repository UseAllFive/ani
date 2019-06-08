import { AniElement } from './AniElement'
import { Helpers } from './Helpers'

export const AniPresets = {
    'default-appear': (el, children) => {
        el.style.opacity = 1
    },
}

AniPresets['basic-appear'] = (el, children) => {
    el.style.opacity = 1
    el.style.transition = 'none'
    children.forEach((item, index) => {
        let preset = ''
        if (Helpers.hasAttribute(item, 'ani-preset')) {
            preset = Helpers.getAttribute(item, 'ani-preset')
        }
        const ani = new AniElement(item, index, preset)
        ani.appear()
    })
}