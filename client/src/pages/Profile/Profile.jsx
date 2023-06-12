import './Profile.scss';
import SingleProfile from '../../components/SingleProfile/SingleProfile';
import { FaCog } from 'react-icons/fa';
import { MdOutlineGridOn } from 'react-icons/md';
import { BsCameraReels, BsPersonBoundingBox, BsSave } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/auth/actions';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((s) => s.authStore);

  const handleUserLogout = () => {
    dispatch(userLogout({ navigate }));
  };

  return (
    <>
      <header>
        <Header />
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{user?.name}</h1>
              <button className="btn profile-edit-btn">Edit Profile</button>
              <button className="btn profile-settings-btn" title="profile settings">
                <i aria-hidden="true">
                  <FaCog />
                </i>
              </button>
              <button onClick={handleUserLogout} className="btn profile-edit-btn">
                Logout
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <Link to="/">
                    <span className="profile-stat-count">188</span> followers
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="profile-stat-count">206</span> following
                  </Link>
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit 📷✈️🏕️
              </p>
            </div>
            <hr />
            <div className="gallery_tab">
              <ul>
                <li className="active">
                  <a href="/">
                    <i aria-hidden="true">
                      <MdOutlineGridOn />
                    </i>{' '}
                    Posts
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i aria-hidden="true">
                      <BsCameraReels />
                    </i>{' '}
                    Reel
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i aria-hidden="true">
                      <BsSave />
                    </i>{' '}
                    saved
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i aria-hidden="true">
                      <BsPersonBoundingBox />
                    </i>{' '}
                    tagged
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="gallery">
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
          </div>
          <div className="loader"></div>
        </div>
      </main>
    </>
  );
};

export default Profile;
