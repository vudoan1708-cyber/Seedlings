import { FBLogInHandler } from '../handlers/facebook';
import { LinkedInLogInHandler } from '../handlers/linkedin';

// SCSS
import '../sass/Unique/_login.scss';

function LogIn() {
  return (
    <div className="LogIn_wrapper">
      <div className="LogIn">
        <section id="login_header">
          <h2>Log In</h2>
        </section>

        <section id="credentials_container">
          <div className="credential_wrappers" onClick={ FBLogInHandler }>
            Connect with FACEBOOK
          </div>

          <div className="credential_wrappers" onClick={ LinkedInLogInHandler }>
            Connect with LINKEDIN
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogIn;
