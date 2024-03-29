import React from "react";
import image from "../assets/meme1.webp";
import telegram from "../assets/telegram.webp";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <section className="text-light py-lg-5" id="howToBuy">
      <div className="container">
        <h2 className="text-light display-1 fw-bold heading mb-lg-5">HOW TO BUY $PAJAMAS?</h2>

        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-5">
            <img src={image} className="img-fluid w-100 customcard" alt="" />
          </div>
          <div className="col-lg-7">
            <div className="row g-3 my-lg-5">
              <div className="col-lg-6">
                <div class="customcard" style={{ minHeight: "220px" }}>
                  <h5 className="fs-4 fw-bold">CLICK "BUY $PAJAMAS"</h5>
                  <div className="d-flex justify-content-center justify-content-md-start gap-3">
                    <a
                      href="https://jup.ag/swap/SOL-PAJAMAS_FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw"
                      target="_blank"
                      className="custombutton text-decoration-none my-4"
                    >
                      <span>BUY $PAJAMAS</span>
                    </a>
                  </div>
                  <p className="text-sm">The button will take you to Raydium</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div class="customcard" style={{ minHeight: "220px" }}>
                  <h5 className="fs-4 fw-bold">CONNECT YOUR WALLET</h5>
                  <p className="mt-3">
                    Make sure you have SOL in your wallet to be able to trade.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div class="customcard" style={{ minHeight: "220px" }}>
                  <h5 className="fs-4 fw-bold">CLICK SWAP!</h5>
                  <p className="">Put in the contract:</p>
                  <p className="sm">
                    FVER7SSVY5GQAMAWF7QFB5MNUU MDDBPNPG4NCA4ZHOLW
                  </p>
                  <p className="sm">Simply click swap!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div class="customcard" style={{ minHeight: "220px" }}>
                  <h5 className="fs-4 fw-bold">JOIN THE FANCLUB!</h5>
                  <div className="d-flex align-items-center justify-content-center mt-4 gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="customcard rounded-circle"
                      href="https://t.me/PAJAMAS_PORTAL"
                      target="_blank"
                    >
                      <img
                        src={telegram}
                        className="img-fluid"
                        style={{ width: "48px" }}
                        alt="telegram"
                      />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="customcard rounded-circle"
                      href="https://www.instagram.com/pajamastheyoutubecat/"
                      target="_blank"
                    >
                      <img
                        src={instagram}
                        className="img-fluid"
                        style={{ width: "48px" }}
                        alt="instagram"
                      />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="customcard rounded-circle"
                      href="https://twitter.com/TheYoutubeCat"
                      target="_blank"
                    >
                      <img
                        src={twitter}
                        className="img-fluid"
                        style={{ width: "48px" }}
                        alt="twitter"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
