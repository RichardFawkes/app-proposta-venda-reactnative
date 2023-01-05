import { View } from 'react-native';
import React, { SetStateAction, useEffect, useState } from 'react';
import style from './styles';
import { PieChart } from 'react-native-svg-charts';
import { db, collection, query, onSnapshot } from '../../config/firebase';
import { Text } from 'react-native-svg';
export default function ReportProposals() {
  const q = query(collection(db, 'propostas'));
  const [Proposal, setProposal] = useState();
  const [counterSp, setCounterSp] = useState();
  const [counterRj, setCounterRj] = useState();
  const [counterMg, setCounterMg] = useState();
  onSnapshot(q, (querySnapshot) => {
    const list = [];
    querySnapshot.forEach((docSnapshot) => {
      list.push({ ...docSnapshot.data(), id: docSnapshot.id });
    });
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

  const data = [counterSp, counterRj, counterMg];

  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7
    );

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
      },
      key: `pie-${index}`,
    }));

  const Label = ({ slices }) => {
    return slices.map((slice, index) => {
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
    });
  };

  return (
    <View>
      <PieChart style={{ height: 200 }} data={pieData}>
        <Label slices={undefined} />
      </PieChart>
    </View>
  );
}
