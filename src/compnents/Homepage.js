import profile from "./images/notif.png";
import bell from "./images/bell.png";
import home from "./images/home.png";
import activity from "./images/activity.png";
import market from "./images/market.png";
import earn from "./images/earn.png";
import wallet from "./images/wallet.png";
import afya from "./images/afya.png";
import zar from "./images/zar.png";
import ribbon from "./images/ribbon.png";
import hiv from "./images/hiv.png";
import bp from "./images/bp.png";
import lungs from "./images/lungs.png";

import "./Homepage.css";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="nav">
          <div>
            <img src={ribbon} alt="logo" className="logo" />
          </div>
          <div className="notifs">
            <img src={profile} alt="profile" className="img" />
            <img src={bell} alt="notification" className="img" />
          </div>
        </div>

        <div className="box">
          <div className="left">
            <img src={afya} alt="logo2" className="logo2" />
            <p>143.00</p>
            <small>Balance</small>
          </div>
          <div className="line"></div>
          <div className="right">
            <img src={zar} alt="logo3" className="logo2" />
            <p>R21.00</p>
            <small>Equivalent</small>
          </div>
        </div>

        <div className="currency">
          <div className="select">
            <p>select currency:</p>
          </div>
          <div className="input">
            <select name="currency">
              <option value="afya">AFYA</option>
              <option value="zar">ZAR</option>
            </select>
            <div>
              <input type="text" name="currency" placeholder="0.00000001" />
            </div>
          </div>
          <div className="btn">
            <button>send</button>
            <button>receive</button>
          </div>
        </div>

        <div className="activity">
          <div className="activity2">
            <h4>recent activity</h4>
          </div>
          <div className="activity1">
            <img src={hiv} alt="hiv" className="sec-imgs" />
            <p>HIV blood draw test</p>
            <p>A100</p>
          </div>
          <hr />
          <div className="activity1">
            <img src={lungs} alt="xray" className="sec-imgs" />
            <p>TB radiology XRay</p>
            <p>A30</p>
          </div>
          <hr />
          <div className="activity1">
            <img src={bp} alt="heart" className="sec-imgs" />
            <p>blood pressure check</p>
            <p>A10</p>
          </div>
        </div>

        <div className="activity3"></div>

        <div className="border"></div>

        <div className="icons">
          <div>
            <Link to="/" className="links">
              <img src={home} alt="home" className="icon-img" />
              <p>Home</p>
            </Link>
          </div>

          <div>
            <Link to="/activity" className="links other">
              <img src={activity} alt="activity" className="icon-img" />
              <p>Activity</p>
            </Link>
          </div>

          <div>
            <Link to="/wallet" className="links other">
              <img src={wallet} alt="wallet" className="icon-img" />
              <p>Wallet</p>
            </Link>
          </div>

          <div>
            <Link to="/market" className="links other">
              <img src={market} alt="market" className="icon-img" />
              <p>Market</p>
            </Link>
          </div>

          <div>
            <Link to="/earn" className="links other">
              <img src={earn} alt="earn" className="icon-img" />
              <p>Earn</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
