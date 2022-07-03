import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

import api from '../../services/api';

import styles from './styles';

export default function Lista (){
  
  
  const [empresas, setEmpresas] = useState([]);
  const [filterEmpresas, setFilterEmpresas] = useState([]);
 const [busca, setBusca] = useState('');

 const [total, setTotal] = useState(0);
 const [page, setPage] = useState(1);
 const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();
  function navigateToHome() {
    navigation.navigate('Home');
  }
  function navigateToEmpresa(lista) {
    navigation.navigate('Empresa', { lista });
  }
 
 
 async function loadEmpresas() {

  
    if (loading) {
      return;
    }  
    if (total > 0 && empresas.length === total) {
      return;
    }

    setLoading(true);
    const response = await api.get('empresas', {
      params: { page }
    });

    setEmpresas([...empresas, ...response.data]);
    setTotal(response.headers['X-Total-Count']);
    setPage(page + 1);
    setLoading(false);
   
  }
  useEffect(() => {
    loadEmpresas();
    }, []);


  
    async function buscarEmpresas() {
      
      setLoading(true);
      const {nome} = empresas;
         
      const response = await api.get('pesquisa', {
        params:{
          nome: busca
        }
      });

      setEmpresas(response.data);
      setPage(page + 1);
      setLoading(false);
      } 
      useEffect(() => {
        buscarEmpresas();
        }, [busca]);
      


  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={navigateToHome}>
              <Feather name="arrow-left" size={25}/>            
              </TouchableOpacity>
              <View style={styles.title}>
              <Text style={styles.titletext}>Lista A - Z</Text>
              </View>
      </View>

      
      <View style={styles.area}>
      <View >
      <SearchBar
      containerStyle={{ marginBottom: 5,paddingHorizontal: 20, }}
       inputContainerStyle={{ backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 10}}
       searchIcon = {{color: '#999', size: 30}}
      
       placeholder="Digite o nome da Empresa"
       lightTheme 
      placeholderTextColor="#999"
      autoCapitalize="words"
      value={busca}
      onChangeText={setBusca}
      onBlur ={buscarEmpresas} 
      returnKeyType = "search" 
      autoCorrect ={false}  
     
      />
     </View> 
          
        <FlatList 
        bounces = {true}
        data= {empresas}
        onEndReached={loadEmpresas}
        onEndReachedThreshold={0.2}
        keyExtractor = {lista =>  String(lista._id)}
        renderItem = {({item: lista}) => (
         
            
            <View style={styles.lista}>
             <View >
            <Text style={styles.nome}>{lista.nome}</Text>
            <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${lista.fone}`);}}>
            <Text style={styles.fone}>{lista.fone}</Text>
            </TouchableOpacity> 
          </View>
          <TouchableOpacity onPress={() => navigateToEmpresa(lista)}>
          <Feather name="arrow-right" size={25}/>
          </TouchableOpacity>
        </View>

        
        )}/>
      
      </View>
      
          
    </View>
     
  );
}