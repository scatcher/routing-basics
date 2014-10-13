routing-basics_20141013
======================

Demo for AngularJS Study group discussion on routing.


Install the required tools
---------
[Install NodeJS](http://nodejs.org/): 
Node provides the framework for all other project components.

Open terminal and install [Grunt](http://gruntjs.com/):

    npm install -g grunt-cli
Next install [Bower](http://bower.io/), our package manager:

    npm install -g bower

Cloning the Repository
---------
Navigate to the local folder on your computer where the app will reside and clone the repo using terminal:

    git clone https://github.com/scatcher/codechallenge_20140929.git

Installing Dependencies
---------
Install the required node modules

    npm install

Install project dependencies (gets everything identified in bower.json)

    bower install

Post-Setup
---------
To see your code in the browser using grunt

    grunt serve
    

Update our dependencies
---------
We can either update all dependencies

    bower update
    
or update a specific dependency

    bower update PackageName
    

Run unit tests
---------
Run a single unit test

    grunt test
       
or run continous tests whenever a file is changed

    grunt autotest
    
or to debug a test

    grunt debugtest
    
      
Code Style
---------
John Papa's [Angular JS Guide](https://github.com/johnpapa/angularjs-styleguide) guide should be referenced for all
style and structure guidance.

