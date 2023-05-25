const express = require("express");
require("dotenv").config();
const connectDB = require("./data/db");
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

// function paginationMiddleware(model) {
//   return (req, res, next) => {
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);

//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;

//     let paginationObjInfo = {}

//     if(endIndex < model.length) {
//       paginationObjInfo.next = {
//         page: page + 1,
//         limit: limit
//       }
//     }

//     if(startIndex > 0) {
//       paginationObjInfo.previous = {
//         page: page - 1,
//         limit: limit
//       }
//     }

//     paginationObjInfo.results = model.slice(startIndex, endIndex);
//     res.resultPagination = paginationObjInfo;

//     next();
//   }
// }

try {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
  connectDB();
} catch (error) {
  console.log(error);
}
