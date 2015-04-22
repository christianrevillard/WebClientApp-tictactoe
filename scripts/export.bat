xcopy "%1..\..\Apps\TicTacToe\TicTacToe\Client" "%1TicTacToe\Client" /Y /I /S
xcopy "%1..\..\Apps\TicTacToe\Lib\Client" "%1TicTacToe\Client" /Y /I /S /EXCLUDE:%2
