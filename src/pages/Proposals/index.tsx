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

  const deleteProposal = (id: any) => {
    const q = query(collection(db, 'propostas').doc(id).delete());
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
          <View style={style.Proposals}>
            <TouchableOpacity
              style={style.deleteProposal}
              onPress={() => {
                deleteProposal(item.id);
              }}
            ></TouchableOpacity>
          </View>;
        }}
      />
      <TouchableOpacity
        style={style.ButtonNew}
        onPress={() => navigation.navigate('Nova Proposta')}
      >
        <Text style={style.IconButtonNew}>
          <FontAwesome name="plus-circle" size={20}></FontAwesome> Nova proposta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.ButtonReport}
        onPress={() => navigation.navigate('Relatorio Proposta')}
      >
        <Text style={style.IconButtonReport}>
          {' '}
          <FontAwesome name="print" size={20}></FontAwesome> Relatorio
        </Text>
      </TouchableOpacity>
    </View>
  );
}
