import React, {FC, isValidElement, useState} from 'react';
import {StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import {Icon, IIconProps, Text} from '..';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

export interface ICheckBoxProps {
  active: boolean;
  selected: boolean;
  title?: string;
  value?: any;
  iconSet?: {
    selected: IIconProps | React.ReactNode;
    notSelected: IIconProps | React.ReactNode;
  };
  onSelect?: (selected: boolean) => void;
}

const CheckBox: FC<ICheckBoxProps> = ({
  active = true,
  selected,
  title = `Check Box ${selected ? 1 : 0}`,
  value,
  iconSet,
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
          return <Icon {...coreIcon} />;
        }
      } else {
        if (isValidElement(iconSet.notSelected)) {
          return iconSet.notSelected;
        } else {
          const coreIcon = iconSet.notSelected as IIconProps;
          return <Icon {...coreIcon} />;
        }
      }
    } else {
      return (
        <View
          style={[
            styles.iconContainer,
            {
              borderColor: isDarkMode
                ? dark.checkBox[active ? 'active' : 'passive'].iconBorder
                : light.checkBox[active ? 'active' : 'passive'].iconBorder,
              backgroundColor: isSelected
                ? isDarkMode
                  ? dark.checkBox[active ? 'active' : 'passive'].iconBorder
                  : light.checkBox[active ? 'active' : 'passive'].iconBorder
                : 'transparent',
            },
          ]}>
          {isSelected ? (
            <Icon
              family="Feather"
              name="check"
              size={16}
              color={
                isDarkMode
                  ? dark.checkBox[active ? 'active' : 'passive'].icon
                  : light.checkBox[active ? 'active' : 'passive'].icon
              }
            />
          ) : null}
        </View>
      );
    }
  };

  const renderTitle = (): React.ReactElement | null => {
    if (title) {
      return <Text>{title}</Text>;
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity
      key={value}
      disabled={!active}
      style={[
        styles.container,
        {
          borderBottomColor: isDarkMode
            ? dark.checkBox[active ? 'active' : 'passive'].border
            : light.checkBox[active ? 'active' : 'passive'].border,
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

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: TOKENS.paddings.componentContainerVertical,
    paddingHorizontal: TOKENS.paddings.componentContainerVertical,
    borderBottomWidth: TOKENS.borders.radioButton,
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 4,
    minHeight: 24,
    minWidth: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
