
export async function declareWinner(character1, character2) {
    console.log(`Resultado Final:`)
    console.log(`${character1.NOME} Marcou ${character1.PONTOS} no total`)
    console.log(`${character2.NOME} marcou ${character2.PONTOS} no total`)

    if (character1.PONTOS > character2.PONTOS) 
        console.log(`${character1.NOME} É o vencedor! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS) 
        console.log(`${character2.NOME} É o vencedor! Parabéns! 🏆`);
     else 
        console.log("A corrida terminou em empate");
    
}