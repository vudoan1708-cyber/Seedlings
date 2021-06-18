const getUser = require('../handlers/facebook/getUser');

module.exports = (app) => {
  app.get('/api/user/detail', async (req, res) => {
    const TOKEN = req.query.token;
    try {
      const user = await getUser(TOKEN);
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  })
}
