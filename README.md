# dmv-consul-reactjs
This user interface built in ReactJs attempts to depict many to many relationship between nodes, services and service tags using `react-sortable-tree` library.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies
- NPM
- Consul

## Build
```
npm run build
```

This project can also be built using SBT task called `npmBuildDeploymentModelView`.
```
$ sbt
$ project deploymentModelView
$ npmBuildDeploymentModelView
```

**Note**: This SBT task is executed as part of `gbnewplatform` compile.

## Launch (In Production)
```
npm install -g serve
serve -s build
```
