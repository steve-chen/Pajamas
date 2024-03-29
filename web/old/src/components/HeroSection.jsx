import React from "react";
import heroImage from "../assets/heroImage.webp";
import coinmarketcap from "../assets/coinmarketcap.webp";
import coingecko from "../assets/coingecko.svg";
import dexscreener from "../assets/dexscreener.png";
import telegram from "../assets/telegram.webp";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  function copyToClipboard(text) {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Address copied to clipboard!");
  }

  return (
    <section className="text-light d-flex align-items-center" style={{ minHeight: "100vh" }} >
      <div className="container py-5">
        
        <div className="row customcard mt-5 py-5">
          <div className="col-lg-4">
            <motion.img
              className="img-fluid rounded-circle d-block mx-auto customcard"
              style={{ width: "328px" }}
              src={heroImage}
              alt="logo"
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-1 fw-bolder my-3 text-dark heading">PAJAMAS CAT</h1>
            <h4 className="fw-bold">The first youtube cat</h4>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <button
                onClick={() =>
                  copyToClipboard("FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw")
                }
                href="https://linktr.ee/pajamasyoutubecat"
                target="_blank"
                className="custombutton text-decoration-none"
              >
                <span>Contract Address</span>
              </button>
              <a
                href="https://jup.ag/swap/SOL-PAJAMAS_FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw"
                target="_blank"
                className="custombutton text-decoration-none"
              >
                <span>BUY $PAJAMAS</span>
              </a>
              <a
                href="https://linktr.ee/pajamasyoutubecat"
                target="_blank"
                className="custombutton text-decoration-none"
              >
                <span>LINKTR</span>
              </a>
              <a
                href="https://pajamas.foundation/"
                target="_blank"
                className="custombutton text-decoration-none"
              >
                <span>$PAJAMAS FOUNDATION</span>
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-start flex-wrap mt-4 gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="customcard rounded-circle"
                href="https://coinmarketcap.com/dexscan/solana/BqricZnjjtFg8wuTbckV6NZcTstuR7BZtKJtzH8oV3eK/"
                target="_blank"
              >
                <img
                  src={coinmarketcap}
                  className="img-fluid"
                  style={{ width: "48px" }}
                  alt="coinmarketcap"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="customcard rounded-circle"
                href="https://www.coingecko.com/en/coins/pajamas-cat"
                target="_blank"
              >
                <img
                  src={coingecko}
                  className="img-fluid"
                  style={{ width: "48px" }}
                  alt="coingecko"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="customcard rounded-circle"
                href="https://dexscreener.com/solana/bqricznjjtfg8wutbckv6nzctstur7bztkjtzh8ov3ek"
                target="_blank"
              >
                <img
                  src={dexscreener}
                  className="img-fluid"
                  style={{ width: "48px" }}
                  alt="dexscreener"
                />
              </motion.a>
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

        {/* <div className="mt-5">
          <motion.img
            className="img-fluid rounded-circle d-block mx-auto customcard"
            style={{ width: "328px" }}
            src={heroImage}
            alt="logo"
          />
        </div>
        <div>
          <h1 className="display-1 fw-bolder text-center my-4 text-light heading">
            PAJAMAS CAT
          </h1>
        </div>
        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            onClick={() =>
              copyToClipboard("FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw")
            }
            href="https://linktr.ee/pajamasyoutubecat"
            target="_blank"
            className="custombutton text-decoration-none"
          >
            <span>Contract Address</span>
          </button>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a
            href="https://jup.ag/swap/SOL-PAJAMAS_FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw"
            target="_blank"
            className="custombutton text-decoration-none"
          >
            <span>BUY $PAJAMAS</span>
          </a>
          <a
            href="https://linktr.ee/pajamasyoutubecat"
            target="_blank"
            className="custombutton text-decoration-none"
          >
            <span>LINKTR</span>
          </a>
          <a
            href="https://pajamas.foundation/"
            target="_blank"
            className="custombutton text-decoration-none"
          >
            <span>$PAJAMAS FOUNDATION</span>
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-wrap mt-4 gap-3">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="customcard rounded-circle"
            href="https://coinmarketcap.com/dexscan/solana/BqricZnjjtFg8wuTbckV6NZcTstuR7BZtKJtzH8oV3eK/"
            target="_blank"
          >
            <img
              src={coinmarketcap}
              className="img-fluid"
              style={{ width: "48px" }}
              alt="coinmarketcap"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="customcard rounded-circle"
            href="https://www.coingecko.com/en/coins/pajamas-cat"
            target="_blank"
          >
            <img
              src={coingecko}
              className="img-fluid"
              style={{ width: "48px" }}
              alt="coingecko"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="customcard rounded-circle"
            href="https://dexscreener.com/solana/bqricznjjtfg8wutbckv6nzctstur7bztkjtzh8ov3ek"
            target="_blank"
          >
            <img
              src={dexscreener}
              className="img-fluid"
              style={{ width: "48px" }}
              alt="dexscreener"
            />
          </motion.a>
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
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
