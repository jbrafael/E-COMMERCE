function adicionarAoCarrinho(nome, preco) {
        
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    
    carrinho.push({ nome, preco });

    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    console.log(`Produto adicionado ao carrinho: ${nome} - R$ ${preco}`);
}

function exibirCarrinho() {
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    
    carrinho.forEach(produto => {
        console.log(`Produto no carrinho: ${produto.nome} - R$ ${produto.preco}`);
    });
}

function limparCarrinho() {
    
    localStorage.removeItem('carrinho');

    console.log('Carrinho limpo');
}
function exibirCarrinho() {
    // Obtém o carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let cartContainer = document.getElementById('cart-container');

    // Limpa o conteúdo do carrinho
    cartContainer.innerHTML = '';

    if (carrinho.length > 0) {
        // Cria uma div para exibir os itens do carrinho
        let cartItems = document.createElement('div');
        cartItems.id = 'cart-items';

        // Cria um título
        let title = document.createElement('h2');
        title.textContent = 'Carrinho de Compras';
        cartContainer.appendChild(title);

        // Adiciona os itens do carrinho à div
        carrinho.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.textContent = `${item.nome} - R$ ${item.preco}`;
            cartItems.appendChild(cartItem);
        });

        // Adiciona a div com os itens ao carrinho
        cartContainer.appendChild(cartItems);
    } else {
        // Se o carrinho estiver vazio, exibe uma mensagem
        cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }
}

// Chama a função para exibir o carrinho
exibirCarrinho();