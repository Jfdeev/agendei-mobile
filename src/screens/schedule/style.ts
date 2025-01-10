import { StyleSheet } from "react-native";
import {COLORS, FONT_SIZE} from "../../constants/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 20
    },
    textHour: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray1,
    },
    containerButton: {
        marginBottom: 20,
    }
})