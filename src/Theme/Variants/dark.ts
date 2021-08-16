import {
  BLACK,
  BLACK_PALE,
  ORANGE,
  ORANGE_OPPOSITE,
  ORANGE_PALE,
  TRANSPARENT,
  WHITE,
  WHITE_PALE,
} from './palette';
import {
  ButtonColorScheme,
  CheckBoxColorScheme,
  CheckBoxGroupColorScheme,
  ChipColorScheme,
  ChipGroupColorScheme,
  ColorShceme,
  CommonColorScheme,
  IconColorScheme,
  PageContainerColorScheme,
  RadioButtonColorScheme,
  RadioButtonGroupColorScheme,
  TextColorScheme,
  TextInputColorScheme,
} from './type';

const common: CommonColorScheme = {
  primary: BLACK,
  secondary: WHITE,
  active: ORANGE,
  passive: ORANGE_PALE,
  statusbar: BLACK,
};

const pageContainer: PageContainerColorScheme = {
  background: BLACK,
};

const text: TextColorScheme = {
  active: WHITE,
  passive: WHITE_PALE,
};

const icon: IconColorScheme = {
  active: WHITE,
  passive: WHITE_PALE,
};

const textInput: TextInputColorScheme = {
  active: {
    inputText: WHITE,
    titleText: WHITE,
    border: WHITE,
    background: BLACK,
  },
  passive: {
    inputText: WHITE_PALE,
    titleText: WHITE_PALE,
    border: WHITE_PALE,
    background: BLACK_PALE,
  },
  focused: {
    inputText: WHITE,
    titleText: ORANGE,
    border: ORANGE,
    background: BLACK,
  },
};

const button: ButtonColorScheme = {
  active: {
    normal: {
      filled: {
        background: ORANGE,
        text: BLACK,
        border: ORANGE,
      },
      outlined: {
        background: BLACK,
        text: ORANGE,
        border: ORANGE,
      },
      simplied: {
        background: TRANSPARENT,
        text: ORANGE,
        border: TRANSPARENT,
      },
    },
    pressed: {
      filled: {
        background: ORANGE_OPPOSITE,
        text: WHITE,
        border: ORANGE_OPPOSITE,
      },
      outlined: {
        background: WHITE,
        text: ORANGE_OPPOSITE,
        border: ORANGE_OPPOSITE,
      },
      simplied: {
        background: TRANSPARENT,
        text: ORANGE_OPPOSITE,
        border: TRANSPARENT,
      },
    },
  },
  passive: {
    normal: {
      filled: {
        background: ORANGE_PALE,
        text: BLACK_PALE,
        border: ORANGE_PALE,
      },
      outlined: {
        background: BLACK_PALE,
        text: ORANGE_PALE,
        border: ORANGE_PALE,
      },
      simplied: {
        background: TRANSPARENT,
        text: ORANGE_PALE,
        border: TRANSPARENT,
      },
    },
    pressed: {
      filled: {
        background: ORANGE_OPPOSITE,
        text: WHITE,
        border: ORANGE_OPPOSITE,
      },
      outlined: {
        background: WHITE,
        text: ORANGE_OPPOSITE,
        border: ORANGE_OPPOSITE,
      },
      simplied: {
        background: TRANSPARENT,
        text: ORANGE_OPPOSITE,
        border: TRANSPARENT,
      },
    },
  },
};

const radioButton: RadioButtonColorScheme = {
  active: {
    text: WHITE,
    background: BLACK,
    border: BLACK,
    icon: ORANGE,
  },
  passive: {
    text: WHITE_PALE,
    background: BLACK_PALE,
    border: BLACK_PALE,
    icon: ORANGE_PALE,
  },
};

const radioButtonGroup: RadioButtonGroupColorScheme = {
  active: {
    background: BLACK,
  },
  passive: {
    background: BLACK_PALE,
  },
};

const checkBox: CheckBoxColorScheme = {
  active: {
    text: WHITE,
    background: BLACK,
    border: BLACK,
    icon: ORANGE,
  },
  passive: {
    text: WHITE_PALE,
    background: BLACK_PALE,
    border: BLACK_PALE,
    icon: ORANGE_PALE,
  },
};

const checkBoxGroup: CheckBoxGroupColorScheme = {
  active: {
    background: BLACK,
  },
  passive: {
    background: BLACK_PALE,
  },
};

const chip: ChipColorScheme = {
  active: {
    text: WHITE,
    background: BLACK,
    border: BLACK,
    icon: ORANGE,
  },
  passive: {
    text: WHITE_PALE,
    background: BLACK_PALE,
    border: BLACK_PALE,
    icon: ORANGE_PALE,
  },
};

const chipGroup: ChipGroupColorScheme = {
  active: {
    background: BLACK,
  },
  passive: {
    background: BLACK_PALE,
  },
};

const dark: ColorShceme = {
  common,
  pageContainer,
  text,
  icon,
  textInput,
  button,
  radioButton,
  radioButtonGroup,
  checkBox,
  checkBoxGroup,
  chip,
  chipGroup,
};

export default dark;
