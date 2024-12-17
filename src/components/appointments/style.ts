import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray3,
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.black,
        marginBottom: 2
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
        marginBottom: 4
    },
    button: {
        backgroundColor: COLORS.blue,
        alignItems: "center",
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
    },
    textButton: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold"
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    }
})