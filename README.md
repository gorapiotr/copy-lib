## Copy dir lib

### Install steps

1. Install dependencies

```console
npm install
```

2. Copy config

```console
cp init-config.json config.json
```

3. Set up config

```json
//example configuration
{
    "destination": "./demo/project2/node_modules",
    "sources": [
        "./demo/project1/node_modules/moment"
    ],
    "stashDir": "./stash"
}

```
4. Run command
```console
# copy libs to destination dir
npm run copy

# remove libs from destination dir
npm run remove

# stash libs from destination dir
npm run stash

# retrive libs to destination dir from stash
npm run retrive
```
