const combineIconAndTitle = (icon, title) => ({
    iconClass: icon,
    tagTitle: title.charAt(0).toUpperCase() + title.substr(1),
})

const getTags = (category, value) => {
    const ICONS = {
        kind: {
            cat: 'fas fa-cat',
            dog: 'fas fa-dog',
        },
        gender: {
            male: 'fas fa-mars',
            female: 'fas fa-female',
        },
        birth_date: 'fas fa-birthday-cake',
        size: 'fas fa-ruler',
        breed: 'fas fa-paw',
    }
    console.log(category, value)
    if (!(category in ICONS)) {
        return
    }

    if (ICONS[category] instanceof Object)
        return combineIconAndTitle(ICONS[category][value.toLowerCase()], value)
    return combineIconAndTitle(ICONS[category], value)
}

export default getTags
