const prompt = require('prompt-sync')();

console.log('JOGO DE DADOS \n');
console.log('VAMOS COMECAR A PARTIDA\n');

var jogo = [];
var jogoDados = 0;
let answer = 'S';

function resetcounter(){
    jogo = [];
    jogoDados = 0;

}

while ( answer === 'S' ) {
    resetcounter();

var jogadores = prompt('* NUMERO DE JOGADORES:');
           
console.log();

var rodadas = prompt('* QUANTIDADE DE RODADAS:');
    
console.log();

console.log('INICIO DO JOGO.\n');


function jogador(rodadas, jogador, nome, dados){
    let nova = {
        rodadas: rodadas,
        jogador: jogador,
        name: nome,
        nDados: dados,


    output: function(){
            return `RODADA ${this.rodadas} O JOGADOR(A) ${this.name} MARCOU ${this.nDados} PONTOS.`
        }
    }
    jogo.push(nova);
}


function addJogador() {
    for (let w = 1; w <= rodadas; w++){
        console.log(`PARTIDA DE N° ${w}`);
        console.log();
            for (let i = 1; i <= jogadores; i++){
                let nome = prompt(`JOGADOR ${i}, INSERIR NOME:`);
                console.log();
               
                jogoDados = Math.floor((Math.random() * 7) + 1);
                jogador(w, i, nome, jogoDados);
            }
    }
}

if (rodadas > 0){
    addJogador();
    rodadas--
}


console.log();
console.log('PLACAR');

console.log();

jogo = jogo.sort(
	(a, b) => a.rodadas === b.rodadas && b.nDados - a.nDados,
    
); for (let i of jogo){
    console.log(i.output());
};

console.log();
console.log('PLACAR FINAL');
console.log();

var vencedorJogo = {};

jogo.forEach(function(w) {
	if (vencedorJogo.hasOwnProperty(w.name)) {
		vencedorJogo[w.name] = vencedorJogo[w.name] + w.nDados;
} else {
	vencedorJogo[w.name] = w.nDados
}
});

let vencedor = [];

for (let prop in vencedorJogo){
	vencedor.push({name: prop, nDados: vencedorJogo[prop]})
}

console.log(`VENCEDOR DO JOGO FOI  ${vencedor[0].name} COM ${vencedor[0].nDados} PONTOS`);
console.log();

answer = prompt('JOGAR NOVAMENTE? [S / N] ');
} if (answer = 'S') {
    console.log('ATE A PROXIMA!')
}
