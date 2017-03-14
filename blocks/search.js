const PirateBay = require('thepiratebay');

module.exports.search = (req, res) => {
  const args = req.body.args;

  PirateBay.search(args.query, {
    category: args.category || "all",
    filter: {verified: args.verified},
    page: parseInt(args.page) || 0,
    orderBy: args.orderBy || 'name',
    sortBy: args.sortBy || 'asc'
  }).then((data) => {
    let r = {
      contextWrites: {
        to: data
      },
      callback: 'success'
    };
    res.send(r);
  }).catch((err) => {
    let r = {
      contextWrites: {
        to: err
      },
      callback: 'error'
    };
    res.send(r);
  });

};
