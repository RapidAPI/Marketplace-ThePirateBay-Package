const PirateBay = require('thepiratebay');

module.exports.getTorrent = (req, res) => {
  const args = req.body.args;

  PirateBay.getTorrent(args.id)
    .then((data) => {
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
