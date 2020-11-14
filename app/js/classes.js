/* 
Todos os crud das classes deverao aplicar as funçoes: cadastro, listagem, ediçao e exclusao 

funçoes do sistema:

1 - Alocar Cliente Essa função deve permitir que o operador do sistema, aloque um cliente em uma cadeira 
específica de uma determinada sessão. Uma vez alocado, esta cadeira em questão fica reservada e não pode 
ser atribuída novamente
2 – Consultar disponibilidade Essa função deverá exibir quais dos assentos da sessão estarão disponíveis. 

Login e Logout:
1 - Login
Deverá ser criada uma página de login onde o usuário deverá ser autenticado no sistema. [Utilizar LocalStorage].
2 - Logout Ao clicar no botão de logout, o usuário deverá ser redirecionado à tela de login e precisará se logar 
novamente para utilizar o sistema.
*/

/* GerenciadorCinema */ 
    /* classe responsavel pela gerencia do cinema como um todo
    atributos: sessoes = [] (array de objetos do tipo sessao) */
    


/* Cliente */ 
    /* classe responsavel por representar cada cliente do cinema
    atributos: nome, idade, email */
   
    


/* Sala */ 
    /* classe responsavel por representar uma sala do cinema
    atributos: identificador, cadeiras(as cadeiras das salas sao: fileiras da A-F, 10 cadeiras
        por fileira)
        cada array representa uma fileira(A[], B[], C[], D[], E[], F[]) */


/* Sessao */ 
    /* classe responsavel por reprsentar cada sessao do cinema
    atributos: data, horario, audio(legendado ou dublado), tipo de tela (3d ou nao), sala = {} Objeto
    sala a qual a sessao sera executada */


/* Filme */ 
    /* classe responsavel por representar o filme 
    atrivutos: titulo do filme, classificaçao de idade, duraçao*/
      
 /* Cadeira */ 
    /* Objeto responsavel por representar uma cadeira do cinema
    atributos: ocupado - true = reservado, false = livre(default) */

