import view from "../utils/view.js"; //import view to update the innerhtml
import checkFavorite from "../utils/checkFavorite.js";
import store from "../store.js"; //get state from our store
import Story from "../components/Story.js";

export default function Favorites() {
    const { favorites } = store.getState();  //get favorites state from store.js
    const hasFavorites = favorites.length > 0; //check for favorites

    view.innerHTML= `<div>
    ${hasFavorites ? favorites.map(story => Story({
        ...story, 
        isFavorite: checkFavorite(favorites, story) //if there are favorites, display favorites
    })).join('') : 'Add some favorites!'}
    </div>`

    document.querySelectorAll('.favorite').forEach(favoriteButton => { //iterate over all items with the 'favorite' class
        favoriteButton.addEventListener('click', function() { //when clicked, get event
          const story = JSON.parse(this.dataset.story);   //turn story back into object
          const isFavorited = checkFavorite(favorites, story); //check to see if story is favorited
          store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } }) 
          Favorites(); //re-render new data
        }); 
     });
} //import from story from story component to return some html
//spread in previous story properties and favorites from checkfavorites in util folder

