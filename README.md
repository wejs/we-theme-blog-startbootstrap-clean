# Simple blog theme for we.js

> Default we.js blog project theme.

Example: http://albertosouza.net

## Screenshot

![Screenshot example](https://wejs.org/api/v1/image/original/1462250733565_def8f1e0-10e9-11e6-b9b8-3bcad79a0ed3.png "Screenshot")

## How to develop:

### install for development:


#### 1 install all dependencies
```sh
npm install
```

#### 2 link this theme as npm module in your we.js project
```sh
#First in your theme folder:
## you may need sudo for this command
ǹpm link 
# then enter in your project and type:
npm link we-theme-blog-startbootstrap-clean 
```

#### 3 change your project settings to use this theme:

**file:** [project]/config/themes.js
```js
module.exports.themes = {
    enabled: [
      'we-theme-blog-startbootstrap-clean',
      'we-theme-admin-default'
    ],
    app: 'we-theme-blog-startbootstrap-clean',
    admin: 'we-theme-admin-default'
};
```

### Run the theme tasks and project

##### Run the tasks
```sh
# in  theme folder
npm run tasks
```

##### Run the project
```sh
# in project folder
npm run dev
```

### Build with:

Clean Blog StartBootstrap theme: http://startbootstrap.com/template-overviews/clean-blog/


## License

MIT
