'use strict';

const Bot = require('slackbots');

const bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel('some-channel-name', 'Hello channel!');
    bot.postMessageToUser('some-username', 'hello bro!');
    bot.postMessageToGroup('some-private-group', 'hello group chat!');
})
