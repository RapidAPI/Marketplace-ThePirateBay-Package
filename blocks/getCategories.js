const PirateBay = require('thepiratebay');

module.exports.getCategories = (req, res) => {

  PirateBay.getCategories()
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
