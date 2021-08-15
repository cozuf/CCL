import {ColorShceme} from './type';

const BLACK = '#000000';
const WHITE = '#FFFFFF';
const TRANSPARENT = '#FFFFFF00';

// const TURQUAZ = '#33FFFF';
// const TURQUAZ_PALE = '#006666';
// const TURQUAZ_OPPOSITE = '#CC0000';

const ORANGE = '#FF6633';
const ORANGE_PALE = 'rgba(255, 102, 51,0.5)';
const ORANGE_OPPOSITE = '#0099CC';

const dark: ColorShceme = {
  primary: BLACK,
  secondary: WHITE,
  active: ORANGE,
  passive: ORANGE_PALE,
  pageBackground: BLACK,
  statusbar: BLACK,
  text: WHITE,
  textInputText: WHITE,
  textInputTextFocused: ORANGE,
  textInputBackground: BLACK,
  textInputBorder: WHITE,
  textInputFocused: ORANGE,
  buttonFilledBackground: ORANGE,
  buttonOutlinedBackground: BLACK,
  buttonSimpliedBackground: TRANSPARENT,
  buttonFilledText: BLACK,
  buttonOutlinedText: ORANGE,
  buttonSimpliedText: ORANGE,
  buttonFilledPressedText: WHITE,
  buttonOutlinedPressedText: ORANGE_OPPOSITE,
  buttonSimpliedPressedText: ORANGE_OPPOSITE,
  buttonFilledPressedBackgorund: ORANGE_OPPOSITE,
  buttonOutlinedPressedBackgorund: WHITE,
  buttonSimpliedPressedBackground: TRANSPARENT,
  buttonFilledBorder: ORANGE,
  buttonOutlinedBorder: ORANGE,
  buttonSimpliedBorder: TRANSPARENT,
  buttonFilledPressedBorder: ORANGE_OPPOSITE,
  buttonOutlinedPressedBorder: ORANGE_OPPOSITE,
  buttonSimpliedPressedBorder: TRANSPARENT,
  radioButtonActive: ORANGE,
  radioButtonPassive: ORANGE_PALE,
  checkBoxActive: ORANGE,
  checkBoxPassive: ORANGE_PALE,
  chipActive: ORANGE,
  chipPassive: ORANGE_PALE,
};

export default dark;
