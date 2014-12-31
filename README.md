# browserify-gulp-angular-app

Starter project that builds web apps using browserify and gulp

## Features

- Uses these frameworks:
- `bower` http://bower.io/ to assemble external dependencies
- `browserify` http://browserify.org/ to assemble the code bits
- `ng-annotate` https://www.npmjs.com/package/ng-annotate to add the angular injection strings
- `gulp` http://gulpjs.com/ to build everything

## How to start

### Bootstrap your framework

Install nodejs http://nodejs.org/

    git clone https://github.com/daniran/browserify-gulp-angular-app
    cd browserify-gulp-angular-app
    npm install   
    npm install -g bower
    bower install
    npm install -g gulp

### Running build tasks

This project is built using gulp,
and the commands that you will run most often should be:

    # assembles project for development
    gulp build

    # does build task, and then optimises for distribution (concatenation, minification)
    gulp dist

    # does build task, and then listens for changes on project files, doing selective rebuilds
    gulp serve

    # deletes files created by build or dist tasks
    gulp clean

There are many others - look through `gulpfiles/tasks/*.js` to find them all.

## Licence

GPLv3
