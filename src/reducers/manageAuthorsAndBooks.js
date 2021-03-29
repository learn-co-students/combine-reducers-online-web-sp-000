export default function bookApp(
  state = {
    authors: [],
    books: []
  },
  action
) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        authors: [...state.authors],
        books: [...state.books, action.book]
      };

    case "REMOVE_BOOK":
      idx = state.books.findIndex(book => book.id === action.id);
      return {
        ...state,
        authors: state.authors.slice(),
        books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
      };

    case "ADD_AUTHOR":
      return {
        ...state,
        authors: [...state.authors, action.author],
        books: [...state.books]
      };

    case "REMOVE_AUTHOR":
      idx = state.authors.findIndex(author => author.id === action.id);
      return {
        ...state,
        authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)],
        books: [...state.books]
      };

    default:
      return state;
  }
}