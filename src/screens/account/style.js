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
        width: 120,
        height: 28,
        marginTop: 50
    },
    input: {
        backgroundColor: COLORS.gray3,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        color: COLORS.gray1
    },

    footer: {
        alignItems: "center",
        flexDirection : "row",
        justifyContent: "center",
        
    },
    text: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray1
    },
    textAccount: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.blue
    },
})