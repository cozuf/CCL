import React, {FC, useState} from 'react';
import {Omit, StyleSheet, TouchableOpacity} from 'react-native';
import RNDatePicker, {DatePickerProps} from 'react-native-date-picker';
import {Button, Modal, Text} from '..';
import {useThemeContext} from '../../Context/ThemeContext';

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

  onSubmit?: (date: Date) => void;
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
  const [visible, setVisible] = useState<boolean>(false);
  const [theme] = useThemeContext();
  const {dateTimePicker} = theme.colors;

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
      <Modal.Default
        visible={visible}
        onTouchOutSide={() => {
          setVisible(false);
        }}
        containerStyle={{alignItems: 'center'}}>
        <RNDatePicker
          date={date}
          onDateChange={onDateChange}
          mode={mode}
          textColor={dateTimePicker.active.pickerText as string}
          {...props}
        />
        {renderSubmit()}
      </Modal.Default>
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
          backgroundColor:
            dateTimePicker[active ? 'active' : 'passive'].background,
          borderColor: dateTimePicker[active ? 'active' : 'passive'].border,
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

// TODO: android dark theme düzenle
