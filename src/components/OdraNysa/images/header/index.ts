import slonecznikiDesktop from './sloneczniki-desktop.jpg';
import slonecznikiPhone from './sloneczniki-phone.jpg';

const isPhone = window.innerWidth < 768;

const header = isPhone ? slonecznikiPhone : slonecznikiDesktop;

export default header;