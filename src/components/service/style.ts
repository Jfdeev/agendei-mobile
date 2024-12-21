import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const s = StyleSheet.create({
    service: {
        flex: 1,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray3,


    },
    containerText: {
        flex: 1,
    },
    containerButton: {
        marginTop: 5
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray2,
        marginTop: 5
    },
    price: {
        fontSize: FONT_SIZE.md,
        color: COLORS.blue,
        marginTop: 3
    },
})