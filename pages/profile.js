import AuthFormInput from "../Components/Forms/AuthFormInput";
import Layout from "../Components/Layout";

export default function profile() {
  return (
    <Layout>
      <div className="profile">
        <div className="profile__container">
          <div className="profile__details">
            <div className="profile__name">welcome, PROIO</div>

            <div className="profile__sideDetails">
              <div className="profile__profileIcon">
                <i class="far fa-user"></i>
              </div>
              {/* <div className="profile__email"> proio@gmail.com</div> */}
            </div>
          </div>

          {/* <div className="profile__listIcon">
          <i class="far fa-user"></i>
        </div>
        <div className="profile__left">
          <a href="/watch">Account</a>
        </div> */}

          <div className="profile__list">
            <div className="profile__item">
              <div className="profile__listIcon">
                <i class="fas fa-video"></i>
              </div>
              <div className="profile__left">
                <a href="/watch">WATCH NOW</a>
              </div>
            </div>

            <div className="profile__item"></div>
          </div>

          <div className="profile__account">
            <div className="profile__account--list">
              <div className="profile__account--item">
                <div className="profile__account--field">
                  <i class="far fa-user"></i>
                </div>
                <div className="profile__account--word">proio project</div>
              </div>

              <div className="profile__account--item">
                <div className="profile__account--field">
                  <i class="fas fa-phone"></i>
                </div>
                <div className="profile__account--word">02301021000</div>
              </div>
              <div className="profile__account--item">
                <div className="profile__account--field">
                  <i class="far fa-envelope-open"></i>
                </div>
                <div className="profile__account--word">proIo@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
