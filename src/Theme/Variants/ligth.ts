import {
  BadgeColorScheme,
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
import {
  BLACK,
  BLACK_PALE,
  OPEN_BLUE,
  OPEN_BLUE_OPPOSITE,
  OPEN_BLUE_PALE,
  TRANSPARENT,
  WHITE,
  WHITE_PALE,
} from './palette';

const common: CommonColorScheme = {
  primary: WHITE,
  secondary: BLACK,
  active: OPEN_BLUE,
  passive: OPEN_BLUE_PALE,
  statusbar: WHITE,
};

const pageContainer: PageContainerColorScheme = {
  background: WHITE,
};

const text: TextColorScheme = {
  active: BLACK,
  passive: BLACK_PALE,
};

const icon: IconColorScheme = {
  active: OPEN_BLUE,
  passive: OPEN_BLUE_PALE,
};

const textInput: TextInputColorScheme = {
  active: {
    titleText: BLACK,
    inputText: BLACK,
    border: BLACK,
    background: WHITE,
  },
  passive: {
    titleText: BLACK_PALE,
    inputText: BLACK_PALE,
    border: BLACK_PALE,
    background: WHITE_PALE,
  },
  focused: {
    titleText: OPEN_BLUE,
    inputText: BLACK,
    border: OPEN_BLUE,
    background: WHITE,
  },
};

const button: ButtonColorScheme = {
  active: {
    normal: {
      filled: {
        background: OPEN_BLUE,
        text: WHITE,
        border: OPEN_BLUE,
      },
      outlined: {
        background: WHITE,
        text: OPEN_BLUE,
        border: OPEN_BLUE,
      },
      simplied: {
        background: TRANSPARENT,
        text: OPEN_BLUE,
        border: TRANSPARENT,
      },
    },
    pressed: {
      filled: {
        background: OPEN_BLUE_OPPOSITE,
        text: WHITE,
        border: OPEN_BLUE_OPPOSITE,
      },
      outlined: {
        background: WHITE,
        text: OPEN_BLUE_OPPOSITE,
        border: OPEN_BLUE_OPPOSITE,
      },
      simplied: {
        background: TRANSPARENT,
        text: OPEN_BLUE_OPPOSITE,
        border: TRANSPARENT,
      },
    },
  },
  passive: {
    normal: {
      filled: {
        background: OPEN_BLUE_PALE,
        text: BLACK_PALE,
        border: OPEN_BLUE_PALE,
      },
      outlined: {
        background: WHITE_PALE,
        text: OPEN_BLUE_PALE,
        border: OPEN_BLUE_PALE,
      },
      simplied: {
        background: TRANSPARENT,
        text: OPEN_BLUE_PALE,
        border: TRANSPARENT,
      },
    },
    pressed: {
      filled: {
        background: OPEN_BLUE_OPPOSITE,
        text: WHITE,
        border: OPEN_BLUE_OPPOSITE,
      },
      outlined: {
        background: WHITE,
        text: OPEN_BLUE_OPPOSITE,
        border: OPEN_BLUE_OPPOSITE,
      },
      simplied: {
        background: TRANSPARENT,
        text: OPEN_BLUE_OPPOSITE,
        border: TRANSPARENT,
      },
    },
  },
};

const radioButton: RadioButtonColorScheme = {
  active: {
    text: BLACK,
    background: WHITE,
    border: BLACK,
    icon: OPEN_BLUE,
  },
  passive: {
    text: BLACK_PALE,
    background: WHITE_PALE,
    border: BLACK_PALE,
    icon: OPEN_BLUE_PALE,
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
    text: BLACK,
    background: WHITE,
    border: BLACK,
    icon: WHITE,
    iconBorder: OPEN_BLUE,
  },
  passive: {
    text: BLACK_PALE,
    background: WHITE_PALE,
    border: BLACK_PALE,
    icon: WHITE_PALE,
    iconBorder: OPEN_BLUE_PALE,
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
    text: BLACK,
    background: WHITE,
    border: BLACK,
    icon: OPEN_BLUE,
  },
  passive: {
    text: BLACK_PALE,
    background: WHITE_PALE,
    border: BLACK_PALE,
    icon: OPEN_BLUE_PALE,
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

const badge: BadgeColorScheme = {
  background: WHITE,
  border: BLACK,
  text: OPEN_BLUE,
  shadow: BLACK,
};

const light: ColorShceme = {
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
  badge,
};

export default light;
