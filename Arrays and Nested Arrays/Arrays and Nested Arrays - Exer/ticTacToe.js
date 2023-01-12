function ticTacToe(cordinates) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let win = false;
    let moves = 9;
    let mark = 'X';

    for (let cordinate of cordinates) {
        let [inx1, inx2] = cordinate.split(' ');
        moves--;

        if (dashboard[inx1][inx2]) {
            console.log('This place is already taken. Please choose another!');
            moves++;
            continue;
        } else {
            dashboard[inx1][inx2] = mark;
            checkForWin(inx1, inx2, mark)
            if (win) {
                console.log(`Player ${mark} wins!`);
                break;
            }
        }

        if (moves === 0) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        mark = mark === 'X' ? 'O' : 'X';
    }

    function checkForWin(inx1, inx2, mark) {
        if ((dashboard[inx1][0] === mark && dashboard[inx1][1] === mark && dashboard[inx1][2] === mark) ||
            (dashboard[0][inx2] === mark && dashboard[1][inx2] === mark && dashboard[2][inx2] === mark) ||
            (dashboard[0][0] === mark && dashboard[1][1] === mark && dashboard[2][2] === mark) ||
            (dashboard[0][2] === mark && dashboard[1][1] === mark && dashboard[2][0] === mark)) {
            win = true;
        }
    }
    
    dashboard.forEach(row => console.log(row.join('\t')));
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])