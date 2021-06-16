const querystring = require('querystring');

module.exports = (app) => {
  const SCOPE = process.env.SCOPE;

  const auth = () => Math.random().toString(36).slice(5, 11).toUpperCase();

  app.get('/api/login', (req, res) => {
    console.log('HERE');
    // get the randomly created string
    const AUTH_ID = auth();

    const QUERY = querystring.stringify({
      response_type: 'code',
      auth_type: 'rerequest',
      scope: SCOPE,
      client_id: process.env.FB_CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI || 'http://localhost:5000/callback',
      state: AUTH_ID,
    });

    const BASE_URL = 'https://www.facebook.com/v11.0/dialog/oauth?';

    // Set Cookie for authenticating redirection
    res.cookie(process.env.STATE_KEY, AUTH_ID);

    // Redirect The Page Carrying The Payload Created Above
    res.redirect(`${BASE_URL}${QUERY}`);
  });
}
