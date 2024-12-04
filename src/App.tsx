import { StatusBar } from 'react-native'
import Home from './screens/home';

export default function App() {
  return (
    <>
       <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
