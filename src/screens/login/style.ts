import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: COLORS.white,
        justifyContent: "space-between",
    },
    containerLogo: {
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 23,
        marginTop: 50
    },
    input: {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        color: COLORS.gray1
    },

    footer: {
        alignItems: "center"
        
    },
    text: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray1
    },
    textAccount: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.blue
    }
})