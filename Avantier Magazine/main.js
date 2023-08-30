//const nomeProduto = 'Torre Eifel';
//const marca = 'Coisas';
//const preço = 35.450;
//const nomeArquivoImagen = 'pexels-alex-azabache-3879160.jpg'


const catalago = [
{
    id: 1,
    nome: 'Torre eifel',
    marca: 'Coisas',
    preço: 35.450,
    nomeArquivoImagem: 'pexels-alex-azabache-3879160.jpg',
    Premium: true,
},
{
    id: 2,
    nome: 'Lamparina',
    marca: 'Coisas',
    preço: 2.000,
    nomeArquivoImagem: 'pexels-rafael-pires-943150.jpg',
    Premium: true,
},
{
    id: 3,
    nome: 'Fogueira quente',
    marca: 'Coisas',
    preço: 19.890,
    nomeArquivoImagem: 'pexels-vlad-bagacian-1368382.jpg',
    Premium: false,
},
{
    id: 4,
    nome: 'Vulcão Acordado',
    marca: 'Coisas',
    preço: 120.456,
    nomeArquivoImagem: 'pexels-clive-kim-4220967.jpg',
    Premium: false,
},
{
    id: 5,
    nome: 'Buraco de cerca',
    marca: 'Coisas',
    preço: 15.467,
    nomeArquivoImagem: 'pexels-kehn-hermano-3881036.jpg',
    Premium: true,
},
{
    id: 6,
    nome: 'Lampada Celestial Divina',
    marca: 'Coisas',
    preço: 220.437,
    nomeArquivoImagem: 'pexels-matheus-bertelli-1830252.jpg',
    Premium: false,
}

];



for (produto )

const cartãoProduto = 
`<div id="card-produto1">
<img src="./assets/produtos/${catalago[0].nomeArquivoImagem}" alt="Produto1" style="height: 200px;">

<p>${catalago[0].marca}</p>
<p>${catalago[0].nome}</p>
<p>$${catalago[0].preço}</p>
<button>Adicionar</button>
</div>`;

document.getElementById('container-produto').innerHTML += cartãoProduto;