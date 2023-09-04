import { PictureWithThumbnail } from "../../../commonTypes";
import * as thumbnails from './thumbnails';
import * as desktopPhotos from './desktop';
import * as mobilePhotos from './mobile';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img2, photo: { desktop: desktopPhotos.img2, mobile: mobilePhotos.img2 } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3 } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4 } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5 } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6 } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7 } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8 } },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9 } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11 } },
    { thumbnail: thumbnails.img12, photo: { desktop: desktopPhotos.img12, mobile: mobilePhotos.img12 } },
    { thumbnail: thumbnails.img13, photo: { desktop: desktopPhotos.img13, mobile: mobilePhotos.img13 } },
]

export default images;