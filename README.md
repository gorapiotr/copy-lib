## Copy dir lib

### Install steps

1. Install dependencies

```
    npm install
```

2. Copy config

```
    cp init-config.json config.json
```

3. Set up config

```json

{
    "destination": "./demo/project2/node_modules",
    "sources": [
        "./demo/project1/node_modules/moment"
    ],
    "stashDir": "./stash"
}

```