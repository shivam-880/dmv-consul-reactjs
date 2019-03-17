# dmv-consul-reactjs
This user interface built in ReactJs attempts to depict many to many relationship between nodes, services and service tags using `react-sortable-tree` library.

## Dependencies
- **NPM**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Consul**: This application requires an already running Consul instance to which all the nodes and services are already registered to.

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
