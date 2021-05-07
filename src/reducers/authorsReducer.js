//package uuid handles unique ID generation 
import uuid from "uuid";

//can create this file separately in ./reducers
export default function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      //can use state here because the array that authorsReducer returns will be the values to the key of authors 
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id === action.id)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_BOOK":
      let existingAuthor = state.filter(
        //checking if authorName matches authorName from bookInput 
        author => author.authorName === action.book.authorName);
        //if it already exists return state unchanged 
      if (existingAuthor.length > 0){
        return state;
        //if it is not present add to array 
      } else {
        return [...state, {
          authorName: action.book.authorName,
          id: uuid()
        }];
      }

      default: 
        return state;
  }
}