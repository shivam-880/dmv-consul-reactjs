# dmv-consul-reactjs
This application (built in ReactJs) attempts to depict many-to-many relationship in UI using `react-sortable-tree` library. I have already attempted to explain the requirement to build such an application in a blog which you can read [here](http://www.shivamkapoor.com/blogs/technology/2019/03/04/many-to-many-ux-design-considerations/)

![Alt Text](https://github.com/codingkapoor/dmv-consul-reactjs/blob/master/dmv-consul-reactjs.gif)

## Dependencies
- **NPM**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Consul**: This application requires an already running Consul instance to which all the nodes and services are already registered to. Please refer this [README](https://github.com/codingkapoor/stage-deployment-configs) so as to bring up a deployment model.

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
