import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';

export default function reportProposals() {
  return (
    <View>
      <Text style={style.Header}>Relatorio de Proposta</Text>
    </View>
  );
}
