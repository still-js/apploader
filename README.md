# StillJS Apploader Lib
Loads your Still.js App/Microfrontend to React, etc. 


## Microfrontend with Still.js Framework

This is Still.js package which provides the capabilities to integrate Still.js Application as a Microfrontend
to other applications which are developed in other Framewoks or Libraries (e.g. React).

<br>

#### Join the discord channel

<a href="https://discord.gg/fUVJRTmQ9f">
<svg xmlns="http://www.w3.org/2000/svg" width="25" style="float: left; padding-right: 5px;" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg> Still.js on discord
</a>

<br>
<br>

### Overview
When embeding a Still.js application anto another application as a Mirofrontedn, two ways are provided as follow:

#### CDN Approache

This scenarios requires only the existence of the `app/` folder for holding the app itself, and the `config/route.map.js` file for the routing purposes, components will be created as needed.

```js
const stillApp = new StillAppLoader();
stillApp.local({ env: { STILL_HOME: 'public/path/to/still-app/' } }).load();
```

<br><br>

#### Local Approache

Embeds an app which the whole Still.js project structure os available as part of the whole project. components will be created as needed.

```js
const stillApp = new StillAppLoader();
stillApp.local({ env: { STILL_HOME: 'public/path/to/still-app/' } }).load();
```

<b>PS: Either approaches requires the STILL_HOME environment variable to be stated.</b>


#### Usage example
Say you have a React project generate with Vite, install StillAppLoader which will be part of your projects dependencies, and you should be good to go considering the following aspects:
##### Your React Project structure
```js
    react-project-root-folder/ //My project folder
    |___ node_modules/ // Among other it'll hold the StillAppLoader
    |     |__ ... // All installed modules
    |     |
    |___ public/ // Among other it'll hold the StillAppLoader
    |     |__ mymicrofrontend/ // Will hold the Still app
    |     |    |__ app/ // Will contain the app
    |     |    |__ config/ // Will containe config files (e.g. route.map.js, app-setup.js)
    |     |
    |___ src/ // React app files filder
    |     |__ App.css //Component generated automatically when creating project
    |     |__ App.tsx //Component generated automatically when creating project
    |     |__ vite-env.d.ts //Component generated automatically when creating project
    |     |__ ... // additional files concerning to React project generate with Vite
```

<br>
<br>


### Loading the Still app in a React component

By creating a new instance os StillAppLoader, we can then specify the STILL_HOME environment variable, and assign it with the path on where it's located which have to be inside the public/ folder.

```js
import { useEffect } from 'react';
import './App.css';
import { RegularReactComponent } from "./components/RegularReactComponent";
import { StillAppLoader } from '@stilljs/apploader/StillAppLoader';

function App() {

  useEffect(() => {

    // Creating App loader instance
     const stillApp = new StillAppLoader();
     stillApp.cdn({ env: { STILL_HOME: 'public/mymicrofrontend/' } }).load();

     // Unload the App when destroying the React component
     return () => stillApp.unload();

  },[]);


  return (
    <>
      <RegularReactComponent></RegularReactComponent>
      React validating local Still component embeding
    </>
  )
}

export default App
```



### Embeding Still.js component inside a React App/component

To embed a Still.js componet in react we do it the same way it's done in regular Still.js App.

```js

  return (
    <>
      <RegularReactComponent></RegularReactComponent>
      React validating local Still component embeding
      <st-element component="HomeComponent"></st-element>
    </>
  )

```

# You're all set, Congrats!