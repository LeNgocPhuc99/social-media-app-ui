import "./rightBar.scss";

import "./rightBar.scss";
import Avatar from "../../assets/avatar.webp";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For Your</span>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <span>Asura</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <span>Asura</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Active</span>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <p>
                <span>Asura</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <p>
                <span>Asura</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <p>
                <span>Asura</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <p>
                <span>Asura</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>Asura</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
