import Book from "./../db/models/Book.js";

export const getBooks = () => Book.findAll({ order: [["id", "ASC"]] });

export const addBook = (payload) => Book.create(payload);

export const getBookById = (id) => Book.findByPk(id);

export const updateBookById = async (id, payload) => {
  const book = await getBookById(id);
  if (!book) return null;

  return book.update(payload);
};

export const deleteBookById = async (id) => {
  const book = await getBookById(id);
  if (!book) return null;

  await book.destroy();
  return book;
};
