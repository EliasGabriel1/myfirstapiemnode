const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./config/routes");
const database = require("./services/db");
const Sequelize = require("sequelize");
require("dotenv").config();

const app = express();

(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();

// (async () => {
//     const Usuario = require('./Usuario.js');

//     try {
//         const resultado = await database.sync();
//         console.log(resultado);

//         const resultadoCreate = await Usuario.create({
//             nome: 'marcos',
//         })
//         console.log(resultadoCreate);
//     } catch (error) {
//         console.log(error);
//     }
// })();

// (async () => {
//     const Fotos = require('./Fotos');

//     try {
//         const resultado = await database.sync();
//         console.log(resultado);

//         const resultadoCreate = await Fotos.create({
//             Data:"14/08/2020",
//             Copyright:"aaaaa",
//             url:"www.google.com",
//             descricao:"é mole?",
//             likes:"10"
//         })
//         console.log(resultadoCreate);
//     } catch (error) {
//         console.log(error);
//     }
// })();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

//Ver usuario
(async () => {
  const Usuario = require("./Usuario.js");
  const db = await Usuario.findAll();
  //   Caso Queira trazer apenas o primeiro usuario pelo id:
  //   const db = await Usuario.findByPk(1);
  // buscar dados
  app.get("/", (req, res) => {
    return res.json({ db });
  });
})();

// //Ver usuario
// (async () => {
//   app.get("/:id", (req, res) => {
//     const id = req.params.id;
//     const Usuario = require("./Usuario.js");
//     const db = Usuario.findByPk(id);
//     return res.json({ db });
//   });
// })();

// buscar dados
// app.get("/last", (req, res) => {
//   const Usuario = require("./Usuario.js");
//   //   Caso Queira trazer apenas o primeiro usuario pelo id:
//   const db = Usuario.min("id", {
//     where: {
//       id: "id",
//     },
//   }).then((maxAge) => {});
//   return res.json({ db });
// });

app.get("/Fotos", (req, res) => {
  const Fotos = require("./Fotos");
  Fotos.findAll({})
    .then((fotos) =>
      res.json({
        error: false,
        data: fotos,
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        data: [],
        error: error,
      })
    );
});

// adicionar dados do USUARIO
app.post("/add/:nome", (req, res) => {
  const { nome } = req.body;
  const Usuario = require("./Usuario.js");
  Usuario.create({
    nome: nome,
  })
    .then((usuario) =>
      res.status(202).json({
        error: false,
        data: usuario,
        message: "Novo Usuario Criado",
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        data: [],
        error: error,
      })
    );
});

app.post("/addFotos", (req, res) => {
  const { Data, Copyright, url, descricao, likes } = req.body;

  const Fotos = require("./Fotos");
  Fotos.create({
    Data: Data,
    Copyright: Copyright,
    url: url,
    descricao: descricao,
    likes: likes,
  })
    .then((Fotos) =>
      res.status(202).json({
        error: false,
        data: Fotos,
        message: "Novas fotos Criadas",
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        data: [],
        error: error,
      })
    );
});

// Apagar dados
app.delete("/del", (req, res) => {
  const Fotos = require("./Fotos");
  const { id } = req.body;
  Fotos.destroy({ where: { id: id } })
    .then((status) =>
      res.status(201).json({
        error: false,
        message: "A foto foi deletada",
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        error: error,
      })
    );
});

app.delete("/:id", (req, res) => {
  const user_id = req.params.id;
  const Usuario = require("./Usuario.js");
  Usuario.destroy({ where: { id: user_id } })
    .then((status) =>
      res.status(201).json({
        error: false,
        message: "O usuario foi deletado",
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        error: error,
      })
    );
});

app.put("/edit", (req, res) => {
  const { nome, id } = req.body;
  const Usuario = require("./Usuario.js");
  Usuario.update(
    {
      nome: nome,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((user) =>
      res.status(201).json({
        error: false,
        message: "O usuario foi atualizado.",
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        error: error,
      })
    );
});

app.put("/edit/Fotos/", (req, res) => {
  const { Data, Copyright, url, descricao, likes } = req.body;
  const Fotos = require("./Fotos");
  Fotos.update(
    {
      likes: likes,
    },
    {
      where: {
        url: url,
      },
    }
  )
    .then((user) =>
      res.status(201).json({
        error: false,
        message: "Os dados da foto foi atualizado.",
      })
    )
    .catch((error) =>
      res.json({
        error: true,
        error: error,
      })
    );
});

// (async () => {
//     const Fotos = require('./Fotos');

//     try {
//         const resultado = await database.sync();
//         console.log(resultado);

//         const resultadoCreate = await Fotos.create({
//             Data:"14/08/2020",
//             Copyright:"Eu",
//             url:"www.google.com",
//             descricao:"é mole?",
//             likes:"10"
//         })
//         console.log(resultadoCreate);
//     } catch (error) {
//         console.log(error);
//     }
// })();

app.listen(21262, () => {
  console.log("Express started at http://localhost:21262");
});
