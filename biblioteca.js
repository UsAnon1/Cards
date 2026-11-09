/* ===========================================================
   BIBLIOTECA DE CARTÕES PRONTOS

   COMO USAR (é só mexer nos dois números/textos abaixo):
   1. Coloque as imagens na pasta "cartoes" com os nomes
      imagem1, imagem2, imagem3 ... (sem pular números).
   2. Em QTD, escreva QUANTAS imagens existem na pasta.
   3. Em EXTENSAO, escreva o formato delas (png, jpg, jpeg ou webp).
      Todas precisam ter o mesmo formato.

   IMPORTANTE: não coloque um número maior do que o de imagens
   que existem. Cada imagem inexistente gera um pedido ao servidor
   e pode causar o erro "Rate limit exceeded".
   =========================================================== */

var QTD = 20;
var EXTENSAO = "png";

var BIBLIOTECA = [];
for (var i = 1; i <= QTD; i++) {
  BIBLIOTECA.push({ arquivo: "cartoes/imagem" + i + "." + EXTENSAO, titulo: "" });
}

/* Cartões de TEXTO prontos (opcional). Tire as barras // para usar:
// BIBLIOTECA.push({ texto: "Isso vai passar.", bg: "#6c5ce7", cor: "#ffffff", fonte: "Georgia, serif" });
*/
