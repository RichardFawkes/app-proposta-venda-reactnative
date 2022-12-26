import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proposals from './src/pages/Proposals';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="proposals">
        <Stack.Screen name="Propostas de vendas" component={Proposals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
