import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';

export default function newProposals() {
  return (
    <View>
      <Text style={style.Header}>Nova Proposta</Text>
    </View>
  );
}
