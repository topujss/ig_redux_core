import { Link } from 'react-router-dom';
import './Signup.scss';

import { AiFillFacebook } from 'react-icons/ai';

const Signup = () => {
  return (
    <>
      <main>
        <div className="page">
          <header className="header">
            <div className="logo"></div>
            <p>Sign up to see photos and videos from your friends.</p>
            <button>
              {' '}
              <i>
                <AiFillFacebook />
              </i>{' '}
              Log in with Facebook
            </button>
            <div className="border_line">
              <hr />
              <p>OR</p>
              <hr />
            </div>
          </header>
          <div className="container">
            <form action="">
              <input type="text" placeholder="Mobile Number or Email" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />

              <div className="condition_wrap">
                <p className="condition">
                  People who use our service may have uploaded your contact information to Instagram.{' '}
                  <a href="/">Learn More</a>
                </p>
                <p className="condition">
                  By signing up, you agree to our <a href="/">Terms</a>, <a href="/">Privacy Policy</a> and{' '}
                  <a href="/">Cookies Policy</a>.
                </p>
              </div>
              <button>Sign up</button>
            </form>
          </div>
        </div>
        <div className="option">
          <p>
            Have an account? <Link to="/login">Log in</Link>
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

export default Signup;
