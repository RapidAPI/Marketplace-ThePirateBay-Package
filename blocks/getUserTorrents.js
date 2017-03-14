const PirateBay = require('thepiratebay');

module.exports.getUserTorrents = (req, res) => {
  const args = req.body.args;

  PirateBay.userTorrents(args.username, {
    page: args.page || 0,
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
