import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PAGE_NAMES from "./pageNames"
import PAGES from "./pages"
import { useTheme, CCL_PAGE_NAMES, CCL_PAGES, withErrorBoundary } from "../../src"

const Stack = createNativeStackNavigator()

const Router = () => {
    const { fonts } = useTheme()
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "ios_from_right",
                headerTitleStyle: { fontFamily: fonts.bold },
                headerBackTitleStyle: { fontFamily: fonts.semibold }
            }}>
            <Stack.Screen name={PAGE_NAMES.MAIN} component={PAGES.Main} />
            <Stack.Screen name={PAGE_NAMES.BADGE} component={PAGES.Badge} />
            <Stack.Screen name={PAGE_NAMES.BUTTON} component={PAGES.Button} />
            <Stack.Screen name={PAGE_NAMES.BOTTOM_SHEET} component={PAGES.BottomSheet} />
            <Stack.Screen name={PAGE_NAMES.CARD} component={PAGES.Card} />
            <Stack.Screen name={PAGE_NAMES.CHAT} component={PAGES.Chat} />
            <Stack.Screen name={PAGE_NAMES.CHECK_BOX} component={PAGES.CheckBox} />
            <Stack.Screen name={PAGE_NAMES.CHECK_BOX_GROUP} component={PAGES.CheckBoxGroup} />
            <Stack.Screen name={PAGE_NAMES.CHIP} component={PAGES.Chip} />
            <Stack.Screen name={PAGE_NAMES.CHIP_GROUP} component={PAGES.ChipGroup} />
            <Stack.Screen name={PAGE_NAMES.DATE_TIME_PICKER} component={PAGES.DateTimePicker} />
            <Stack.Screen name={PAGE_NAMES.DIVIDER} component={PAGES.Divider} />
            <Stack.Screen name={PAGE_NAMES.MODAL} component={withErrorBoundary(PAGES.Modal)} />
            <Stack.Screen name={PAGE_NAMES.PAGE_CONTAINER} component={PAGES.PageContainer} />
            <Stack.Screen name={PAGE_NAMES.PICKER_BOX} component={PAGES.PickerBox} />
            <Stack.Screen name={PAGE_NAMES.RADIO_BUTTON} component={PAGES.RadioButton} />
            <Stack.Screen name={PAGE_NAMES.RADIO_BUTTON_GROUP} component={PAGES.RadioButtonGroup} />
            <Stack.Screen name={PAGE_NAMES.SEGMENTED_BUTTON} component={PAGES.SegmentedButton} />
            <Stack.Screen name={PAGE_NAMES.SELECT_BOX} component={PAGES.SelectBox} />
            <Stack.Screen name={PAGE_NAMES.SEPARATOR} component={PAGES.Separator} />
            <Stack.Screen name={PAGE_NAMES.SNACK_BAR} component={PAGES.SnackBar} />
            <Stack.Screen name={PAGE_NAMES.TAP_SELECTOR} component={PAGES.TapSelector} />
            <Stack.Screen name={PAGE_NAMES.TEXT} component={PAGES.Text} />
            <Stack.Screen name={PAGE_NAMES.TEXT_INPUT} component={PAGES.TextInput} />
            <Stack.Screen name={PAGE_NAMES.WHEEL_PICKER} component={PAGES.WheelPicker} />

            <Stack.Screen name={CCL_PAGE_NAMES.SELECT_BOX_PAGE} component={CCL_PAGES.SelectBoxPage} />
        </Stack.Navigator>
    )
}

export default Router