## install normal

```
npm install webpack
```

## install dev dependency

```
npm install --save-dev webpack
npm i -D
```

## ต่างกันยังไง

"dependencies ใช้จริง

"devDependencies" ใช้ dev เท่านั้น

## แยก run env

```
    "scripts": {
    "start": "ls -la", //npm start
    "dev": "ls"   //npm run dev
  },

```

##

```
 npx webpack-cli
```

## import css

npm i -D css-loader
npm i -D style-loader

## import scss

npm i -D sass sass-loader

## ใช้เวลา ทำ hash ไฟล์ ิ bundle.js

npm i -D html-webpack-plugin

npm i -D clean-webpack-plugin // clean buld hash

npm i -D html-loader //load images

npm i -D webpack-dev-server // สร้าง server

npm i -D webpack-merge // รวม object config dev /production

npm i -D mini-css-extract-plugin

npm i -D terser-webpack-pluginv

npm i -D css-minimizer-webpack-plugin
