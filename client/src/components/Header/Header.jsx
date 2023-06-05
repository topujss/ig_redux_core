import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlinePlusCircle } from 'react-icons/ai';
import '../../pages/Home/Home.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">
                <i>
                  <AiFillHome />
                </i>{' '}
                Home
              </Link>
            </li>
            <li>
              <Link to="/">
                <i>
                  <AiOutlinePlusCircle />
                </i>
                Create
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220604085434/GeeksForGeeks-300x243.png"
                    alt=""
                  />
                </span>
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
