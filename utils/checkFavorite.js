export default function checkFavorite(favorites, story) {
    return favorites.some(favorite => favorite.id === story.id); 
  } //.some() method will check to see if a condition is true and will return boolean based on condition  