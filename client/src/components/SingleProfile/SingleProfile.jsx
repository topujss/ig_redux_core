import { AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiImages } from 'react-icons/bi';

const SingleProfile = () => {
  return (
    <>
      <div className="gallery-item" tabindex="0">
        <img
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
          className="gallery-image"
          alt=""
        />

        <div className="gallery-item-type">
          <span className="visually-hidden">Gallery</span>
          <i aria-hidden="true">
            <BiImages />
          </i>
        </div>

        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i aria-hidden="true"><AiFillHeart/></i> 42
            </li>
            <li className="gallery-item-comments">
              <span className="visually-hidden">Comments:</span>
              <i aria-hidden="true"><FaRegCommentDots/></i> 1
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleProfile;
