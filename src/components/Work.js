import React from 'react';

const Work = () => {
  return <div id="MAIN">
  <h1 className="MyWorkText">MY WORK</h1>
  <div className="portfolio-wrapper">
    <iframe width={420} height={236} src="https://www.youtube.com/embed/1dfDaDsjokw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/561713338?h=1f38e8965b" width={420} height={236} frameBorder={0} allowFullScreen />
    <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/568851715?h=3e505806ee" width={420} height={236} frameBorder={0} allowFullScreen />
    <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/561713945?h=eb29f1f9ce" width={420} height={236} frameBorder={0} allowFullScreen />
    <iframe title="vimeo-player" style={{border: '1px solid black'}} src="https://player.vimeo.com/video/345452684?h=a5564e3d08" width={420} height={236} frameBorder={0} allowFullScreen />
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/224991708?h=95fb3b43dd" width={420} height={236} frameBorder={0} allowFullScreen />
  </div>
  </div>;
};

export default Work;
