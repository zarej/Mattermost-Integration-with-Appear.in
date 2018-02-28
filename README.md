Mattermost Integration with Appear.in
-------------
![alt text](http://storage6.static.itmages.com/i/18/0228/h_1519777549_7945594_30465fe611.png)

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
