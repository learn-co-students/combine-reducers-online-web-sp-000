import { uuid } from 'uuid';

function authorsReducer(state = [], action) {
    switch (action.type) {
      case "ADD_BOOK":
        let existingAuthors = state.filter(author => author.authorName === action.book.authorName);
        if(existingAuthors.length > 0){
          return state
        }else{
          return [...state, {authorName: action.book.authorName, id: uuid()}];
        }
  
      case "ADD_AUTHOR":
        return [...state, action.author];
  
      case "REMOVE_AUTHOR":
        idx = state.findIndex(author => author.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
  
      default:
        return state;
    }
}

export default authorsReducer;