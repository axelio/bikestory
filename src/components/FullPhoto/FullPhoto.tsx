import React, { useState, useEffect } from 'react';
import { faTimesCircle, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwipeable } from 'react-swipeable'

import './FullPhoto.css';
import { KeyboardKeyCodes, FullPhotoPassedParams } from './types';

const FullPhoto: React.FC<FullPhotoPassedParams> = ({ images, selectedPhotoIndex, onClose }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(selectedPhotoIndex);
    const [showButtons, setShowButtons] = useState(true);
    const [useSmallPhoto, setUseSmallPhoto] = useState(window.innerWidth < 768);

    const showNextPicture = () => {
        const isLastPhoto = currentPhotoIndex === photos.length - 1;
        isLastPhoto ? setCurrentPhotoIndex(0) : setCurrentPhotoIndex(prevCurrentPhotoIndex => prevCurrentPhotoIndex + 1);
    }

    const showPreviousPicture = () => {
        const isFirstPhoto = currentPhotoIndex === 0;
        isFirstPhoto ? setCurrentPhotoIndex(photos.length - 1) : setCurrentPhotoIndex(prevCurrentPhotoIndex => prevCurrentPhotoIndex - 1);
    }

    const handlers = useSwipeable({
        onSwipedLeft: showNextPicture,
        onSwipedRight: showPreviousPicture
    });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile && document.fullscreenEnabled && !document.fullscreenElement)
            document.documentElement.requestFullscreen();
    }, []);

    const handleKeyPress = (event: any) => {
        switch (event.keyCode) {
            case KeyboardKeyCodes.Escape:
                closeFullPhoto();
                break;
            case KeyboardKeyCodes.LeftArrow:
                showPreviousPicture();
                break;
            case KeyboardKeyCodes.RightArrow:
                showNextPicture();
                break;
        }
    }

    const handleWindowResize = () => setUseSmallPhoto(window.innerWidth < 768);

    const photos = images.map(i => i.photo);
    const photo = photos[currentPhotoIndex];

    const onPhotoClicked = () => setShowButtons(prevShowButtons => !prevShowButtons);

    const closeFullPhoto = () => {
        if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen();
        onClose();
    };

    return (
        <div {...handlers}>
            <div className='photo-wrapper' id='photo-wrapper'>
                <div className='close-space' onClick={closeFullPhoto}></div>
                <img src={useSmallPhoto ? photo.mobile : photo.desktop} className='photo' onClick={onPhotoClicked} alt="" />

                {showButtons &&
                    <div>
                        <div className='btn quitBtn' onClick={closeFullPhoto}>
                            <FontAwesomeIcon icon={faTimesCircle} size={"3x"} />
                        </div>
                        <div className='btn leftBtn' onClick={showPreviousPicture}>
                            <FontAwesomeIcon icon={faChevronCircleLeft} size={"3x"} />
                        </div>
                        <div className='btn rightBtn' onClick={showNextPicture}>
                            <FontAwesomeIcon icon={faChevronCircleRight} size={"3x"} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default FullPhoto;