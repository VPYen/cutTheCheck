import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    row: {
        flex: .5,
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: .5,
        marginTop: 50,
        alignItems: 'center',
      },
    text: {
        padding: 5,
        borderWidth: 1,
        color: 'white',
        alignSelf: 'center',
        borderColor: 'gray',
    }
})

export default styles;