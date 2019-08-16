import React from "react";
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
          <a href="#">FAQ</a> <br />
          <a href="#">Brand Guidelines</a>
        </div>
        <div className="footer__item">
          <br />
          <a href="#">Thỏa thuận sử dụng</a>
          <br />
          <a href="#">Quy chế hoạt động</a>
          <br />
          <a href="#">Chính sách bảo mật</a>
          <br />
          <a href="#">Quyền lợi thành viên</a>
          <br />
        </div>
        <div className="footer__item">
          <h3>Đối Tác</h3>

          <div className="row col-md-12 lineicon">
            <a target="_blank" href="http://bhdstar.vn">
              <img className="icon" src={BHD} />
            </a>
            <a target="_blank" href="http://galaxycine.vn">
              <img className="icon" src={galaxycine} />
            </a>
            <a target="_blank" href="http://cinestar.com.vn">
              <img className="icon" src={cinestar} />
            </a>
            <a target="_blank" href="https://www.megagscinemas.vn">
              <img className="icon" src={megags} />
            </a>
            <a target="_blank" href="https://www.betacineplex.vn/">
              <img className="icon" src={bt} />
            </a>
          </div>
          <a target="_blank" href="http://lottecinemavn.com">
            <img className="icon" src={lotte} />
          </a>
          <a target="_blank" href="http://www.agribank.com.vn/">
            <img className="icon" src={AGRIBANK} />
          </a>
          <a target="_blank" href="https://www.vietinbank.vn/">
            <img className="icon" src={VIETTINBANK} />
          </a>
          <a target="_blank" href="https://zalopay.vn/">
            <img className="icon" src={zalopay} />
          </a>
          <a target="_blank" href="https://momo.vn">
            <img className="icon" src={momo} />
          </a>
        </div>
        <div className="footer__item">
          <h3>Mobile App</h3>
          <a target="_blank" href="#">
            <img className="iconapp" src={apple} />
          </a>
          <a target="_blank" href="#">
            <img className="iconapp" src={android} />
          </a>
        </div>
        <div className="footer__item">
          <h3 className="social">Social</h3>
          <a target="_blank" href="#">
            <img className="iconapp" src={facebook} />
          </a>
          <a target="_blank" href="#">
            <img className="iconapp" src={zalo} />
          </a>
        </div>
      </div>
      <hr class="hrFooter"></hr>
    </section>
  );
}
