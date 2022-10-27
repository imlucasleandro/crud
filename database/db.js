const Client = require('pg').Client;

const conexao = new Client({
    user: "postgres", 
    password: "1234", 
    host: "localhost", 
    port: 5432,
    database: "hospital"
});

conexao.connect((error)=> {
    if (error) {
        console.error('A conexao deu erro' + error);
        return;
    }
    console.log('Conectado com sucesso');
}
);

module.exports = conexao;