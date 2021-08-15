import {ColorShceme} from './type';

const BLACK = '#000000';
const WHITE = '#FFFFFF';
const TRANSPARENT = '#FFFFFF00';

// const RED = '#CC0000';
// const RED_PALE = '#FF9999';
// const RED_OPPOSITE = '#33FFFF';

const OPEN_BLUE = '#0099CC';
const OPEN_BLUE_PALE = '#004D66';
const OPEN_BLUE_OPPOSITE = '#FF6633';

const light: ColorShceme = {
  primary: WHITE,
  secondary: BLACK,
  active: OPEN_BLUE,
  passive: OPEN_BLUE_PALE,
  pageBackground: WHITE,
  statusbar: WHITE,
  textInputBackground: WHITE,
  textInputBorder: WHITE,
  textInputFocused: OPEN_BLUE,
  text: BLACK,
  buttonFilledBackground: OPEN_BLUE,
  buttonOutlinedBackground: WHITE,
  buttonSimpliedBackground: TRANSPARENT,
  buttonFilledText: WHITE,
  buttonOutlinedText: OPEN_BLUE,
  buttonSimpliedText: OPEN_BLUE,
  buttonFilledPressedText: BLACK,
  buttonOutlinedPressedText: OPEN_BLUE_OPPOSITE,
  buttonSimpliedPressedText: OPEN_BLUE_OPPOSITE,
  buttonFilledPressedBackgorund: OPEN_BLUE_OPPOSITE,
  buttonOutlinedPressedBackgorund: BLACK,
  buttonSimpliedPressedBackground: TRANSPARENT,
  buttonFilledBorder: OPEN_BLUE,
  buttonOutlinedBorder: OPEN_BLUE,
  buttonSimpliedBorder: TRANSPARENT,
  buttonFilledPressedBorder: OPEN_BLUE_OPPOSITE,
  buttonOutlinedPressedBorder: OPEN_BLUE_OPPOSITE,
  buttonSimpliedPressedBorder: TRANSPARENT,
  radioButtonActive: OPEN_BLUE,
  radioButtonPassive: OPEN_BLUE_PALE,
  checkBoxActive: OPEN_BLUE,
  checkBoxPassive: OPEN_BLUE_PALE,
  chipActive: OPEN_BLUE,
  chipPassive: OPEN_BLUE_PALE,
};

export default light;
