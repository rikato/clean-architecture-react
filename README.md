# Example repo for clean architecture principles in React.

Using MobX, Typescript and React.

```
├───application
│   ├───hooks
│   └───viewModels
├───components
│   ├───general
│   └───molecules
├───core
│   ├───commands
│   ├───domain
│   │   └───entities
│   └───queries
└───infrastructure
    ├───api
    │   ├───common
    │   ├───endpoints
    │   ├───mappers
    │   └───methods
    ├───repositories
    └───services
 ```

## Application layer

This layer is responsible for creating a representative model of the core layer. It is dependend on the infrastructure layer for getting and updating data.

## Core layer

This is where the magic happens. It contains all business logic and rules. It also contains the the methods for interacting with entities, trough commands and queries.

## Infrastructure layer

This is the layer that communicates with a backend api. It is used as an adapter and can be replaced with any other infrastructure layer.

## Components layer

This layer contains all React components and uses the application layer the get a representable model.
