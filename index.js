var server = require('cre-nodejs-server');

server.start(
  {
    rootDirectory: require('path').resolve(__dirname),
    pageHeader: '/Lib/Client/html/commonHeader.html',
    routes: [{
        route: '/',        
        handler: server.clientFileHandler('/TicTacToe/Client/html/tictactoe.html')
      }]
  });