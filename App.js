const agentBot = require('./lib/agentBot');
const readline = require('readline');


console.log("init....");

const botAccountId = process.env.botAccountId

const bot1userName = process.env.bot1userName
const bot2userName = process.env.bot2userName
const bot3userName = process.env.bot3userName
const bot4userName = process.env.bot4userName


const botpassword = process.env.botpassword


console.log("get config form env.");


//TODO cosole.log delete!!  password!!!!

const botManageObj = {}
botManageObj['onlineBotCount'] = 0;

if (botAccountId && bot1userName && botpassword) {

    console.log(botAccountId + ":" + bot1userName + ":" + botpassword);

    const agent = new agentBot(botAccountId, bot1userName, botpassword);
    agent.start();
    botManageObj['onlineBotCount']++
}
if (botAccountId && bot2userName && botpassword) {
    const agent2 = new agentBot(botAccountId, bot2userName, botpassword);
    console.log(botAccountId + ":" + bot2userName + ":" + botpassword);

    // agent2 is bad bot user.
    // agent2.start();
    //onlineBotCount++;
}
if (botAccountId && bot3userName && botpassword) {
    const agent3 = new agentBot(botAccountId, bot3userName, botpassword);
    console.log(botAccountId + ":" + bot3userName + ":" + botpassword);
    agent3.start();
    botManageObj['onlineBotCount']++
}

if (botAccountId && bot4userName && botpassword) {
    const agent4 = new agentBot(botAccountId, bot4userName, botpassword);
    console.log(botAccountId + ":" + bot4userName + ":" + botpassword);
    agent4.start();
    botManageObj['onlineBotCount']++
}


console.log("bot online!!");


//server.js
var http = require('http'); 
var server = http.createServer();


server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write(JSON.stringify(botManageObj) );
    res.end();
})
server.listen(80, '127.0.0.1')



