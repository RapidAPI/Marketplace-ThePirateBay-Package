const PirateBay = require('thepiratebay');

module.exports.getTopTorrents = (req, res) => {
  const args = req.body.args;

  let arr = [];
  if(args)
    if(parseInt(args.category))
      arr.push(parseInt(args.category));

  PirateBay.topTorrents(...arr)
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
