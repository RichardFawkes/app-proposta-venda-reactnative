import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import style from './styles';
import {
  db,
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from '../../config/firebase';
import { FontAwesome } from '@expo/vector-icons';

export default function Proposals({ navigation }) {
  const [Proposal, setProposal] = useState();
  const proposalRef = query(collection(db, 'propostas'));

  const deleteProposal = async (id) => {
    await deleteDoc(doc(db, 'propostas', id));
  };

  const q = query(collection(db, 'propostas'));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((docSnapshot) => {
        list.push({ ...docSnapshot.data(), id: docSnapshot.id });
      });
      setProposal(list);
      console.log(`Lista2 `, Proposal);
    });
  }, []);

  return (
    <View style={style.Container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Proposal}
        renderItem={(proposal) => {
          return (
            <View style={style.Proposals}>
              <TouchableOpacity
                style={style.deleteProposal}
                onPress={() => {
                  deleteProposal(proposal.item.id);
                }}
              >
                <Text>Remove</Text>
              </TouchableOpacity>
              <Text
                style={style.ProposalsItem}
                onPress={() => {
                  navigation.navigate('Detalhes Proposta', {
                    user_id: proposal.item.id,
                    user_name: proposal.item.user_name,
                  });
                }}
              >
                {proposal.item.user_name}
              </Text>
            </View>
          );
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
          <FontAwesome name="print" size={20}></FontAwesome> Relatorio
        </Text>
      </TouchableOpacity>
    </View>
  );
}
