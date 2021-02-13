export const addAuthor = author => {
  debugger
  return {
    type: 'ADD_AUTHOR',
    author
  };
};

export const removeAuthor = id => {
  return {
    type: 'REMOVE_AUTHOR',
    id
  };
};

export const addBook = book => {
  debugger
  return {
    type: 'ADD_BOOK',
    book
  };
};

export const removeBook = id => {
  return {
    type: 'REMOVE_BOOK',
    id
  };
};
