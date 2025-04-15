import React from 'react'; // eslint-disable-line no-unused-vars
import BrandStartUpFooter from './BrandStartUp/BrandStartUpFooter';
import BransStartupHeader from './BrandStartUp/BransStartupHeader';
import IntroduceBrand from '../components/IntroduceBrand';

const BrandStartUp = () => {
  return (
    <>
      <BransStartupHeader />
      <IntroduceBrand />
      <BrandStartUpFooter />
    </>
  );
};

export default BrandStartUp;
