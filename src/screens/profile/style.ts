import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 12
    },
    item: {
        borderWidth: 1,
        borderColor: COLORS.gray3,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15,
    },
    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
        marginBottom: 5
    },
    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.black,
    }
})