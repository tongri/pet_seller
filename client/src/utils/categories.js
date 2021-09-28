const combineIconAndTitle = (icon, title) => ({
    iconClass: icon,
    tagTitle: title.charAt(0).toUpperCase() + title.substr(1),
})

const getTags = (category, value) => {
    const ICONS = {
        type: {
            cat: 'fas fa-cat',
            dog: 'fas fa-dog',
        },
        sex: {
            male: 'fas fa-mars',
            female: 'fas fa-female',
        },
        birth_date: 'fas fa-birthday-cake',
        size: 'fas fa-ruler',
    }

    if (ICONS[category] instanceof Object)
        return combineIconAndTitle(ICONS[category][value], value)
    return combineIconAndTitle(ICONS[category], value)
}

export default getTags
