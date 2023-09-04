import { PictureWithThumbnail } from "../../commonTypes"

export enum KeyboardKeyCodes {
    Escape = 27,
    RightArrow = 39,
    LeftArrow = 37,
}

export type FullPhotoPassedParams = {
    images: PictureWithThumbnail[],
    selectedPhotoIndex: number,
    onClose: Function
}