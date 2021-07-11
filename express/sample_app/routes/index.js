const router = require('express').Router();

router.get('/', (req, res) => {
  res.render(
    '/Users/tpryuki/node/learn_node,js/express/sample_app/views/index.ejs'
  );
});

module.exports = router;
