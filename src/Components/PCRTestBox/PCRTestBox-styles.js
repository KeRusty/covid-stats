import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 4,
        justifyContent: 'center',
        paddingVertical: 10,
    },
    box: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e4e9ed',
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20
    },
    headingText: {
        paddingVertical: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2b244c',
        textAlign: 'center'
    },
    subHeadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a59f2'
    },
})
