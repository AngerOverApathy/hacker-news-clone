import view from '../utils/view.js';
import Story from '../components/story.js';

export default async function Stories(path) {   //display path on page
  const stories = await getStories(path);
  const hasStories = stories.length > 0 //check if there are stories 

  view.innerHTML = `<div>
  ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join('') : 'No stories'} //if there are stories display stories else 'no stories'
  </div>`;                   //add i to existing story data by creating in line object, spread in properties with '...' and create index property on story (i + 1)
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';
  if (isHomeRoute) {
    path = '/news';  
  } else if (isNewRoute) {
    path = '/newest';  
  }

  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json()
  return stories;
}