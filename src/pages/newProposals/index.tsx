import { View, Text, TextInput, Touchable } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';
import { db, doc, setDoc } from '../../config/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewProposals({ navigation }) {
  const [nameuser, setNameuser] = useState(null);
  const hash = (Math.random() + 1).toString(36).substring(7);

  const handleAdd = async () => {
    await setDoc(doc(db, 'propostas', hash), {
      user_name: nameuser,
    });
    navigation.navigate('Propostas de Venda');
  };

  return (
    <View style={style.Container}>
      <TextInput
        style={style.Input}
        onChangeText={setNameuser}
        value={nameuser}
      />
      <TouchableOpacity style={style.buttonNewTask} onPress={() => handleAdd()}>
        <Text style={style.iconButtonSave}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
