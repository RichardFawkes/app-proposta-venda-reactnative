import { View } from 'react-native';
import React, { SetStateAction, useEffect, useState } from 'react';
import style from './styles';
import { PieChart } from 'react-native-svg-charts';
import { db, collection, query, onSnapshot } from '../../config/firebase';
import { Text } from 'react-native-svg';
export default function ReportProposals() {
  type Proposal = {
    id: string;
    proposal_status: boolean;
    user_cidade: string;
    user_cpf: number;
    user_estado: string;
    user_lastname: string;
    user_name: string;
    user_status: boolean;
    user_updateAt: string;
  };

  const tableDb = query(collection(db, 'propostas'));
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [counterSp, setCounterSp] = useState<Number>();
  const [counterRj, setCounterRj] = useState<Number>();
  const [counterMg, setCounterMg] = useState<Number>();
  onSnapshot(tableDb, (querySnapshot) => {
    const list: Proposal[] = [];

    querySnapshot.forEach((docSnapshot) => {
      list.push({
        id: docSnapshot.id,
        ...(docSnapshot.data() as Proposal),
      });
    });
    console.log('lista', list);

    let counter_sp = 0;
    let counter_rj = 0;
    let counter_mg = 0;
    for (const obj of list) {
      if (obj.user_cidade === 'Sao Paulo-SP') counter_sp++;
      if (obj.user_cidade === 'Rio de Janeiro-RJ') counter_rj++;
      if (obj.user_cidade === 'Belo Horizonte-MG') counter_mg++;
    }
    setCounterSp(counter_sp);
    setCounterRj(counter_rj);
    setCounterMg(counter_mg);
  });

  const colorByPosition = (index: number) => {
    switch (index) {
      case 0:
        return '#f44336';
      case 1:
        return '#4caf50';
      case 2:
        return '#ffeb3b';
      default:
        return '#f44336';
    }
  };

  const data = [counterSp, counterRj, counterMg];

  const pieData = data
    .filter((value) => (value as number) > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colorByPosition(index),
      },
      key: `pie-${index}`,
    }));

  interface Slice {
    pieCentroid: [number, number];
    data: {
      value: number;
    };
  }

  const Label = ({ slices }: { slices: Slice[] }) => {
    return slices && slices.length > 0 ? (
      <React.Fragment>
        {slices.map((slice, index) => {
          const { pieCentroid, data } = slice;
          return (
            <Text
              key={`label-${index}`}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill="white"
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={15}
            >
              {data.value} %
            </Text>
          );
        })}
      </React.Fragment>
    ) : (
      <Text>No slices data found</Text>
    );
  };

  return (
    <View>
      <PieChart style={{ height: 200 }} data={pieData}>
        <Label slices={[]} />
      </PieChart>
    </View>
  );
}
