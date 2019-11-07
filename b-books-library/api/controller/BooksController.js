const BooksService = require('../service/BooksService');
const handler = require('../handler/Handler');

async function getAll(req, res) {
    try {
        const books = await BooksService.getAll();
        handler.onSuccess(res, books);
    } catch (error) {
        handler.onError(res, error, 'Error getting all books');
    }
}

async function getById(req, res) {
    try {
        const book = await BooksService.getById(req.params.id);
        handler.onSuccess(res, book);
    } catch (error) {
        handler.onError(res, error, 'Error getting book by id');
    }
}

async function getByFilter(req, res) {
    try {
        const books = await BooksService.getByFilter(req.params.filter);
        handler.onSuccess(res, books);
    } catch (error) {
        handler.onError(res, error, 'Error getting books by filter');
    }
}

async function getByYear(req, res) {
    try {
        const books = await BooksService.getByYear(req.query.start, req.query.end);
        handler.onSuccess(res, books);
    } catch (error) {
        handler.onError(res, error, 'Error getting books by year');
    }
}

module.exports = {
    getAll,
    getById,
    getByFilter,
    getByYear,
};