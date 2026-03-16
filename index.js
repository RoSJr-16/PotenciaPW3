import express from "express";
const app = express();

app.use(express.json());

app.get("/exercicios-basicos", (req, res) => {
  res.json({
    titulo: "10 Exercícios Básicos Resolvidos",
    exercicios: [
      { questao: "2^3", resolucao: "2*2*2 = 8" },
      { questao: "5^2", resolucao: "5*5 = 25" },
      { questao: "10^3", resolucao: "10*10*10 = 1000" },
      { questao: "3^4", resolucao: "3*3*3*3 = 81" },
      { questao: "4^3", resolucao: "4*4*4 = 64" },
      { questao: "6^2", resolucao: "6*6 = 36" },
      { questao: "7^2", resolucao: "7*7 = 49" },
      { questao: "9^2", resolucao: "9*9 = 81" },
      { questao: "8^2", resolucao: "8*8 = 64" },
      { questao: "2^5", resolucao: "2*2*2*2*2 = 32" }
    ]
  });
});

app.get("/propriedades", (req, res) => {
    res.json({
        titulo: "Principais Propriedades de Potências",
        propriedades: [
          {
            nome: "Produto de potências de mesma base",
            regra: "a^m * a^n = a^(m+n)",
            exemplo: "2^3 * 2^4 = 2^(3+4) = 2^7 = 128"
          },
          {
            nome: "Divisão de potências de mesma base",
            regra: "a^m / a^n = a^(m-n)",
            exemplo: "5^6 / 5^2 = 5^(6-2) = 5^4 = 625"
          },
          {
            nome: "Potência de potência",
            regra: "(a^m)^n = a^(m*n)",
            exemplo: "(3^2)^3 = 3^(2*3) = 3^6 = 729"
          },
          {
            nome: "Potência de produto",
            regra: "(a*b)^n = a^n * b^n",
            exemplo: "(2*3)^2 = 2^2 * 3^2 = 4 * 9 = 36"
          },
          {
            nome: "Potência de quociente",
            regra: "(a/b)^n = a^n / b^n",
            exemplo: "(4/2)^2 = 4^2 / 2^2 = 16/4 = 4"
          },
          {
            nome: "Expoente zero",
            regra: "a^0 = 1 (a ≠ 0)",
            exemplo: "7^0 = 1"
          },
          {
            nome: "Expoente negativo",
            regra: "a^-n = 1 / a^n",
            exemplo: "2^-3 = 1 / 2^3 = 1/8"
          }
        ]
      });
    
  });

app.get("/vestibular1", (req, res) => {
  res.json({
    vestibular: "ENEM",
    questao: "Simplifique: 2^3 * 2^5",
    resolucao: "2^(3+5) = 2^8 = 256"
  });
});

app.get("/vestibular2", (req, res) => {
  res.json({
    vestibular: "FUVEST",
    questao: "Simplifique: (3^2)^3",
    resolucao: "3^(2*3) = 3^6 = 729"
  });
});

app.get("/vestibular3", (req, res) => {
  res.json({
    vestibular: "UNICAMP",
    questao: "Simplifique: 5^6 / 5^2",
    resolucao: "5^(6-2) = 5^4 = 625"
  });
});

app.get("/vestibular4", (req, res) => {
  res.json({
    vestibular: "UNESP",
    questao: "Resolva: 10^-2",
    resolucao: "1 / 10^2 = 1/100 = 0.01"
  });
});

app.get("/vestibular5", (req, res) => {
  res.json({
    vestibular: "UFRJ",
    questao: "Simplifique: (2*3)^2",
    resolucao: "2^2 * 3^2 = 4 * 9 = 36"
  });
});

app.get("/propriedade", (req, res) => {
    res.json(exercicios);
  });


  app.get("/exercicio/:id", (req, res) => {
    let id = req.params.id;
  
    res.json({
      mensagem: "Você pediu o exercício",
      id: id
    });
  });
  
  app.get("/buscar", (req, res) => {
    let vestibular = req.query.vestibular;
  
    res.send({
      mensagem: "Busca por vestibular",
      vestibular: vestibular
    });
  });
  
  app.post("/novo-exercicio", (req, res) => {
    const { questao, resolucao } = req.body;
  
    res.send({
      mensagem: "Exercício recebido",
      questao: questao,
      resolucao: resolucao
    });
  });

//Porta
const porta = 3000;
app.listen(porta, () => {
    console.log(`Rodando na porta 3000`)
  })
  

/*
http://localhost:3000/exercicios-basicos
http://localhost:3000/vestibular1
http://localhost:3000/vestibular2
http://localhost:3000/vestibular3
http://localhost:3000/vestibular4
http://localhost:3000/vestibular5
*/