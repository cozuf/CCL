import React, {FC} from 'react';
import {Text as NativeText, TextProps as NativeTextProps} from 'react-native';
interface ITextProps {}

const Text: FC<ITextProps & NativeTextProps> = ({children, ...props}) => {
  return <NativeText {...props}>{children}</NativeText>;
};

export default Text;
