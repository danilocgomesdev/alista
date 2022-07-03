import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import Img from '../../assets/empresas/empresa-teste.png';

import HTML from 'react-native-render-html';

export default function Empresa() {

  const navigation = useNavigation();
  const route = useRoute();

  const lista = route.params.lista;
  

  function navigateToDetail() {
    navigation.navigate('Lista');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={navigateToDetail}>
              <Feather name="arrow-left" size={25}/>            
              </TouchableOpacity>
              <View style={styles.title}>
              <Text style={styles.titletext}>{lista.nome}</Text>
              </View>
      </View>
      <View style={styles.body}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.caixaImg} >
        <Image source={Img} style={styles.img} />
        </View>
        <View style={styles.descricao}>
        
        <HTML html={lista.descricao} imagesMaxWidth={Dimensions.get('window').width} />
            
          <Text style={styles.titulo}>Endereco:</Text>
        <Text style={styles.texto}>{lista.endereco}</Text>
        </View>
        <View style={styles.descricao}>
        
        <Text style={styles.titulo}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Ligar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView> 
      </View>
      </View>
    );
}