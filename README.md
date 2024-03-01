<h1>Quest React Avançado - Teste Técnico Pokédex </h1>

Propósito da aplicação
Esta aplicação foi realizada com intuito de cumprir o último desafio da parte de front-end do Curso Dev em Dobro.
O propósito é criar uma pokedex, consumindo dados da api de pokemons (poke.api) e para cada pokemon exista uma segunda página para mostrar detalhes sobre o pokemon escolhido.

Essa aplicação possui três páginas definidas:

<strong>HOME:</strong> a primeira página consiste, principalmente, em apresentar os 10 primeiros pokemons em ordem numérica, com um botão que serve para requisitar que mais pokemons sejam apresentados na tela. 
Temos um cabeçalho com uma busca, permitindo que o usuário procure por tipo (em inglês ou português), por número ou por nome. Essa busca filtra os pokemons a medida que o texto é escrito, em tempo real. Também nesse cabeçalho temos um ícone que, quando clicado, retorna-se para a página inicial, independente de qual página você esteja, e temos um botão para mudar o Tema entre claro/escuro.

[![Pagina HOME](https://i9.ytimg.com/vi_webp/wTZb8cq6T8Y/mq1.webp?sqp=CLyria8G&rs=AOn4CLDQv7ZizLhC_0BzTyIETCdHlQO1DQ)](https://youtu.be/wTZb8cq6T8Y)


<strong>PERFIL:</strong> essa é a página que o usuário é direcionado quando ele seleciona um pokemon qualquer na página HOME. Ela possui o mesmo cabeçalho da página Home e apresenta detalhes sobre o pokemon escolhido.

[![Pagina PERFIL](https://i9.ytimg.com/vi_webp/5Z_VbTMFpGk/mq2.webp?sqp=CJSwia8G&rs=AOn4CLBm_HInrkfjf8RmAw_u_uD5xlxuLw)](https://youtu.be/5Z_VbTMFpGk)

<strong>PAGE 404:</strong> essa página possui o mesmo cabeçalho e ela aparece quando algum caminho não existente é acessado. Permitindo retornar a página principal clicando no ícone "Pokemon".

[![PAGE 404](https://i9.ytimg.com/vi_webp/iSnTOWPgCk4/mq2.webp?sqp=CMCyia8G&rs=AOn4CLCe3Tpxcpp39drkLXGXXFOnqYiq4Q)](https://youtu.be/iSnTOWPgCk4)

Ferramentas utilizadas e porquê
Vite - servidor moderno utilizado para o desenvolvimento da aplicação.
React.js - a base desse projeto foi feita em react, utilizando-se várias funcionalidades de apoio e também para requisições.
Axios - usado para consumo de api de forma mais simples e direta.
React router dom - utilizado para a navegação entre as páginas.
Componentes - foram criados componentes separados para facilitar a manutenção do código e a repetição de partições comuns.
Styled components - os estilos de cada componente e das páginas foram feitos em module.css.
Context API - utilizado para a mudança de tema.

Decisões e desafios durante o projeto

<span>Services: apiService</span>
Com o andamento do projeto percebi que a parte do código responsável pelas buscas na API estavam sendo repetidos e se tornando muito massivos (muitas linhas de código). Sendo assim simplifiquei a busca da API em um arquivo separado, o qual eu importei onde ele precisava ser usado. Essa decisão deixou o código das minhas páginas mais limpo e direto ao ponto para quem o leia.

<span>Context: theme-context</span>
Seguindo os exemplos dados em aulas do curso Dev em Dobro, criei o caminho de pastas e arquivos e também associei a um componente "Botão", permitindo que em qualquer parte da minha aplicação o tema pode ser trocado de claro para escuro ou vice-versa.

<span>Utils: languageMappings</span>
Como o site é em nossa lingua nativa, implementei essa facilidade para que o usuário possa filtrar entre tipos de pokemon mais facilmente. Com ela, se o usuário não souber os tipos em inglês, mesmo ele escrevendo "fogo", a busca trará todos os pokemons tipo "fire" na página principal.


Comandos para rodar o projeto no computador de terceiros
<br>
Para rodar a minha aplicação no seu computador você precisará fazer um fork do meu repositório no GitHub e instalar as dependências que eu utilizei. Segue um passo a passo.

<strong>Passo a passo para fazer o fork:</strong>
<br>
Com sua conta do Github logada acesse o meu repositório: https://github.com/LivsGiro/teste-tecnico-spa-react

No canto superior direito clique em "Fork" e escolha onde deseja que ele seja feito.
Depois de escolhido o Github criará uma cópia do repositório na sua conta em poucos segundos.

Agora você tem um fork do repositório original na sua conta GitHub. Você pode clonar este fork para o seu computador local, fazer alterações nele, fazer commits e, se desejar, enviar um pull request para contribuir com suas alterações de volta para o repositório original.

<strong>Para rodar o projeto em um servidor local</strong>
Instalar o Node.js no seu computador: https://nodejs.org/en/
No arquivos package.json estão listadas todas as dependências que instalei na minha aplicação. Você precisará instalá-las também.
Essa é a lista de dependências digitando o código correspondente em um terminal novo dentro do Vs Code ou onde você preferir:
    "axios": "^1.6.7" - npm i axios
    "react": "^18.2.0" - npm i react
    "react-dom": "^18.2.0" - npm i react-dom
    "react-icons": "^5.0.1" - npm i react-icons
    "react-router-dom": "^6.22.0" - npm i react-router-dom
    "styled-components": "^6.1.8" - npm i styled-components

Lembre-se de não usar o mesmo terminal para outros procedimentos. Faça a instalação e feche o terminal. 

Após tudo instalado conforme o necessário abra um novo terminal e digite
npm run dev

E então um servidor local será gerado e você pode clicar nele pressionando o ctrl-L + botão esquerdo do mouse. 

Muito obrigada por acompanhar o meu trabalho!
Lívia