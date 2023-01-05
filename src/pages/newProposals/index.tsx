import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';
import { db, doc, setDoc } from '../../config/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaskedTextInput } from 'react-native-mask-text';
import { dateConvert } from '../../utils/dateConvert';

export default function NewProposals({ navigation }) {
  const [nameuser, setNameuser] = useState(null);
  const [lastName, setLastnameuser] = useState(null);
  const [cpfuser, setCpfuser] = useState(null);
  const [cityuser, setCityuser] = useState(null);
  const [dateuser, setDateuser] = useState(dateConvert());

  const hash = (Math.random() + 1).toString(36).substring(7);

  const handleAdd = async () => {
    await setDoc(doc(db, 'propostas', hash), {
      user_createAt: dateuser,
      user_name: nameuser,
      user_lastname: lastName,
      user_cpf: cpfuser,
      user_cidade: cityuser,
    });
    navigation.navigate('Propostas de Venda');
  };

  return (
    <View style={style.Container}>
      <TextInput
        style={style.Input}
        value={dateuser}
        editable={false}
        selectTextOnFocus={false}
      />
      <TextInput
        style={style.Input}
        onChangeText={setNameuser}
        value={nameuser}
        placeholder="Nome"
      />
      <TextInput
        style={style.Input}
        onChangeText={setLastnameuser}
        value={lastName}
        placeholder="Sobrenome"
      />
      <MaskedTextInput
        style={style.Input}
        onChangeText={setCpfuser}
        value={cpfuser}
        placeholder="CPF"
        mask="999.999.999-99"
      />
      <TextInput
        style={style.Input}
        onChangeText={setCityuser}
        value={cityuser}
        placeholder="Cidade"
      />
      <TouchableOpacity style={style.buttonNewTask} onPress={() => handleAdd()}>
        <Text style={style.iconButtonSave}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
