import React, { useState , useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

import api from '../../services/api';
import styles from './styles';


export default function Alimentacao() {
  const [empresas, setEmpresas] = useState([]);
  
  async function lerDados() { 
    const response = await api.get('empresa');
    setEmpresas(response.data)
    } 
    const MyComponent = (props) => {
    const [query, setQuery] = useState('');
    const [filteredCountryList, setFilteredCountryList] = useState(props.empresas);

     useEffect(() => {
      lerDados();
         if (!query) {
        setFilteredCountryList(empresas);
      }
        setFilteredCountryList(filteredCountryList.filter((d) => d.includes(query)));
    }, [query]);
  
    return (
      <View>
        <SearchBar
          placeholder="Search your countries..."
          onChangeText={setQuery}
          value={query}
        />
        <FlatList
        keyExtractor = {lista =>  String(lista._id)}
          
          data={filteredCountryList}
          renderItem={({ item }) => <Text>{item.nome}</Text>}
        />
      </View>
    );
 
    }
 
}
