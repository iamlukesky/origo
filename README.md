# Origo

An easy to configure framework for creating your own web mapping applications.

## What is Origo?

Origo is a web mapping framework. It is based on the [OpenLayers library](https://github.com/openlayers/openlayers). You can use Origo to create your own desktop-like web mapping applications. The project is run and maintained by a number of Swedish municipalities.

## Features

 * Responsive design
 * Support for older browsers
 * Multiple modules available (among others: an editing interface, geopositioning and map sharing)
 * Ability to read data from multiple different types of sources
 * Very light footprint

## How to get started

Download the latest [release](https://github.com/origo-map/origo/releases/) and check out the [api documentation](https://origo-map.github.io/api-documentation/latest/#origo-api). Below you will find some live examples and how to get started devoloping with Origo.

## Documentation

Learn more how to use Origo with the [api documentation](https://origo-map.github.io/api-documentation/latest/#origo-api).

## Want to contribute?
We happily accept contributions of any kind. Guidelines are available in the [`CONTRIBUTING.md`](https://github.com/origo-map/origo/blob/master/CONTRIBUTING.md) file.

Thank you for considering contributing to Origo.

## Found an issue?
For all bugs and feature requests please use ["Issues"](https://github.com/origo-map/origo/issues). Have a look at [`CONTRIBUTING.md`](https://github.com/origo-map/origo/blob/master/CONTRIBUTING.md) for some tips on how to write issues.

## Live examples
Not convinced? Or maybe you need some inspiration? Check out these examples of web maps that have been developed using the Origo framework:
 * [Enakartan](http://karta.enkoping.se)
 * [Hallstakartan](http://karta.hallstahammar.se)
 * [Karlstadskartan](http://gi.karlstad.se)
 * [Mälardalskartan](http://www.malardalskartan.se)
 * [Sigtunakartan](https://karta.sigtuna.se)
 * [Strängnäskartan](https://karta.strangnas.se)
 * [Västerås Stads samlingskarta](http://kartor.vasteras.se/sam)

## Developing with Origo
So you have decided to take matters into your own hands and get coding? Great!

Just follow these three steps and you will be up and running in no time.

### Setting up the development environment
The minimum requirements are:

  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (version 8 or higher is recommended to avoid build problems)

 1. To get your own local copy of Origo use git to clone the repository with the command below:

   		  git clone https://github.com/origo-map/origo.git

 2. To install the required node dependencies run the following command from the root directory of Origo:

  		   npm install

 3. To start budo, a browserify development server, use:

   		  npm start

The server will be available at <http://localhost:9966/>. Budo utilizes LiveReload which means you do not have to refresh the browser page whenever you make a change in your code.

### Creating a bundle
Once you are ready to create a minified bundle, you will use:

     npm run build

This will create a bundle called `origo.min.js` in the dist folder. Note that you will need to change the path to the Origo javascript file in the `index.html` file, from `origo.js` to `origo.min.js`, if you wish to run the map using the bundled version.

### Notes
Origo follows the [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript/tree/es5-deprecated/es5). It might be a good idea to configure your text editor so that it adheres to the guidelines.

## Copyright
The project is licensed under the BSD 2-clause license. It is specified in the [license file](LICENSE.txt).

## Contact
If you want to get in contact with us, please join our chat on slack.com using this invitation: [origo-map.slack.com](https://join.slack.com/t/origo-map/shared_invite/enQtMjU0OTQ5MzcxMDQ3LTA4ZDBlNjI0Mzc2NzI0NTE1ZjAzMGY2ODIxZjdlNDdiNjRkNjhjZTFiNThjNWM0NmM5ZTIyYjBjNmZkM2Y2NTI).
