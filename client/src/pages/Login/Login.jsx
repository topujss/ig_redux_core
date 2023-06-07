import { Link } from 'react-router-dom';
import '../Signup/Signup.scss';

import { AiFillFacebook } from 'react-icons/ai';
import { useState } from 'react';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  // when change inputs
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main>
        <div className="page">
          <header className="header">
            <div className="login_logo">
              <Link href="/">
                <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="" />
              </Link>
            </div>
          </header>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Mobile Number or Email"
                value={input.email}
                name="email"
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={input.password}
                name="password"
                onChange={handleInputChange}
              />

              <Link className="login_btn" to="/">
                Login
              </Link>
              <div className="border_line">
                <hr />
                <p>OR</p>
                <hr />
              </div>
              <Link to="/">
                {' '}
                <i>
                  <AiFillFacebook />
                </i>{' '}
                Log in with Facebook
              </Link>
            </form>
          </div>
        </div>
        <div className="option">
          <p>
            Have an account? <Link to="/signup">Sign Up</Link>
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
