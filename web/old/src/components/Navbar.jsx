import React from "react";
import logo from "../assets/logo.webp";
import twitter from "../assets/twitter.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg px-3 fixed-top navbar-white bg-white">
        <div className="container-fluid">
          <a
            href="/"
            className="navbar-brand fs-4 fw-bolder d-flex align-items-center"
          >
            <img
              style={{ width: "36px" }}
              className="me-2 img-fluid img-thumbnail shadow"
              src={logo}
              alt="logo"
            />
            <span className="">PAJAMAS CAT</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ms-0 ms-lg-5 me-0 me-lg-auto gap-4 py-4 py-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fs-5 fw-semibold customlink"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 fw-semibold customlink"
                  aria-current="page"
                  href="#about"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 fw-semibold customlink"
                  aria-current="page"
                  href="#howToBuy"
                >
                  HOW TO BUY?
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 fw-semibold customlink"
                  aria-current="page"
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-3 my-4 my-lg-0">
              <a
                href="https://twitter.com/TheYoutubeCat"
                target="_blank"
                className="custombutton text-decoration-none"
              >
                <span>
                  TWITTER
                  <img
                    src={twitter}
                    className="img-fluid ms-1"
                    style={{ width: "32px" }}
                    alt="twitter"
                  />
                </span>
              </a>
              <a
                href="https://jup.ag/swap/SOL-PAJAMAS_FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw"
                target="_blank"
                className="custombutton text-decoration-none"
              >
                <span>BUY $PAJAMAS</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
