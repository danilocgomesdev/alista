import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container: {
        flex: 1,       
      },
      header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFC700',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 5
        
      },
      title:{
        flex: 1,
        alignItems: 'center'
      },
    titletext:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    body:{
        flex: 1,
        marginTop: 10,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 10,
       
    }, 
    caixaImg:{
        height: 150,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 3,
            height: 3,
        },
        elevation: 2,
    },
    img:{
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    descricao:{
      flex: 1,
        marginTop: 15, 
        paddingBottom: 15,      
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 3,
            height: 3,
        },
        elevation: 2,
    },
    titulo:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    texto:{
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 20,
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      action: {
        backgroundColor: '#FFC700',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      actionText: {
        fontSize: 15,
        fontWeight: 'bold'
      },

});