import React, { FC, Fragment } from "react"
import { ActivityIndicator, FlatList, KeyboardAvoidingView, Platform, RefreshControl, ScrollView, useWindowDimensions, View } from "react-native"
import IChatProps from "./props"
import { Separator } from "../Separator"
import { Text } from "../Text"
import { TextInput } from "../TextInput"
import { ChevronUpIcon, CloseIcon } from "../../assets"
import { useTheme } from "../../context"
import { isIOS } from "../../utils"

const Chat: FC<IChatProps> = () => {

    const { width } = useWindowDimensions()
    const { colors } = useTheme()

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={isIOS ? "padding" : undefined} keyboardVerticalOffset={isIOS ? 100 : 80} >
            <FlatList
                data={MESSAGES}
                style={{ transform: [{ rotateX: "180deg" }] }}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item, index }) => (
                    <View>
                        <View
                            style={{
                                alignItems: item.user.id === 1 ? "flex-end" : "flex-start",
                            }}>
                            <View style={
                                {
                                    maxWidth: width * 0.8,
                                    backgroundColor: colors.card,
                                    transform: [{ rotateX: "180deg" }],
                                    justifyContent: "center",
                                    borderRadius: 8,
                                    paddingHorizontal: 8,
                                    padding: 4
                                }
                            }
                            >
                                <Text fontFamily="medium" fontSize={16}>
                                    {item.message}
                                </Text>
                                <View
                                    style={{
                                        alignItems: item.user.id === 1 ? "flex-end" : "flex-start",
                                    }}>
                                    <Text>
                                        12:24
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {
                            index === (MESSAGES.length - 1) || MESSAGES[index + 1].createdAt.getDate() !== item.createdAt.getDate() ?
                                <View>
                                    <View style={{ alignItems: "center", transform: [{ rotateX: "180deg" }], }}>
                                        <Text>
                                            {item.createdAt.getDate()}
                                        </Text>
                                        <Separator />
                                    </View>
                                </View>
                                :
                                null
                        }
                    </View>
                )}
                ItemSeparatorComponent={() => <Separator />}
                ListHeaderComponent={<Separator />}
            // ListFooterComponent={
            //     <View>
            //         <ActivityIndicator />
            //     </View>
            // }
            // refreshControl={
            //     <RefreshControl
            //         refreshing
            //         tintColor={"#FF0000"}
            //         colors={["#FF0000"]}
            //     />
            // }
            />
            <View style={{ padding: 4, flexDirection: "row", alignItems: "center" }}>
                <CloseIcon height={24} width={24} />
                <Separator direction="horizontal" />
                <TextInput
                    containerStyle={{ flex: 1 }}
                    autoCorrect={false}
                    multiline
                    style={{
                        maxHeight: 100
                    }}
                />
                <Separator direction="horizontal" />
                <ChevronUpIcon />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Chat

const NOW = new Date()

const MESSAGES = new Array(20).fill({}).map((v, i) => (
    {
        id: (i + 1),
        type: "",
        message: `message alsdkfaskj hfjadksl hdsjahflkdash ${i + 1}`,
        createdAt: i < 5 ? NOW : new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() - 1),
        user: {
            id: Math.random() < 0.5 ? 1 : 2
        }
    })
)