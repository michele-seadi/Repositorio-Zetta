const app = require('./src/app');
const PORT = process.env.PORT;
// console.log("VARIAVEIS DE AMBIENTE", process.env);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));