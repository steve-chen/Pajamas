import React from "react";
import coinmarketcap from "../assets/coinmarketcap.webp";
import telegram from "../assets/telegram.webp";
import twitter from "../assets/twitter.png";
import ca from "../assets/ca.png";
import email from "../assets/email.png";
import { motion } from "framer-motion";

const About = () => {
  function copyToClipboard(text) {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    // Optionally, provide some feedback to the user
    alert("Address copied to clipboard!");
  }

  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-light display-1 fw-bold my-5 heading">CONTACT</h2>
        <div className="row g-4">
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a
              href="https://coinmarketcap.com/currencies/the-first-youtube-cat/"
              target="_blank"
              className="text-decoration-none"
            >
              <div className="customcard text-dark pt-4">
                <img
                  src={coinmarketcap}
                  className="card-img-top img-fluid d-block mx-auto mb-4"
                  style={{ width: "58px" }}
                  alt="coinmarketcap"
                />
                <div className="card-body">
                  <p className="card-text text-center mb-0">
                    CHART - COINMARKETCAP
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a
              href="https://t.me/PAJAMAS_PORTAL"
              target="_blank"
              className="text-decoration-none"
            >
              <div className="customcard text-dark pt-4">
                <img
                  src={telegram}
                  className="card-img-top img-fluid d-block mx-auto mb-4"
                  style={{ width: "58px" }}
                  alt="telegram"
                />
                <div className="card-body">
                  <p className="card-text text-center mb-0">TELEGRAM</p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a
              href="https://twitter.com/TheYoutubeCat"
              target="_blank"
              className="text-decoration-none"
            >
              <div className="customcard text-dark pt-4">
                <img
                  src={twitter}
                  className="card-img-top img-fluid d-block mx-auto mb-4"
                  style={{ width: "58px" }}
                  alt="twitter"
                />
                <div className="card-body">
                  <p className="card-text text-center mb-0">TWITTER</p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-8">
            <a
              className="text-decoration-none"
              onClick={() =>
                copyToClipboard("FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw")
              }
            >
              <div className="customcard text-dark pt-4">
                <img
                  src={ca}
                  className="card-img-top img-fluid d-block mx-auto mb-4"
                  style={{ width: "58px" }}
                  alt="contract address"
                />
                <div className="card-body">
                  <p className="card-text text-center mb-0">
                    FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a href="mailto:admin@pajamas.cat" className="text-decoration-none">
              <div className="customcard text-dark pt-4">
                <img
                  src={email}
                  className="card-img-top img-fluid d-block mx-auto mb-4"
                  style={{ width: "58px" }}
                  alt="email"
                />
                <div className="card-body">
                  <p className="card-text text-center mb-0">
                    Admin@pajamas.cat
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
