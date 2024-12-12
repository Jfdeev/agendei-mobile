import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const s = StyleSheet.create({
    button: {
        backgroundColor: COLORS.blue,
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        width: '100%',
    },
    text: {
        color: '#FFFFFF',
        fontSize: FONT_SIZE.md,
        textAlign: 'center',
    },
});