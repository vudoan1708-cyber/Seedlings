const querystring = require('querystring');

const useFetch = require('../logic/useFetch');

module.exports = (app) => {
  // Env Variables
  const STATE_KEY = process.env.STATE_KEY;

  app.get('/callback', async (req, res) => {
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

      try {
        const QUERY = querystring.stringify({
          client_id: process.env.FB_CLIENT_ID,
          redirect_uri: process.env.REDIRECT_URI || 'http://localhost:5000/callback',
          client_secret: process.env.FB_CLIENT_SECRET,
          code: code,
        });
  
        const BASE_URL = 'https://graph.facebook.com/v11.0/oauth/access_token?';
  
        const response = await useFetch(`${BASE_URL}${QUERY}`, 'GET', undefined);
        const { access_token } = response;

        const FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:3000/#/home';

        res.redirect(`${FRONTEND_URI}?access_token=${access_token}`);
      } catch (err) {
        res.redirect('/#' +
          querystring.stringify({
            error: err,
        }));
      }
    }
  });
}
