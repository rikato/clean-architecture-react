# Example repo for clean architecture principles in React.

Using MobX, Typescript and React.

├───application
│   ├───hooks
│   └───viewModels
│       ├───todo
│       └───todos
├───components
│   ├───general
│   │   └───App
│   └───molecules
│       ├───Todo
│       └───Todos
├───core
│   ├───commands
│   │   └───todo
│   ├───domain
│   │   └───entities
│   │       └───todo
│   └───queries
└───infrastructure
    ├───api
    │   ├───common
    │   ├───endpoints
    │   │   └───todos
    │   ├───mappers
    │   └───methods
    ├───repositories
    └───services
        └───todos
