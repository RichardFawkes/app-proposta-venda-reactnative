import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proposals from './src/pages/Proposals';
import newProposals from './src/pages/newProposals';
import detailsProposals from './src/pages/detailsProposals';
import reportProposals from './src/pages/reportsProposals';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="proposals">
        <Stack.Screen
          name="Propostas de Venda"
          component={Proposals}
          options={{
            headerStyle: {
              backgroundColor: '#41a4f3',
            },
            headerTitleStyle: {
              fontWeight: '600',
            },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#41a4f3',
            },
            headerTitleStyle: {
              fontWeight: '600',
            },
            headerTintColor: '#000',
          }}
          name="Nova Proposta"
          component={newProposals}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#41a4f3',
            },
            headerTitleStyle: {
              fontWeight: '600',
            },
            headerTintColor: '#000',
          }}
          name="Detalhes Proposta"
          component={detailsProposals}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#41a4f3',
            },
            headerTitleStyle: {
              fontWeight: '600',
            },
            headerTintColor: '#000',
          }}
          name="Relatorio Proposta"
          component={reportProposals}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
