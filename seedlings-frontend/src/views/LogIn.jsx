import { LogInHandler } from '../handler/facebook';

// SCSS
import '../sass/Unique/_login.scss';

function LogIn() {
  return (
    <div className="LogIn">
      <section id="login_header">
        <h2>Log In</h2>
      </section>

      <section id="credentials_container">
        {/* User Account */}
        {/* <div className="credential_wrappers" id="user_account">
          <label>User Account</label>
          <input type="email" placeholder="youremail@gmail.com" />
        </div> */}

        {/* Password */}
        {/* <div className="credential_wrappers" id="user_password">
          <label>Password</label>
          <input type="password" placeholder="...." />
        </div> */}
        <div className="credential_wrappers" onClick={ LogInHandler }>
          Connect with FACEBOOK
        </div>
      </section>
    </div>
  );
}

export default LogIn;
