# Fastboot-auth-example

This example app shows how handling auth in Ember apps can be implemented when
using [FastBoot](https://github.com/ember-fastboot/fastboot) which requires the
user's authentication state to be kept in sync between the Ember app running in
the browser and the FastBoot server.

The `master` branch of this repo uses classic token based authorization of API
requests using an `Authorization` header whereas the `cookie-based` branch uses
cookies for transmitting the token to the API server which is more secure but
has some implications on domains etc.

I'm introducing the concepts behind these apps at
[EmberCamp London, July 12th 2016](http://embercamp.com).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember fastboot --serve-assets`
* `ember serve` (this is required as the app needs the mock server)
* Visit the app at [http://localhost:3000](http://localhost:3000).

## License

This example app was developed by and &copy;
[simplabs GmbH/Marco Otte-Witte](http://simplabs.com) and contributors. It is
released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).
