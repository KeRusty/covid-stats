import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    box: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e4e9ed',
        borderWidth: 1,
        borderRadius: 12,
    },
    image: {
        width: 100,
        height: 100
    },
    totalText: {
        paddingVertical: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f2b244'
    },
    activeText: {
        paddingVertical: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d2443a'
    },
    newText: {
        paddingVertical: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a59f2'
    },
    quarantineText: {
        paddingVertical: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a59f2'
    },
    recoveredText: {
        paddingVertical: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#74ca90'
    },
    deathText: {
        paddingVertical: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e4598e'
    }
})
