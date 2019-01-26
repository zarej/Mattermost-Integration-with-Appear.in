Mattermost Integration with Appear.in and jitsi
-------------
![alt example](https://cloud.appmodule.net/apps/files_sharing/publicpreview/37mP76wom8DeiSk?x=1904&y=609&a=true&file=Selection_071.png&scalingup=0)

This is Slack like slash integration. You will need to enter /appear or any other command that you set in step 4 and you will get as a response appear.in url which you can just click to join a conversation. You can also optionaly provide room name for appear in as a argument to /appear command. If you don't provide anything it will take name like `teamname_roomname`.
 1. Install with
 ```
 npm i
 cp .env.example .env
 ```
 2. Change .env to match your needs. Only required thing here to change is TOKEN, the rest is optional. To get token you will need to finish setup in step 4.
 3. Run with
 ```
 npm start
 ```
 4. In Mattermost desktop application go to left menu and choose Integrations. Follow instructions from [here](https://docs.mattermost.com/developer/slash-commands.html#custom-slash-command). In step 4 put url to match your needs. Default is http://localhost:3002/appearin
 5. Iy you are using localhost and http instead of https you will need to change Mattermost server configuration. Make sure that you have following
 ```
 "AllowedUntrustedInternalConnections": "localhost",
 "EnableInsecureOutgoingConnections": true,
 ```
 6. Even if you use https you need to System Console / Developer and set Allow untrusted internal connections to: <host of the app>
