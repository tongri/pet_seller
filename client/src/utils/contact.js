export const removeEmptyFields = (data) =>
    Object.fromEntries(Object.entries(data).filter(([_, val]) => val !== ''))
