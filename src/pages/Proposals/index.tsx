import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import style from './styles';
import {
  db,
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from '../../config/firebase';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { MaskedText } from 'react-native-mask-text';

export default function Proposals({ navigation }) {
  const [Proposal, setProposal] = useState();

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
    });
  }, []);

  return (
    <View style={style.Container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Proposal}
        renderItem={(proposal) => {
          return (
            <View style={style.ContainerTop}>
              {proposal.item.proposal_status ? (
                <AntDesign name="checkcircle" size={35} color="green" />
              ) : (
                <Ionicons name="md-time-outline" size={35} color="black" />
              )}
              <View>
                <Text style={style.ProposalsName}>
                  {`${proposal.item.user_name} ${proposal.item.user_lastname}`}
                </Text>

                <Text style={style.ProposalsCpf}>
                  <MaskedText mask="999.999.999-99">
                    {proposal.item.user_cpf}
                  </MaskedText>
                </Text>
                <Text style={style.ProposalsCity}>
                  {proposal.item.user_cidade}
                </Text>
              </View>

              <TouchableOpacity
                style={style.deleteProposal}
                onPress={() => {
                  deleteProposal(proposal.item.id);
                }}
              >
                <Text
                  onPress={() => {
                    navigation.navigate('Detalhes Proposta', {
                      user_status: proposal.item.proposal_status,
                      user_id: proposal.item.id,
                      user_name: proposal.item.user_name,
                      user_lastname: proposal.item.user_lastname,
                      user_cpf: proposal.item.user_cpf,
                      user_cidade: proposal.item.user_cidade,
                    });
                  }}
                  style={styles.buttonEdit}
                >
                  <FontAwesome name="edit" size={35} color="#41a4f3" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.deleteProposal}
                onPress={() => {
                  deleteProposal(proposal.item.id);
                }}
              >
                <Text style={styles.buttonTrash}>
                  <FontAwesome name="trash" size={35} color="red" />
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={style.ButtonNew}
        onPress={() => navigation.navigate('Nova Proposta')}
      >
        <Text style={style.IconButtonNew}>
          <FontAwesome name="plus-circle" size={20} /> Nova proposta
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
