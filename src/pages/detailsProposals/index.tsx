import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';
import { db, doc, updateDoc } from '../../config/firebase';

import { dateConvert } from '../../utils/dateConvert';

export default function DetailsProposals({ navigation, route }) {
  const idProposal = route.params.user_id;
  const [nameuser, setNameuser] = useState(route.params.user_name);
  const [lastName, setLastnameuser] = useState(route.params.user_lastname);
  const [cpfuser, setCpfuser] = useState(route.params.user_cpf);
  const [cityuser, setCityuser] = useState(route.params.user_cidade);
  const [dateuser, setDateuser] = useState(dateConvert());
  const [isEnabled, setIsEnabled] = useState(route.params.user_status);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const editProposal = async (id: string) => {
    await updateDoc(doc(db, 'propostas', id), {
      proposal_status: isEnabled,
      user_updateAt: dateuser,
      user_name: nameuser,
      user_lastname: lastName,
      user_cpf: cpfuser,
      user_cidade: cityuser,
    });
    navigation.navigate('Propostas de Venda');
  };

  return (
    <View style={style.Container}>
      <Switch
        trackColor={{ false: 'red', true: 'green' }}
        ios_backgroundColor="red"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
      <TextInput
        style={style.Input}
        onChangeText={setCpfuser}
        value={cpfuser}
        placeholder="CPF"
      />
      <TextInput
        style={style.Input}
        onChangeText={setCityuser}
        value={cityuser}
        placeholder="Cidade"
      />

      <TouchableOpacity
        style={style.buttonNewTask}
        onPress={() => editProposal(idProposal)}
      >
        <Text style={style.iconButtonSave}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
