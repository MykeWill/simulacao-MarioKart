export async function logRollResult (characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} jogou o dado 🎲 
        O resultad do dado foi: ${diceResult}
        Dado: ${diceResult} + ${block}: ${attribute}
        pontos nessa rodada: ${diceResult + attribute} `)
}