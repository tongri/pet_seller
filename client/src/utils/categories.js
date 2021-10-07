const combineIconAndTitle = (icon, title) => ({
    iconClass: icon,
    tagTitle: title.charAt(0).toUpperCase() + title.substr(1),
})

const getTags = (category, value) => {
    const ICONS = {
        kind_of_animal: {
            cat: 'fas fa-cat',
            dog: 'fas fa-dog',
        },
        gender: {
            male: 'fas fa-mars',
            female: 'fas fa-female',
        },
        birthday: 'fas fa-birthday-cake',
        size: 'fas fa-ruler',
        breed: 'fas fa-paw',
    }

    if (!(category in ICONS) || !value) return

    try {
        if (ICONS[category] instanceof Object)
            return combineIconAndTitle(
                ICONS[category][value.toLowerCase()],
                value
            )
        return combineIconAndTitle(ICONS[category], value)
    } catch {
        console.log('CATEGORIES', category, value)
    }
}

export default getTags
