import React, {FC, useState} from 'react';
import {Omit, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import RNDatePicker, {DatePickerProps} from 'react-native-date-picker';
import {Button, Modal, Text} from '..';
import {dark, light} from '../../Theme/Variants';

export interface IDateTimePickerProps {
  active?: boolean;
  /**
   *
   */
  display?: 'Modal';

  /**
   *
   */
  title?: string;

  /**
   * The currently selected date.
   */
  date?: Date;

  /**
   * The date picker mode.
   */
  mode?: 'date' | 'time' | 'datetime';

  /**
   * Date change handler.
   *
   * This is called when the user changes the date or time in the UI.
   * The first and only argument is a Date object representing the new
   * date and time.
   */
  onDateChange: (date: Date) => void;

  onSubmit: (date: Date) => void;
}

type IDateTimePickerTypes = IDateTimePickerProps &
  Omit<DatePickerProps, 'date' | 'mode' | 'onDateChange'>;

const DateTimePicker: FC<IDateTimePickerTypes> = ({
  active = true,
  title = 'Başlık',
  date = new Date(),
  display = 'Modal',
  mode = 'datetime',
  onDateChange = () => {},
  onSubmit = () => {},
  ...props
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = useState<boolean>(false);

  const renderSubmit = () => {
    return (
      <Button
        onPress={() => {
          onSubmit(date);
          setVisible(false);
        }}
      />
    );
  };

  const renderModal = () => {
    return (
      <Modal
        visible={visible}
        onTouchOutSide={() => {
          setVisible(false);
        }}
        containerStyle={{alignItems: 'center'}}>
        <RNDatePicker
          date={date}
          onDateChange={onDateChange}
          mode={mode}
          textColor={
            isDarkMode
              ? (dark.dateTimePicker.active.pickerText as string)
              : (light.dateTimePicker.active.pickerText as string)
          }
          {...props}
        />
        {renderSubmit()}
      </Modal>
    );
  };

  const onPress = () => {
    switch (display) {
      case 'Modal':
        setVisible(true);
        break;
    }
  };
  return (
    <TouchableOpacity
      disabled={!active}
      onPress={onPress}
      style={[
        {
          backgroundColor: isDarkMode
            ? dark.dateTimePicker[active ? 'active' : 'passive'].background
            : light.dateTimePicker[active ? 'active' : 'passive'].background,
          borderColor: isDarkMode
            ? dark.dateTimePicker[active ? 'active' : 'passive'].border
            : light.dateTimePicker[active ? 'active' : 'passive'].border,
        },
        styles.container,
      ]}>
      <Text>{title}</Text>
      <Text>{date.toDateString()}</Text>
      {renderModal()}
    </TouchableOpacity>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
