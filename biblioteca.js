var QTD = 20; // quantidade de imagens para a biblioteca
var EXTENSAO = "png";
var PADRAO = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // numero dos cartões padrão do app

var BIBLIOTECA = [];
for (var i = 1; i <= QTD; i++) {
  BIBLIOTECA.push({ arquivo: "cartoes/" + i + "." + EXTENSAO, titulo: "" });
}
