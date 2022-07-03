import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFC700',
      },
      header:{
        alignItems: 'center'
    },
    body:{
        flex: 1,
        marginTop: 30,
        marginBottom:20
    },
    linha:{
        flexDirection: 'row',
        height: '33%'
    },
    icon:{
        alignItems: 'center',
        height: '100%',
        width: '50%'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    img:{
        width: '50%',
        height:'50%',
        marginBottom: 5
    },
      
});