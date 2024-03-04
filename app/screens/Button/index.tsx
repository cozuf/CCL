import React from "react";
import { Button, PageContainer, Separator, Text } from "../../../src";

const ButtonPage = () => {
    return (
        <PageContainer>
            <Button type="filled" title="Button" alignment="free" />
            <Separator />
            <Button type="outlined" title="Button" alignment="free" />
            <Separator />
            <Button type="simplified" title="Button" alignment="free" />
            <Separator distance={20} />
            <Button type="filled" >
                <Text>
                    Yusuf
                </Text>
            </Button>
            <Separator />
            <Button type="outlined" >
                <Text>
                    Yusuf
                </Text>
            </Button>
            <Separator />
            <Button type="simplified" >
                <Text>
                    Yusuf
                </Text>
            </Button>

        </PageContainer>
    )
}

export default ButtonPage