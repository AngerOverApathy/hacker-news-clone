import view from '../utils/view.js';
import Story from '../components/story.js';
import baseUrl from '../utils/baseUrl.js';
import checkFavorite from '../utils/checkFvaorite.js';
import store from '../store.js';

export default async function Stories(path) {   //display path on page
  const { favorites } = store.getState() //get favorites state from store.js
  const stories = await getStories(path);
  const hasStories = stories.length > 0 //check if there are stories 

  view.innerHTML = `<div>
  ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: checkFavorite(favorites, story) })).join('') : 'No stories'} //if there are stories display stories else 'no stories'
  </div>`;                   //add i to existing story data by creating in line object, spread in properties with '...' and create index property on story (i + 1)

  document.querySelectorAll('.favorite').forEach(favoriteButton => {  //iterate over all items with the 'favorite' class
    favoriteButton.addEventListener('click', async function() {   //when clicked, get event
      const story = JSON.parse(this.dataset.story)  //turn story back into object
      const isFavorited = checkFavorite(favorites, story) //check to see if story is favorited
      if (isFavorited) {
        store.dispatch({ type: "REMOVE_FAVORITE", payload: { favorite: story } })
      } else {
        store.dispatch({ type: "ADD_FAVORITE", payload: { favorite: story } })
      }
      await Stories(path)  //re-render new data
    })
  })
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';
  if (isHomeRoute) {
    path = '/news';  
  } else if (isNewRoute) {
    path = '/newest';  
  }

  const response = await fetch(`${baseUrl}${path}`);
  const stories = await response.json()
  return stories;
}