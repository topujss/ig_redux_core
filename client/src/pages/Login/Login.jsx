import { Link } from 'react-router-dom';
import '../Signup/Signup.scss';

import { AiFillFacebook } from 'react-icons/ai';

const Login = () => {
  return (
    <>
      <main>
        <div className="page">
          <header className="header">
            <div className="login_logo">
              <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="" />
            </div>
          </header>
          <div className="container">
            <form action="">
              <input type="text" placeholder="Mobile Number or Email" />
              <input type="password" placeholder="Password" />

              <button>Login</button>
              <div className="border_line">
                <hr />
                <p>OR</p>
                <hr />
              </div>
              <a href="/">
                {' '}
                <i>
                  <AiFillFacebook />
                </i>{' '}
                Log in with Facebook
              </a>
            </form>
          </div>
        </div>
        <div className="option">
          <p>
            Have an account? <Link to="/signup">Log in</Link>
          </p>
        </div>
        <div className="otherapps">
          <p>Get the app.</p>
          <div className="download_btn">
            <a href="/">
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
            </a>
            <a href="/">
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
            </a>
          </div>
        </div>
        <footer className="footer">
          <ul>
            <li>
              <a href="">Meta</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">HELP</a>
            </li>
            <li>
              <a href="">PRESS</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">JOBS</a>
            </li>
            <li>
              <a href="">PRIVACY</a>
            </li>
            <li>
              <a href="">TEMS</a>
            </li>
            <li>
              <a href="">LOCATIONS</a>
            </li>
            <li>
              <a href="">TOP ACCOUNTS</a>
            </li>
            <li>
              <a href="">HASHTAGS</a>
            </li>
            <li>
              <a href="">LANGUAGE</a>
            </li>
          </ul>
          <p>© {new Date().getFullYear()} Instagram from Meta</p>
        </footer>
      </main>
    </>
  );
};

export default Login;
