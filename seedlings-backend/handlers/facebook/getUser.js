const useFetch = require('../../logic/useFetch');

module.exports = async function getUser(TOKEN) {
  const URL = `https://graph.facebook.com/v11.0/me?fields=id,name,email,hometown,birthday,picture&access_token=${TOKEN}`;
  const response = await useFetch(URL, 'GET', undefined);
  return response;
}
