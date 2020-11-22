# laravel-mix-postcss-config

![GitHub](https://img.shields.io/github/license/yazeedobaid/laravel-mix-postcss-config.svg?style=popout)
![Node.js Package](https://github.com/yazeedobaid/laravel-mix-postcss-config/workflows/Node.js%20Package/badge.svg)
![npm](https://img.shields.io/npm/v/laravel-mix-postcss-config.svg?style=popout)
![npm](https://img.shields.io/npm/dt/laravel-mix-postcss-config.svg?style=popout)

A Laravel-mix plugin to add the `postcss-loader` loader with its configuration file to the default mix 
webpack.config.js file in a fluent way.

```js
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')
    .postCssConfig();
```


# Introduction
Laravel mix has a great and fluent api to define the build steps for an application. Mix has supprt for
defining postcss plugins through the `postCss` api. Defining these plugins along with their options in mix's
config file will make the file large and difficult to read.

postcss-loader provide a way to define postcss plugins in a separate config file (postcss.config.js). This 
plugin extends laravel-mix api and add a method to include the loader with its config file in the build process.

# Install
Install using npm:
```
$ npm install laravel-mix-postcss-config --save-dev
```

# Usage
Require the pulgin in your laravel-mix config file and call the extension method on mix.

```js
const mix = require('laravel-mix');
require('laravel-mix-postcss-config');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')    
    .postCssConfig();
```

The above call will merge the `postcss-loader` loader to mix's generated webpack config rules with 
the default loader configuration options. If you wish to change the default loader options you can 
pass them in the call:

```js
const mix = require('laravel-mix');
require('laravel-mix-postcss-config');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')    
    .postCssConfig({ /* postcss-loader options */ });
```

You can find a list of possible `postcss-loader` loader options in the loader 
[github repository](https://github.com/postcss/postcss-loader)

# License
The MIT License (MIT). Please see [License File](https://github.com/yazeedobaid/laravel-mix-postcss-config/blob/master/LICENSE) for more information.
