import React from 'react';

function Banner({ status, children, action }) {
  return <div className={`banner ${status}`}>
    {children}
    <button className="banner-cta" onClick={action}>Restart</button>
  </div>;
}

export default Banner;
