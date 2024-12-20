import { player1, player2 } from './players/players.js'; 
import { playRaceEngine } from './utils/playRaceEngine.js'; 
import { declareWinner } from './utils/declareWinner.js';




(async function main() {
    console.log(`Vai começar a corridan🏁 entre ${player1.NOME} e ${player2.NOME} começando...\n`)

    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)

})()