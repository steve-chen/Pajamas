import React from "react";
import meme2 from "../assets/meme2.webp";
import meme3 from "../assets/meme3.webp";
import meme4 from "../assets/meme4.webp";
import tweet1 from '../assets/tweet1.jpg';
import tweet2 from '../assets/tweet2.jpg';
import tweet3 from '../assets/tweet3.jpg';
import steveChen from '../assets/Steve_Chen.jpg'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-lg-5" id="about">
      <div className="container">
        <h2 className="display-1 fw-bold text-center text-light mb-5 heading">
          NARRATIVE
        </h2>
        <div className="customcard row align-items-center g-5 py-3">
          <div className="col-12">
            <p className="mb-0 fs-5 text-center text-dark mb-4">
              The first youtube cat, Pajamas.
            </p>
            <p className="mb-0 fs-5 text-center text-dark mb-4">
              On May 22 2004, YouTube co-founder Steve Chen became the first
              ever person to upload a cat video to YouTube - this 30-second clip
              of his pet playing with a rope titled “Pajamas and Nick Drake”
            </p>
            <p className="mb-0 fs-5 text-center text-dark mb-4">
              $PAJAMAS was born out of the nostalgia that we all know and love
              in crypto, Steve Chen felt the same and wanted his cat Pajamas to
              be immortalized on the blockchain for all eternity. What started
              out as a grassroots project has grown by leaps and bounds to
              become a contender for the top memecoin of 2024.
            </p>
            <p className="mb-0 fs-5 text-center text-dark mb-4">
              2005 was the year that Steve Chen posted the first ever cat video
              on YouTube, creating a moment that would last forever on the
              internet.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <iframe
              // width="1120"
              // height="630"
              className="w-100 img-thumbnail rounded-0 shadow-lg mb-4"
              style={{ minHeight: '420px', maxHeight: '620px' }}
              src="https://www.youtube.com/embed/PvTmxDBxtLs?si=F0K7je_VUJQQArca"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <h2 className="text-light display-1 fw-bold my-lg-5 mt-5 pt-lg-5 heading">STORY</h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <a href="https://en.wikipedia.org/wiki/Steve_Chen" target="_blank">
              <img 
                src={steveChen} 
                className="customcard img-fluid"
                alt="steve chen youtube co founder" 
              />
            </a>
          </div>
          <div className="col-lg-6">  
            <p className="text-light fs-3 fw-bold heading">WHO IS STEVE CHEN?</p>
            <p className="text-light fs-5">
              Steve Chen (Chinese: 陳士駿; Wade-Giles: Chen Shih-chün; born August 25, 1978) is a Taiwanese-born American Internet entrepreneur 
              who is one of the co-founders and previous chief technology officer of the American video-sharing website YouTube. After he co-founded 
              the company AVOS Systems, Inc. and built the video-sharing app MixBit,[1] he joined Google Ventures in 2014.[2]
            </p>
            <p className="text-light fs-5">
              In 2005 Steve Chen posted a video of his cat called Pajamas playing with a rope, making him the first person to upload a cat video to YouTube.
            </p>
            <p className="text-light fs-5">
              Pajamas is laying a unique foundation for a cat meme token as the first cat that has ever been uploaded to YouTube, capturing attention from 
              Billionaires, newcomers (aka normies) and crypto veterans/degens.
            </p>
            <a
              className="nav-link fs-5 fw-semibold custombutton text-light mt-4"
              href="https://en.wikipedia.org/wiki/Steve_Chen"
              target="_blank"
            >
              <span>
                Steve's Chen wikipedia profile
              </span>
            </a>
          </div>
        </div>
        <div className="row my-4 my-lg-5 g-4 align-items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <a 
              href="https://twitter.com/stevechen/status/1767184430500872246?t=kYuGN_cirt84a1h8qTsvLw&s=19"
              target="_Blank"
            >
              <img
                src={tweet1}
                className="img-fluid w-100 customcard"
                alt="tweet"
              />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <a 
              href="https://twitter.com/stevechen/status/1768227090191781953?t=vj8OoXqyC1It1I-q4_kVfA&s=19"
              target="_Blank"
            >
              <img
                src={tweet2}
                className="img-fluid w-100 customcard"
                alt="tweet"
              />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <a 
              href="https://twitter.com/stevechen/status/1767550759246364769?t=gTXHeYSd_qArmWVEgoj19Q&s=19"
              target="_blank"
            >
              <img
                src={tweet3}
                className="img-fluid w-100 customcard"
                alt="tweet"
              />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-12">
            <img
              src={meme2}
              className="img-fluid w-100 customcard"
              alt="meme"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img
              src={meme3}
              className="img-fluid w-100 customcard"
              alt="meme"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-8">
            <img
              src={meme4}
              className="img-fluid w-100 customcard"
              alt="meme"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
