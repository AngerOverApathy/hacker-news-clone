//common data global storage is called a store
// const reducer = (state, action) => newState

//higher order function
function createStore(reducer) {
    let currentState = reducer(undefined, {}); //initial state is undefined, use an empty obj for action as there's no action when reducer is first called
    
    return {
      getState: () => currentState,
      dispatch: action => { //takes an action and passes action to reducer
         currentState = reducer(currentState, action); //update currentState with new value   
      } 
    }
 }
 
 const initialState = {
   favorites: []  
 }
 //reducer for store
 function favoritesReducer(state = initialState, action) { //state object is default parameter
    switch (action.type) {
       case "ADD_FAVORITE": {
         const addedFavorite = action.payload.favorite;
         const favorites = [...state.favorites, addedFavorite]; //use spread operator to make arr immutable
         return { favorites };
       }
       case "REMOVE_FAVORITE": {
         const removedFavorite = action.payload.favorite;
         const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id); //use id to remove item from array
         return { favorites }; //return favorites as property and value
       }
       default:
         return state;
    } 
 }
 //sample action
 // const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } };
 
 const store = createStore(favoritesReducer); //provide createStore with favoriteReducer, returns "store" object
//  store.dispatch(action); //will add a favorite
 // console.log(store.getState());
 export default store;