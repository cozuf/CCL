import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PAGE_NAMES from "./pageNames"
import PAGES from "./pages"
import { useTheme, CCL_PAGE_NAMES, CCL_PAGES } from "../../src"

const Stack = createNativeStackNavigator()

const Router = () => {
    const { fonts } = useTheme()
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "ios",
                headerTitleStyle: { fontFamily: fonts.bold },
                headerBackTitleStyle: { fontFamily: fonts.semibold }
            }}>
            <Stack.Screen name={PAGE_NAMES.MAIN} component={PAGES.Main} />
            <Stack.Screen name={PAGE_NAMES.BADGE} component={PAGES.Badge} />
            <Stack.Screen name={PAGE_NAMES.BUTTON} component={PAGES.Button} />
            <Stack.Screen name={PAGE_NAMES.BOTTOMSHEET} component={PAGES.BottomSheet} />
            <Stack.Screen name={PAGE_NAMES.CARD} component={PAGES.Card} />
            <Stack.Screen name={PAGE_NAMES.CHECKBOX} component={PAGES.CheckBox} />
            <Stack.Screen name={PAGE_NAMES.CHECKBOXGROUP} component={PAGES.CheckBoxGroup} />
            <Stack.Screen name={PAGE_NAMES.CHIP} component={PAGES.Chip} />
            <Stack.Screen name={PAGE_NAMES.CHIPGROUP} component={PAGES.ChipGroup} />
            <Stack.Screen name={PAGE_NAMES.DIVIDER} component={PAGES.Divider} />
            <Stack.Screen name={PAGE_NAMES.MODAL} component={PAGES.Modal} />
            <Stack.Screen name={PAGE_NAMES.PAGECONTAINER} component={PAGES.PageContainer} />
            <Stack.Screen name={PAGE_NAMES.RADIOBUTTON} component={PAGES.RadioButton} />
            <Stack.Screen name={PAGE_NAMES.RADIOBUTTONGROUP} component={PAGES.RadioButtonGroup} />
            <Stack.Screen name={PAGE_NAMES.SEGMENTEDBUTTON} component={PAGES.SegmentedButton} />
            <Stack.Screen name={PAGE_NAMES.SELECTBOX} component={PAGES.SelectBox} />
            <Stack.Screen name={PAGE_NAMES.SEPARATOR} component={PAGES.Separator} />
            <Stack.Screen name={PAGE_NAMES.SNACKBAR} component={PAGES.SnackBar} />
            <Stack.Screen name={PAGE_NAMES.TAPSELECTOR} component={PAGES.TapSelector} />
            <Stack.Screen name={PAGE_NAMES.TEXT} component={PAGES.Text} />
            <Stack.Screen name={PAGE_NAMES.TEXTINPUT} component={PAGES.TextInput} />

            <Stack.Screen name={CCL_PAGE_NAMES.SELECT_BOX_PAGE} component={CCL_PAGES.SelectBoxPage} />
        </Stack.Navigator>
    )
}

export default Router