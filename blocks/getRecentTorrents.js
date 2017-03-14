const PirateBay = require('thepiratebay');

module.exports.getRecentTorrents = (req, res) => {

  PirateBay.recentTorrents()
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
