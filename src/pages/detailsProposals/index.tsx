import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';
import { db, doc, updateDoc } from '../../config/firebase';

export default function DetailsProposals({ navigation, route }) {
  const [usernameEdit, setUsernameEdit] = useState(route.params.user_name);
  const idProposal = route.params.user_id;

  const editProposal = async (name: string, id: string) => {
    await updateDoc(doc(db, 'propostas', id), {
      user_name: usernameEdit,
    });
    navigation.navigate('Propostas de Venda');
  };

  return (
    <View style={style.Container}>
      <TextInput
        style={style.Input}
        onChangeText={setUsernameEdit}
        value={usernameEdit}
      />
      <TouchableOpacity
        style={style.buttonNewTask}
        onPress={() => editProposal(usernameEdit, idProposal)}
      >
        <Text style={style.iconButtonSave}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
