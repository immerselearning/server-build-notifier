# server-build-notifier
Chrome and Firefox extension aiming to show on each immerse server's login page a message saying if the server is up to date or if there are pending changes in TeamCity

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
