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

In order to be able to share cookies between the mock server running in the
Ember CLI development server and the fastboot server both need to run on the
same domain. The demo app expects that domain to be `fastboot.example` so that
requests to `http://fastboot.example/api` will be proxied to the mock server
and all other requests to the fastboot server.

* add an alias for localhost to your `/etc/hosts` file:
  ```
  127.0.0.1 fastboot.example
  ```
* setup a proxy server to proxy requests to `http://fastboot.example/api` to
  the Ember CLI mock server and all other requests to the FastBoot server. If
  you're using Nginx this server definition should work:
  ```
  server {
    listen       80;
    server_name  fastboot.example;

    location / {
      proxy_pass http://localhost:3000;
    }

    location /api {
      proxy_pass http://localhost:4200;
    }
  }
  ```
* `ember fastboot --serve-assets`
* `ember serve` (this is required as the app needs the mock server)
* Visit the app at [http://fastboot.example](http://fastboot.example).

## License

This example app was developed by and &copy;
[simplabs GmbH/Marco Otte-Witte](http://simplabs.com) and contributors. It is
released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).
