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
    area:{
        
        flex: 1,
        marginBottom: 10
       
       
    },
    
    lista:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        margin: 'auto',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 3,
            height: 3,
        },
        elevation: 2,
    },  
    nome:{
        lineHeight: 20,
        fontWeight: '500'        
    }, 
    fone:{
        lineHeight: 25,
        fontWeight: '700'        
    },
   
});