import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flex: .1,
        marginTop: 2,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: 'tan',
    },
    hamburger: {
        width: 40,
        height: 40,
    },
    button: {
        flex: .1,
        marginTop: 4,
        marginRight: 10,
        alignItems: 'center',
    },
    title: {
        flex: .9,
        padding: 5,
        marginTop: 5,
        fontSize: 21,
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'serif',
        textShadowRadius: 2,
        textShadowColor: 'gray',
        textShadowOffset: {width: 3, height: 2},
    },
})

export default styles;