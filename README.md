Mattermost Integration with Appear.in and Jitsi
-------------

# This integration is deprecated I created new plugin which is much easier to use https://github.com/appmodule/mattermost-plugin-jitsi For now supports only Jitsi


![alt example](https://cloud.appmodule.net/apps/files_sharing/publicpreview/37mP76wom8DeiSk?x=1904&y=609&a=true&file=Selection_071.png&scalingup=0)

This is Slack like slash integration. You will need to enter /appear or any other command that you set in step 4 and you will get as a response [appear.in](https://appear.in) or [Jitsi](https://jitsi.org/) url which you can just click to join a conversation. You can also optionaly provide room name for appear in as a argument to /appear command. If you don't provide anything it will take name like `teamname_roomname`.

UPDATE: This plugin was originally written to support only Appear.in and later is updated to support also Jitsi. You can set both of them or to choose one of them to setup.

 1. Install with
 ```
 npm i
 cp .env.example .env
 ```
 2. Change .env to match your needs. Only required thing here to change is TOKEN_APPEAR and/or TOKEN_JITSI, the rest is optional. To get token you will need to finish setup in step 4. You will get:
 ![alt example](https://cloud.appmodule.net/apps/files_sharing/publicpreview/DnHGNGbdZP3QMGS?x=1904&y=609&a=true&file=Selection_074.png&scalingup=0)
 
 3. Run with
 ```
 npm start
 ```
 4. In Mattermost desktop application go to left menu and choose Integrations. Follow instructions from [here](https://docs.mattermost.com/developer/slash-commands.html#custom-slash-command). In step 4 put url to match your needs. Default is http://localhost:3002/appearin
![alt example](https://cloud.appmodule.net/apps/files_sharing/publicpreview/P48gJdGpygP5nQJ?x=1904&y=609&a=true&file=Selection_072.png&scalingup=0)
![alt example](https://cloud.appmodule.net/apps/files_sharing/publicpreview/B4mDbGqdWYN4dy2?x=1904&y=609&a=true&file=Selection_073.png&scalingup=0)
 
 5. If you are using localhost and http instead of https you will need to change Mattermost server configuration. Make sure that you have following
 ```
 "AllowedUntrustedInternalConnections": "localhost",
 "EnableInsecureOutgoingConnections": true,
 ```
 6. Even if you use https you need to System Console / Developer and set Allow untrusted internal connections to: `<enter host of the app without port eg. server.com>`
