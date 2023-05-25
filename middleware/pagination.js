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

module.exports = paginationMiddleware;