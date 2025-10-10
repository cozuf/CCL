import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { delay, PageContainer, Separator, Skeleton } from "../../../src";

// const URL = "https://cdn.wallpapersafari.com/52/75/Rx0l98.jpg"
const URL = "https://hips.hearstapps.com/hmg-prod/images/english-singer-songwriter-dua-lipa-poses-on-the-pink-carpet-news-photo-1689187045.jpg?crop=1xw:0.84367xh;0.303xw,0.0807xh"

const SkeletonPage = () => {
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => { initialize() }, [])

    const initialize = async () => {
        try {
            await delay(5)
            await Image.getSize(URL)
            setLoading(false)
        } catch (error: any) {
            console.error(error)
            setLoading(false)
        }
    }

    return (
        <PageContainer>
            <Separator distance={50} />
            <View style={{ alignItems: "center" }}>
                {
                    loading ?
                        <Skeleton
                            height={180}
                            width={320}
                        />
                        :
                        <Image
                            source={{ uri: URL }}
                            style={{ height: 180, width: 320, borderRadius: 8 }}
                        />
                }
            </View>
        </PageContainer>
    )
}

export default SkeletonPage