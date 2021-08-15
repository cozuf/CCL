import React, {FC, isValidElement, ReactNode, useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, IIconProps, Text} from '..';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

export interface IRadionButtonProps {
  selected?: boolean;
  title?: string;
  value: any;
  iconSet?: {
    selected: IIconProps | ReactNode;
    notSelected: IIconProps | ReactNode;
  };
  onSelect: (selected: boolean) => void;
}

const RadioButton: FC<IRadionButtonProps> = ({
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
      return null;
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
      style={[
        styles.container,
        {
          borderBottomColor: isDarkMode ? dark.secondary : light.secondary,
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
