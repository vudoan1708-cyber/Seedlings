import useFetch from '../components/Utils/useFetch';
// Utils
import queryURL from '../components/Utils/queryURL';

// handling production and development mode
const PRODUCTION = process.env.NODE_ENV;
const TOKEN = queryURL(window.location.href, 1);

// Login With OAuth
export function FBLogInHandler() {
  const ENDPOINT = (PRODUCTION === 'production') ? '' : '/api';
  try {
    window.location.href = `${ENDPOINT}/login?platform=fb`;
  } catch (e) {
    window.location.href = '/';
    console.log(e);
  }
}

// User
export async function GetUserProfile() {
const URL = (PRODUCTION === 'production')
            ? `https://seedlings.herokuapp.com/api/user/detail/?token=${TOKEN}`
            : `http://localhost:5000/api/user/detail/?token=${TOKEN}`;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useFetch(URL, 'GET', undefined);
    return response;
  } catch (err) {
    return err;
  }
}
