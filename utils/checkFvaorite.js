export default function checkFavorite (favorites, story) {
//.some() method will check to see if a condition is true and will return boolean based on condition   
    return favorites.some(favorite => favorite.id === story.id)
}