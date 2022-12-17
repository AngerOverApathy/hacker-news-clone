import Stories from './pages/stories.js'

const router = new Navigator(null, true, '#')

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {      //take array of routes
        const routes = [  //each route consists of objects
            { path: '/', page: Stories }  //link from stories.js
        ];

        routes.forEach(route => {        //iterate over routes array. for each route call method router.on
            router.on(route.path, () => {  //allows us to declare given path, tell router what to display with callback
                route.page();
            }).resolve(); 
        })
    }
}