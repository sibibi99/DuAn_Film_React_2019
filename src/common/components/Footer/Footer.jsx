import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.scss";
import BHD from "../../../Assets/img/bhd.png";
import galaxycine from "../../../Assets/img/galaxycine.png";
import cinestar from "../../../Assets/img/cinestar.png";
import megags from "../../../Assets/img/megags.png";
import bt from "../../../Assets/img/bt.jpg";
import lotte from "../../../Assets/img/404b8c4b80d77732e7426cdb7e24be20.png";
import AGRIBANK from "../../../Assets/img/AGRIBANK.png";
import VIETTINBANK from "../../../Assets/img/VIETTINBANK.png";
import zalopay from "../../../Assets/img/zalopay_icon.png";
import momo from "../../../Assets/img/momo.png";
import apple from "../../../Assets/img/apple-logo.png";
import android from "../../../Assets/img/android-logo.png";
import facebook from "../../../Assets/img/facebook-logo.png";
import zalo from "../../../Assets/img/zalo-logo.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__item">
          <h3>The Fox</h3>
          <Link>FAQ</Link> <br />
          <Link >BrLinknd Guidelines</Link>
        </div>
        <div className="footer__item">
          <br />
          <Link href="#">Thỏa thuận sử dụng</Link>
          <br />
          <Link href="#">Quy chế hoạt động</Link>
          <br />
          <Link href="#">Chính sách bảo mật</Link>
          <br />
          <Link href="#">Quyền lợi thành viên</Link>
          <br />
        </div>
        <div className="footer__item">
          <h3>Đối Tác</h3>

          <div className="row col-md-12 lineicon">
            <Link>
              <img className="icon" src={BHD} alt=''/>
            </Link>
            <Link  >
              <img className="icon" src={galaxycine} alt=''/>
            </Link>
            <Link target="_blank" href="http://cinestar.com.vn">
              <img className="icon" src={cinestar} alt='' />
            </Link>
            <Link >
              <img className="icon" src={megags} alt=''/>
            </Link>
            <Link href="https://www.betacineplex.vn/">
              <img className="icon" src={bt} alt='' />
            </Link>
          </div>
          <Link>
            <img src={lotte}  alt=''/>
          </Link>
          <Link href="http://www.agribank.com.vn/">
            <img className="icon" src={AGRIBANK}  alt=''/>
          </Link>
          <Link >
            <img className="icon" src={VIETTINBANK} alt=''/>
          </Link>
          <Link>
            <img className="icon" src={zalopay}  alt=''/>
          </Link>
          <Link >
            <img className="icon" src={momo} alt=''/>
          </Link>
        </div>
        <div className="footer__item">
          <h3>Mobile App</h3>
          <Link target="_blank" href="#">
            <img className="iconapp" src={apple} alt=''/>
          </Link>
          <Link target="_blank" href="#">
            <img className="iconapp" src={android} alt=''/>
          </Link>
        </div>
        <div className="footer__item">
          <h3 className="social">Social</h3>
          <Link target="_blank" href="#">
            <img className="iconapp" src={facebook} alt=''/>
          </Link>
          <Link target="_blank" href="#">
            <img className="iconapp" src={zalo} alt='' />
          </Link>
        </div>
      </div>
      <hr class="hrFooter"></hr>
    </section>
  );
}
