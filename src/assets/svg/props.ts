import { SvgProps } from "react-native-svg";

interface ISvgProps extends Omit<SvgProps, "color"> {
    /**
     * 
     */
    color?: keyof CCL.ColorScheme
}

export default ISvgProps