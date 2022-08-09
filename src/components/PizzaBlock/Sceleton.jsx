import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="89" cy="82" r="81" />
    <rect x="6" y="182" rx="0" ry="0" width="162" height="45" />
    <rect x="8" y="241" rx="0" ry="0" width="162" height="45" />
  </ContentLoader>
);

export default Sceleton;
