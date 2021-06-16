const querystring = require('querystring');

module.exports = (app) => {
  // Env Variables
  const STATE_KEY = process.env.STATE_KEY;
  const CLIENT_ID = process.env.FB_CLIENT_ID;
  const CLIENT_SECRET = process.env.FB_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  app.get('/callback', (req, res) => {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

    // options instance
    if (state === null || state !== storedState) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      res.clearCookie(STATE_KEY);
      // const authOptions = {
      //   url: 'https://accounts.spotify.com/api/token',
      //   form: {
      //     code: code,
      //     redirect_uri: redirect_uri,
      //     grant_type: 'authorization_code'
      //   },
      //   headers: {
      //     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      //   },
      //   json: true
      // };

      const FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:3000/#/home';

      res.redirect(`${FRONTEND_URI}?access_token=${code}`);
    }
  });
}
