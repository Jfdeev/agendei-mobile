import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.white,
    },
    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 15,
        marginLeft: 10
    }
})