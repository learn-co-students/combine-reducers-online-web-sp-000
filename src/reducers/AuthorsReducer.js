import uuid from 'uuid'

function authorsReducer(state = [], action){
  let idx

  switch(action.type){
    case "ADD_AUTHOR":
        return [...state, action.author]

    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [state.authors.slice(0, idx), state.authors.slice(idx + 1)]

//in our application, when a user inputs information about a book, the user also inputs the author's name. It would be handy if, when a user submits a book with an author, that author is also added to our author array.
//check to see if an authorName matches with the name dispatches from the BookInput component. If the name already exists, state is returned unchanged. If the name is not present, it is added to the author array.
    case 'ADD_BOOK':
      let existingAuthor = state.filter(author => author.authorName === action.book.authorName)

      if (existingAuthor.length > 0){
        return state
      } else {
        return [...state, {authorName: action.book.authorName, id: uuid()}]
      }

    default:
      return state;
  }
}

export default authorsReducer
