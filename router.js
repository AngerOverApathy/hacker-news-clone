import Stories from './pages/stories.js';

const router = new Navigo(null, true, '#');
console.log(router);

export default class RouterHandler {
  constructor() {
    this.createRoutes()  
  }  
  
  createRoutes() {      //take array of routes
    const routes = [    //each route consists of objects
      { path: '/', page: Stories },  //link from stories.js
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories }
    ];
    
    routes.forEach(({ path, page }) => {  //destructure object and grab specific properties
      router.on(path, () => {   //allows us to declare given path, tell router what to display with callback
        page(path);       //pass given path we're on from route.path and receive data in stories function  
      }).resolve();
    })
  }
}