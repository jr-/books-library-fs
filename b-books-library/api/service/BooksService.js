const { db } = require('../../config/dbConnection');

function getAll() {
    return db.any({
        name: 'get-all-books',
        text: `SELECT B.id, B.title, B.isbn, B.year, B.weight, B.dimension_length, B.dimension_heigth, B.dimension_width, 
                A.name as author_name, P.name as publisher_name, L.name as language_name 
                FROM books as B
                JOIN authors as A ON B.author_id = A.id
                JOIN publishers as P ON B.publisher_id = P.id
                JOIN languages as L ON B.language_id = L.id
                ORDER BY B.title`,
        values: [],
    });
}

function getByYear(start, end) {
    return db.any({
        name: 'get-by-year-books',
        text: `SELECT B.id, B.title, B.isbn, B.year, B.weight, B.dimension_length, B.dimension_heigth, B.dimension_width, 
                A.name as author_name, P.name as publisher_name, L.name as language_name 
                FROM books as B
                JOIN authors as A ON B.author_id = A.id
                JOIN publishers as P ON B.publisher_id = P.id
                JOIN languages as L ON B.language_id = L.id
                WHERE B.year >= $1 and B.year <= $2`,
        values: [start, end],
    });
}

function getById(id) {
    return db.any({
        name: 'get-by-id-books',
        text: `SELECT B.id, B.title, B.isbn, B.year, B.weight, B.dimension_length, B.dimension_heigth, B.dimension_width, 
                A.name as author_name, P.name as publisher_name, L.name as language_name 
                FROM books as B
                JOIN authors as A ON B.author_id = A.id
                JOIN publishers as P ON B.publisher_id = P.id
                JOIN languages as L ON B.language_id = L.id
                WHERE B.id = $1`,
        values: [id],
    });
}

function getByFilter(filter) {
    return db.any({
        name: 'get-by-filter',
        text: `SELECT B.id, B.title, B.isbn, B.year, B.weight, B.dimension_length, B.dimension_heigth, B.dimension_width, 
                A.name as author_name, P.name as publisher_name, L.name as language_name 
                FROM books as B
                JOIN authors as A ON B.author_id = A.id
                JOIN publishers as P ON B.publisher_id = P.id
                JOIN languages as L ON B.language_id = L.id
                WHERE B.isbn ILIKE $1 OR A.name ILIKE $1 OR B.title ILIKE $1
                ORDER BY B.title`,
        values: [filter],
    })
}

module.exports = {
    getAll,
    getByYear,
    getById,
    getByFilter,
};