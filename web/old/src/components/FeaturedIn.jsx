import React from 'react';
import coinpediaLogo from '../assets/coinpedia-logo.webp';
import binancelogo from '../assets/binancelogo.png';
import bitscreener from '../assets/bitscreener_logo.png';
import ihubMaster from '../assets/ihub-master-logo.png';
import investor_observer from '../assets/investor_observer.png';
import yahoofinance from '../assets/yahoo_finance_logo.png';
import businessInsider from '../assets/Business_Insider_Logo.png';
import tradingView from '../assets/TradingView.png';
import CoinStats_logo from '../assets/CoinStats_logo.svg';
import coinmarketcap from '../assets/CoinMarketCap.png';

const FeaturedIn = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <h2 className="text-light display-1 fw-bold mb-5 heading">FEATURED IN</h2>
      
        <div className="d-flex align-items-center justify-content-center flex-wrap py-5 gap-5 customcard" style={{ backgroundColor: '#557A95' }}>
          <div className="">
            <a 
              href="https://coinpedia.org/guest-post/pajamas-cat-the-first-cat-video-on-youtube-is-making-history/"
              target='_blank'
            >
              <img 
                src={coinpediaLogo} 
                alt="coinpedia" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://www.binance.com/en-IN/square/post/5407876318786"
              target='_blank'
            >
              <img 
                src={binancelogo} 
                alt="binance" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://ih.advfn.com/stock-market/stock-news/93499570/pajamas-cat-token-launches-a-historic-leap-from-y"
              target='_blank'
            >
              <img 
                src={ihubMaster} 
                alt="ihub master" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://www.tradingview.com/news/reuters.com,2024-03-15:newsml_GNX7xwbv0:0-pajamas-cat-token-launches-a-historic-leap-from-youtube-to-crypto-fame-in-2024/"
              target='_blank'
            >
              <img 
                src={tradingView} 
                alt="tradingView" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://finance.yahoo.com/news/pajamas-cat-token-launches-historic-230000633.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANNx5twhg1zDrwOEmbR5jWcUA8ncWI5hcda_FwAkUrlBj9kaEBHgA74vt0-4nudATwqxXqIiqicZTCeChnDF_zIJREXu74uTk3tFCALB8-RtGAVvyfBx-ofbVFBLhnLJXfofVpaDQ-5nhBg9CAIYe-lqv7cOhlR6Y2Tr53zk-QAD"
              target='_blank'
            >
              <img 
                src={yahoofinance} 
                alt="yahoo finance" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://coinstats.app/news/fe134c3ecc9f12ff48339e28121d37d7b10cbcb4aaece738ab0eb42bab5d4bab_Pajamas-Cat-%E2%80%93-The-First-Cat-Video-on-YouTube-Is-Making-History/"
              target='_blank'
            >
              <img 
                src={CoinStats_logo} 
                alt="CoinStats" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://www.investorsobserver.com/news/qm-pr/7666617800236244"
              target='_blank'
            >
              <img 
                src={investor_observer} 
                alt="investor observer" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://bitscreener.com/coins/the-first-youtube-cat/price-prediction"
              target='_blank'
            >
              <img 
                src={bitscreener} 
                alt="bitscreener" 
                className='img-fluid'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://markets.businessinsider.com/news/stocks/pajamas-cat-token-launches-a-historic-leap-from-youtube-to-crypto-fame-in-2024-1033169728"
              target='_blank'
            >
              <img 
                src={businessInsider} 
                alt="business insider" 
                className='img-fluid mt-5'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="">
            <a 
              href="https://coinmarketcap.com/community/articles/65f48575eef5dc2a1445ff36/"
              target='_blank'
            >
              <img 
                src={coinmarketcap} 
                alt="coinmarketcap" 
                className='img-fluid mt-4'
                style={{ width: '240px', height: 'auto' }}
              />
            </a>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default FeaturedIn;
