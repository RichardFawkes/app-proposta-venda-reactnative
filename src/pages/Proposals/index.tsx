import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';
import {
  db,
  collection,
  query,
  onSnapshot,
  where,
  doc,
} from '../../config/firebase';
import { FontAwesome } from '@expo/vector-icons';

export default function Proposals({ navigation }) {
  const [Proposal, setProposal] = useState([]);

  const deleteProposal = (id: number) => {
    const q = query(collection(db, 'propostas').doc(id));
  };

  useEffect(() => {
    const q = query(collection(db, 'propostas'));
    const unsubscribe = onSnapshot(q, (query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setProposal(list);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={style.Container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Proposal}
        renderItem={(item) => {
          <View style={style.contextAllProposals}></View>;
        }}
      />
      <TouchableOpacity
        style={style.ButtonNew}
        onPress={() => navigation.navigate('Nova Proposta')}
      >
        <Text style={style.IconButtonNew}>Nova proposta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.ButtonReport}
        onPress={() => navigation.navigate('Relatorio Proposta')}
      >
        <Text style={style.IconButtonReport}>Relatorio</Text>
      </TouchableOpacity>
    </View>
  );
}
