import React from 'react';
import Chapter2020 from './chapter 2020_rannovisuals.webp';
import ShipPicture from './ship_rannovisuals.webp';
import NightTimeRyytli from './ryytlit2navAtNight_rannovisuals.webp';

const Work = () => {
  return <div id="MyWorkPage">
    <h1 className="MyWorkText">MY WORK</h1>
    <div className="portfolio-wrapper">
      <iframe width={420} height={236} src="https://www.youtube.com/embed/1dfDaDsjokw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/561713338?h=1f38e8965b" width={420} height={236} frameBorder={0} allowFullScreen />
      <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/568851715?h=3e505806ee" width={420} height={236} frameBorder={0} allowFullScreen />
      <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/561713945?h=eb29f1f9ce" width={420} height={236} frameBorder={0} allowFullScreen />
      <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/345452684?h=a5564e3d08" width={420} height={236} frameBorder={0} allowFullScreen />
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/224991708?h=95fb3b43dd" width={420} height={236} frameBorder={0} allowFullScreen />
    </div>
    <h1>PICTURES</h1>
    <div className="pictures-wrapper">
      <img src={Chapter2020} alt="Chapter 2020 - Rannovisuals Poster" width={532} height={600} />
      <img src={ShipPicture} alt="HARA Sadam - Rannovisuals" width={403} height={600} />
      <img src={NightTimeRyytli} alt="Night Time Ryytli Street - Rannovisuals" width={908} height={600} />
    </div>  
  </div>;
};

export default Work;
