import React from 'react';
import { Image, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import fastfood from '../../assets/icons/fastfood.png';
import listalt from '../../assets/icons/listalt.png';
import store from '../../assets/icons/store.png';
import hospital from '../../assets/icons/hospital.png';
import voice from '../../assets/icons/voice.png';
import assignment from '../../assets/icons/assignment.png';


import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Home() {

  const navigation = useNavigation();

  function navigateToLista() {
    navigation.navigate('Lista');
  }
  function navigateToAlimentacao() {
    navigation.navigate('Alimentacao');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={logoImg} />
       </View>
       <View style={styles.body}>
         <View style={styles.linha}>
            <View style={styles.icon}>
            <TouchableWithoutFeedback  onPress={navigateToLista}>
               <Image source={listalt} style={styles.img} />
               </TouchableWithoutFeedback >
               <TouchableOpacity onPress={navigateToLista}>
               <Text style={styles.title}> Lista A-Z </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
            <TouchableWithoutFeedback  onPress={navigateToAlimentacao}>
                <Image source={fastfood} style={styles.img}/>
                </TouchableWithoutFeedback >
                <TouchableOpacity onPress={navigateToAlimentacao}>
              <Text style={styles.title}>Alimentação</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.linha}>
          <View style={styles.icon}>
              <Image source={store} style={styles.img}/>
              <Text style={styles.title}>Comércio</Text>
          </View>
            <View style={styles.icon}>
              <Image source={hospital} style={styles.img}/>
              <Text style={styles.title}>Saúde</Text>
            </View>
          </View>
          <View style={styles.linha}>
          <View style={styles.icon}>
          <Image source={assignment} style={styles.img}/>
            <Text style={styles.title}>Serviços</Text>
          </View>
            <View style={styles.icon}>
            <Image source={voice} style={styles.img}/>
              <Text style={styles.title}>Utilidades</Text>
            </View>
          </View>
       </View>
    </View>
  );
}