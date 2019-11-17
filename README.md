# dmv-consul-reactjs
This application attempts to depict many-to-many relationships in UI using `react-sortable-tree` library. In particular, it attempts to express many-to-many relationships between *nodes*, *services* and *customers* that make up a certain deployment model. I have attempted to explain the requirement to build such an application in a blog post which you can read [here](http://www.shivamkapoor.com/blogs/technology/2019/03/04/many-to-many-ux-design-considerations/).

![Alt Text](https://github.com/codingkapoor/dmv-consul-reactjs/blob/master/dmv-consul-reactjs.gif)

<br/>

(**Note:** I have used [Peek](https://github.com/phw/peek), an animated gif screen recorder for the gif posted above.)

## Dependencies
- **NPM**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Consul**: This application requires an already running Consul instance to which all the nodes and services are already registered. Please refer [README](https://github.com/codingkapoor/stage-deployment-configs) from another project to bring up a virtual environment.

## Start (In Dev)
```
npm start
```

## Build
```
npm run build
```

## Launch (In Prod)
```
npm install -g serve
serve -s build
```
