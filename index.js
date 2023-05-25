const express = require("express");
const users = require("./users");
const posts = require("./posts");

const app = express();
const port = 3000;

app.get('/users', paginationMiddleware(users), (req, res) => {
  res.json(res.resultPagination);
});

app.get('/posts', paginationMiddleware(posts), (req, res) => {
  res.json(res.resultPagination);
});

function paginationMiddleware(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let paginationObjInfo = {}

    if(endIndex < model.length) {
      paginationObjInfo.next = {
        page: page + 1,
        limit: limit
      }
    }

    if(startIndex > 0) {
      paginationObjInfo.previous = {
        page: page - 1,
        limit: limit
      }
    }

    paginationObjInfo.results = model.slice(startIndex, endIndex);
    res.resultPagination = paginationObjInfo;

    next();
  }
}

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});