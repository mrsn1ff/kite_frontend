import React from 'react';
import Hero from './Hero';
import Price from './Price'
import Brokerage from './Brokerage';

import OpenAccount from '../OpenAccount';


function PricingPage() {
    return ( 
        <>
            <Hero/>
            <Price/>
            <OpenAccount/>
            <Brokerage/>
        </>
     );
}

export default PricingPage;