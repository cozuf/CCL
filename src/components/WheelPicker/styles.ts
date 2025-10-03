import { StyleSheet } from "react-native";
import { ITEM_HEIGHT, PICKER_HEIGHT, VISIBLE_ITEMS } from "./constants";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: ITEM_HEIGHT * VISIBLE_ITEMS
    },
    flatlist: {
        height: PICKER_HEIGHT,
        width: "100%"
    },
    flatlistContent: {
        paddingVertical: (PICKER_HEIGHT - ITEM_HEIGHT) * 0.5,
    },
    item: {
        height: ITEM_HEIGHT,
        justifyContent: "center",
        alignItems: "center"
    },
    highlight: {
        position: "absolute",
        top: "50%",
        transform: [{ translateY: -ITEM_HEIGHT * 0.5 }],
        height: ITEM_HEIGHT,
        width: "100%",
        opacity: 0.05,
        borderRadius: 8,
        zIndex: 2,
    },
});