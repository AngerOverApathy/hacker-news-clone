import Story from '../components/story.js';
import view from '../utils/view.js';
import baseUrl from '../utils/baseUrl.js';

export default async function Item(path) {
  let story = null;
  let hasComments = false;
  let hasError = false;

  try {
    story = await getStory(path); //don't need const due to global variable
    hasComments = story.comments.length > 0 //check comments array to see if there are comments
  } catch(error) {
    hasError = true;
    console.error(error)
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`
  }

  view.innerHTML = `
  <div>
  ${Story(story)}
  </div>
  <hr/>
  ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join('') : 'No comments'} //map over each comment and stringify else display no comments
  `;  
}

async function getStory(path) {
  const storyID = window.location.hash.split('?id=')[1]  //get story id from window.location, use split to get id from string, use [1] to get second element 
  const response = await fetch(`${baseUrl}/item/${storyId}`) //fetch story data
  const story = await response.json() //respond in json
  return story; //return story
}


