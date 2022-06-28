import React from "react";

function LoginPractise() {
  return (
    <div>
      {" "}
      <div className="cp-login">
        <div className="img-wrap">
          <img src="/assets/images/Capture.PNG" alt="" />
        </div>
        <div className="title-info-btn-wrap">
          <p className="subtitle">Kickstart your Journey with Rocket-Speed.</p>
          <h2 className="title">Login and Start Investing!</h2>
          <div className="action-wrap">
            <button className="button button-black">
              <a href="#">Login</a>
            </button>
            <p className="text-w-link">
              Don't have an account?{" "}
              <span>
                <a href="#">Signup</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPractise;
