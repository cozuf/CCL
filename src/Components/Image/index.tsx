import React, {FC, useEffect, useState} from 'react';
import {
  Image as NativeImage,
  ImageProps,
  ImageSourcePropType,
  ImageURISource,
  Omit,
} from 'react-native';

export interface IImageProps {
  source: ImageSourcePropType;
}

type IImageTypes = IImageProps & Omit<ImageProps, 'source'>;

const Image: FC<IImageTypes> = ({source, ...props}) => {
  const [imageSource, setImageSource] = useState<ImageSourcePropType>(
    ...props.defaultSource,
  );
  useEffect(() => {
    if ((source as ImageURISource).uri) {
      NativeImage.getSize(
        source.uri,
        (width: number, height: number) => {},
        error => {
          console.warn(`Image is not Loaded \n reason:${error}`);
        },
      );
    }
  }, []);
  return <NativeImage source={imageSource} defaultSource {...props} />;
};

export default Image;
