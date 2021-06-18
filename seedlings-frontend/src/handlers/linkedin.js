// handling production and development mode
const PRODUCTION = process.env.NODE_ENV;

// Login With OAuth
export function LinkedInLogInHandler() {
  const ENDPOINT = (PRODUCTION === 'production') ? '' : '/api';
  try {
    window.location.href = `${ENDPOINT}/login?platform=linkedin`;
  } catch (e) {
    window.location.href = '/';
    console.log(e);
  }
}
