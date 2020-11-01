import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6a59f2',
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 80,
    },
    scroll: {
        marginVertical: 80,
        flex: 1
    },
    contentBox: {
        backgroundColor: '#ffffff',
        marginBottom: 16,
        marginHorizontal: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 32,
        borderRadius: 16,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#6a59f2',
    }
})
