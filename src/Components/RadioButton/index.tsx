import React, {FC, isValidElement, ReactNode, useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, IIconProps, Text} from '..';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

export interface IRadionButtonProps {
  /**
   *@default true
   */
  active?: boolean;

  /**
   * @default false
   */
  selected: boolean;

  /**
   * to show value
   */
  title?: string;

  /**
   * unique value
   */
  value?: any;

  /**
   *
   */
  iconSet?: {
    selected: IIconProps | ReactNode;
    notSelected: IIconProps | ReactNode;
  };

  /**
   * invokes select the item
   */
  onSelect: (selected: boolean) => void;
}

const RadioButton: FC<IRadionButtonProps> = ({
  active = true,
  selected = false,
  title = `Radio Button ${selected ? 1 : 0}`,
  value = 'Radion Button',
  iconSet = {
    selected: {
      family: 'MaterialIcons',
      name: 'radio-button-on',
      size: 24,
    },
    notSelected: {
      family: 'MaterialIcons',
      name: 'radio-button-off',
      size: 24,
    },
  },
  onSelect,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  const isDarkMode = useColorScheme() === 'dark';

  const renderIcon = (): React.ReactElement | null => {
    if (iconSet) {
      if (selected) {
        if (isValidElement(iconSet.selected)) {
          return iconSet.selected;
        } else {
          const coreIcon = iconSet.selected as IIconProps;
          const ICON_COLOR = isDarkMode
            ? dark.radioButton[active ? 'active' : 'passive'].icon
            : light.radioButton[active ? 'active' : 'passive'].icon;
          return <Icon {...coreIcon} color={ICON_COLOR} />;
        }
      } else {
        if (isValidElement(iconSet.notSelected)) {
          return iconSet.notSelected;
        } else {
          const coreIcon = iconSet.notSelected as IIconProps;
          const ICON_COLOR = isDarkMode
            ? dark.radioButton[active ? 'active' : 'passive'].icon
            : light.radioButton[active ? 'active' : 'passive'].icon;
          return <Icon {...coreIcon} color={ICON_COLOR} />;
        }
      }
    } else {
      return null;
    }
  };

  const renderTitle = (): React.ReactElement | null => {
    if (title) {
      const TEXT_COLOR = isDarkMode
        ? dark.radioButton[active ? 'active' : 'passive'].text
        : light.radioButton[active ? 'active' : 'passive'].text;
      return <Text style={{color: TEXT_COLOR}}>{title}</Text>;
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity
      disabled={!active}
      key={value}
      style={[
        styles.container,
        {
          borderBottomColor: isDarkMode
            ? dark.radioButton[active ? 'active' : 'passive'].border
            : light.radioButton[active ? 'active' : 'passive'].border,
        },
      ]}
      onPress={() => {
        setIsSelected(!isSelected);
        if (typeof onSelect === 'function') {
          onSelect(!isSelected);
        }
      }}>
      {renderIcon()}
      {renderIcon() !== null ? (
        <View style={{width: TOKENS.paddings.componentContainerVertical}} />
      ) : null}
      {renderTitle()}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: TOKENS.paddings.componentContainerVertical,
    paddingHorizontal: TOKENS.paddings.componentContainerVertical,
    borderBottomWidth: TOKENS.borders.radioButton,
  },
});
