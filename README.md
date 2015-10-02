# server-build-notifier
Chrome and Firefox extension aiming to show on each immerse server's login page a message saying if the server is up to date or if there are pending changes in TeamCity

===

#### Devlog

##### 30/09/2015 - Christopher-Steel: 
Created basic project structure, needs more work.
One thing I've already noticed is that keeping the code tidy is going to be a slight challenge due to the restraints that extensions have. Another is that I'm going to need some kind of build logic with a development mode and a release mode.

I'd like to use Grunt for this.

v0.1.x will be complete once I get the overlay to show on Firefox and once I have proper build logic set up

##### 01/10/2015 - Christopher-Steel:
Created a clumsy Gruntfile.

For now it only compiles scss to css and then minifies both css and javascript, putting the resulting files in the build/Chrome directory. I'd like to find a clean solution for the common folder since its contents are going to be "built" and the resulting files put in both build/Chrome and build/Firefox.

It would be cool if I could generate (or configure) the Chrome extension manifest on build to avoid data duplication between it and the Gruntfile.

I also got confused and added jquery.js to the common folder, oh well, I'll fix that later.

##### 02/10/2015 - Christopher-Steel:
The Gruntfile is now capable of copying manifests from the Chrome and Firefox folders. For the common folder I decided to not spend too much time trying to get a cleaner solution and I just build to the build/Chrome folder first and copy the output files over to the build/Firefox folder afterwards.

Also, I've put in automatic zipping of the Firefox WebExtension. I'm not sure what's needed for Chrome extensions yet so I'll deal with that a bit later. I removed the wandering jquery.js file though, and added the vendors folder to the build sources.

I'd like to make my life easier with the actual display so I'll use [toastr](https://codeseven.github.io/toastr/) instead of my planned manual implementation.

Looks like this is v0.1.0 finished then!

===

#### Planned versions:
- v0.1.x display "pouet" on develop for chrome and ff
- v0.2.x authenticate to teamcity api (don't push credentials to git)
- v0.3.x detect if the is a build ongoing for develop
- v0.4.x detect if there is a build in the queue for develop
- v0.5.x detect if there is a dependency building for develop
- v0.6.x detect if there is a dependency build in the queue for develop
- v0.7.x cascade dependencies
- v0.8.x avoid circular dependencies
- v0.9.x track both develop and staging (print only adequate info on page)
- v0.a.x add persistant storage (start by remembering "pouet")
- v0.b.x track any number of servers (list in persistant storage)
- v1.0.x display changes incoming / up to date
- v1.1.x make message closable (cross)
- v1.2.x display build number for Archway/Ghost/Keystone on login page
- v1.3.x display list of changes if server is not up to date
- v1.4.x make both UI elements corner configurable
- v1.5.x fetch server list from distant server (centralized config)
- v1.6.x display changes for dependencies and queued builds too
- v1.7.x display estimated finish time
- v1.8.x add "warn me when it's done" button that waits until the ETT and alerts the user
