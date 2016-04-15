swagchat
===
Third-party snapchat middleware server

#### Requirements
- Jailbroken iDevice running at least iOS 9.0
- Snapchat Version 9
- [Theos](https://github.com/theos/theos/wiki/Installation) - Enables you to build the iOS tweak, and deploy it to a jailbroken iDevice
- [ssl-kill-switch2](https://github.com/nabla-c0d3/ssl-kill-switch2) - Disables SSL pinning on iDevices, which we need to do to modify snapchat requests on the server

#### Setting it all up
``` bash
> git clone git@github.com:0xdeafcafe/swagchat.git
> cd swagchat/iphone-tweak
> make do # follow instructions - and enter root account password - after installation go to settings and toggle it on a set the custom server url
> cd ../server
> npm i
> npm run start # todo, setting up mysql server creds, and database schema
```
