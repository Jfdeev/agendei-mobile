import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const s = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5
    },
    speciality: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10
    }

})