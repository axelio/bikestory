import React from 'react';
import Header from '../Header';
import OdraNysaText from './Text';
import Gallery from '../Gallery';
import images from './images';
import header from './images/header';

const OdraNysa: React.FC = () => {
    return (
        <>
            <Header image={header} title={"Odra-Nysa i R10"} showHome={false} />
            <OdraNysaText />
            <Gallery images={images} />
        </>
    );
}

export default OdraNysa