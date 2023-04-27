import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../src/Screens/Details';
import Home from '../src/Screens/Home';

const Stack = createNativeStackNavigator();

function Mystack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>      
    );
  }
export default Mystack;