# Webdriverio

## Step by step how to run (Mac Only)
- Install node 

```brew install node ```

-  clone this project
- open project with any editor
- open terminal and run 
```npm install```

- open `.env` file, then add value in properties `UDID` and `PLATFORM_VERSION` based on what device will used
- execute :

    - `npm run wdio` to running all spec in one time
    - `npm run wdio-puzzle` to running spec puzzle e2e only
    - `npm run wdio-form` to running spec form e2e only


- Report can be check in `.timeline` folder
