import { StyleSheet } from "react-native"; 
import { COLORS } from "../../constants/theme";

export const s = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.blue,
    },
    icon: {
        width: 45,
        height: 45,
    }
});
