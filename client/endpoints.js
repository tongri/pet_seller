// File with expected endpoints and results

// @header  Authentication

// @path    /api/v1/login/
// @method  POST
// @output  { username, token }

// @path    /api/v1/reg/
// @method  POST
// @output  { username, token }

// @path    /api/v1/verify-token/
// @method  POST
// @output  { username, token }

// @header  Pets

// @path    /api/v1/pets/
// @method  GET
// @output  { pets, countries, cities, kinds, genders, sizes, ages, health }
// @info    Pets should contain: name: 'Pavel', country, city, kind, gender, size, age, health, date, birth_date
