
let livros = [
{ titulo: "Romeu e Julieta", genero: "Romance" },
{ titulo: "O Senhor dos Anéis", genero: "Fantasia" },
{ titulo: "1984", genero: "Ficção Científica" },
{ titulo: "Harry Potter", genero: "Fantasia" },
{ titulo: "O Pequeno Príncipe", genero: "Filosofica" },
{ titulo: "A Revolução dos Bichos", genero: "Infantil" }
];

console.log("Biblioteca inicial:");
console.log(livros);

livros.splice(0, 0,
  { titulo: "It: A Coisa", genero: "Terror" },
  { titulo: "Percy Jackson", genero: "Aventura" }
);
console.log("Após inserir dois livros no início:");
console.log(livros);

livros.splice(livros.length - 1, 1);
console.log("Após remover um livro do fim:");
console.log(livros);

livros.splice(0, 0, { titulo: "O Hobbit", genero: "Fantasia" });
livros.splice(2, 0, { titulo: "A Menina que Roubava Livros", genero: "Drama" });
livros.splice(3, 0, { titulo: "O nome do vento", genero: "Fantasia" });
console.log("Após inserir três livros em índices 0, 2 e 3:");
console.log(livros);

livros.splice(1, 1);
console.log("Após remover o livro do índice 1:");
console.log(livros[1].titulo);
