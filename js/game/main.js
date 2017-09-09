

function iniciar () {

	// Hello, world!
	console.log("Hello, World!")

	// Definimos uma variavel para ser nossa jogadora
	let jogadora;
	
	// Definimos o tamanho da tela de acordo com o tamanho da janela do navegador
	const largura 	= window.innerWidth
	const altura 	= window.innerHeight

	// Criamos nossa tela de jogo
	criarTelaJogo(largura, altura, carregar, criar, atualizar )

	// Criamos a logica para mover a jogadora
	function mover() {
		if (cima()) {
			jogadora.y -= 5
		} else if (baixo()) {
			jogadora.y += 5
			// Adicionando uma movimentacao ao personagem
			iniciarAnimacao(jogadora, 'down')
		} else if (esquerda()) {
			jogadora.x -= 5
		} else if (direita()) {
			jogadora.x += 5
		}
	}

	// Vamos trazer nossas imagens para o jogo
	function carregar () {
		// chamamos a função para adicionar uma imagem ao jogo
		// Damos um nome para essa imagem: 'jogadora'
		// Informamos aonde encontra-se o arquivo da imagem: 'img/personagem/jogadora.png'
			// carregarImagem('jogadora','../../img/personagem/jogadora.png')

		// Carregando atlas de sprites
		carregarSprites('jogadora','../../img/personagem/sprite.png', 'js/game/chars/sprites.json')
		carregarMapa('../../img/mapa/mapa.png','js/game/mapas/mapa_floor.csv')
	}

	// Criar os elementos do jogo
	function criar () {
		criarMapa()
		jogadora = criarJogadora(200, 250, 'jogadora')
		adicionarAnimacao(jogadora)
		cameraSeguir(jogadora)
	}

	// Atualizar na tela do jogo
	function atualizar () {
		// Aplicamos a movimentação a nossa jogadora
		moverJogadora(mover)
	}

}

// A janela abrindo... Então, função iniciar comece o jogo! :3
window.onload = iniciar()