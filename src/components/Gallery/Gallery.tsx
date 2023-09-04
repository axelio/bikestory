import React, { useEffect, useState } from 'react';

import './Gallery.css';
import { PictureWithThumbnail } from '../../commonTypes';
import FullPhoto from '../FullPhoto';

const Gallery: React.FC<{images: PictureWithThumbnail[]}> = ({images}) => {
    const [showFullPhoto, setShowFullPhoto] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(NaN);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const showPhoto = (index: number) => {
        setPhotoIndex(index)
        setShowFullPhoto(true);
    }

    const closePhoto = () => {
        setShowFullPhoto(false);
        setPhotoIndex(NaN);
    }

    return (
        <>
            <div className='photos'>
                {images.map((image, index) =>
                    <div key={index} className='thumbnail' onClick={() => showPhoto(index)}>
                        <img src={image.thumbnail} alt="" />
                    </div>
                )}
            </div>
            {showFullPhoto && <FullPhoto images={images} selectedPhotoIndex={photoIndex} onClose={() => closePhoto()} />}
        </>
    );
}

export default Gallery;