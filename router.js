//import pages so router can find the path
import Stories from './pages/stories.js';
import Item from './pages/item.js';
import Favorites from './pages/favorites.js';

const router = new Navigo(null, true, '#');

export default class RouterHandler {
  constructor() {
    this.createRoutes()  
  }  
  
  createRoutes() {      //take array of routes
    const routes = [    //each route consists of objects
      { path: '/', page: Stories },  //link from stories.js
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories },
      { path: '/item', page: Item }, //link from item.js
      { path: '/favorites', page: Favorites} //link from favorites.js
    ];
    
    routes.forEach(({ path, page }) => {  //destructure object and grab specific properties
      router.on(path, () => {   //allows us to declare given path, tell router what to display with callback
        page(path);       //pass given path we're on from route.path and receive data in stories function  
      }).resolve();
    })
  }
}