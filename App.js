import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import HalamanSplash from './page/splash_screen';
import HalamanOnboarding1 from './page/onboarding1';
import HalamanOnboarding2 from './page/onboarding2';
import HalamanWelcome from './page/welcome';
import HalamanLogin from './page/login';
import HalamanRegister from './page/register';
import HalamanForgotPassword from './page/forgotpassword';
import Halamanotpverifikasi from './page/otpverifikasi';
import Halamanewpassword from './page/newpassword';
import Halamanpasswordchanged from './page/passwordchanged';
import Halamanhome from './page/home';
import Halamanticketupcoming from './page/ticket_upcoming';
import Halamanticketonsale from './page/ticket_onsale';
import Halamanticketpast from './page/ticket_past';
import Halamanprofile from './page/profile';
import Halamandetailevent from './page/detailevent';
import Halamankategori from './page/kategori';
import Halamancheckoutchanged from './page/checkoutchanged';
import Halamancheckout from  './page/checkout';
import Halamansetting from  './page/setting';
import Halamanchangedpassword from  './page/passwordchanged2';
import Halamannotification from  './page/notification';
import Halamandetailtiket from  './page/detailtiket';
import Halamanbookmark from  './page/bookmark';
// import HalamanRegister from './page/splash_screen';
// import HalamanPorto from './components/portofolio_screen';
// import HalamanHome from './components/home_screen';
// import HalamanInput from './components/input_screen';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
<Stack.Screen name="Splash_Screen" component={HalamanSplash} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding1" component={HalamanOnboarding1 } options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding2" component={HalamanOnboarding2 } options={{ headerShown: false }}/>
      <Stack.Screen name="welcome" component={HalamanWelcome } options={{ headerShown: false }}/>
      <Stack.Screen name="login" component={HalamanLogin } options={{ headerShown: false }}/>
      <Stack.Screen name="register" component={HalamanRegister } options={{ headerShown: false }}/>
      <Stack.Screen name="forgotpassword" component={HalamanForgotPassword } options={{ headerShown: false }}/>
      <Stack.Screen name="otpverifikasi" component={Halamanotpverifikasi } options={{ headerShown: false }}/>
      <Stack.Screen name="newpassword" component={Halamanewpassword} options={{ headerShown: false }}/>
      <Stack.Screen name="passwordchanged" component={Halamanpasswordchanged} options={{ headerShown: false }}/>
      <Stack.Screen name="home" component={Halamanhome} options={{ headerShown: false }}/>
      <Stack.Screen name="ticketupcoming" component={Halamanticketupcoming} options={{ headerShown: false }}/>
      <Stack.Screen name="ticketonsale" component={Halamanticketonsale} options={{ headerShown: false }}/>
      <Stack.Screen name="ticketpast" component={Halamanticketpast} options={{ headerShown: false }}/>
      <Stack.Screen name="profile" component={Halamanprofile} options={{ headerShown: false }}/>
      <Stack.Screen name="detailevent" component={Halamandetailevent} options={{ headerShown: false }}/>
      <Stack.Screen name="kategori" component={Halamankategori} options={{ headerShown: false }}/>
      <Stack.Screen name="checkoutchanged" component={Halamancheckoutchanged } options={{ headerShown: false }}/>
      <Stack.Screen name="setting" component={Halamansetting } options={{ headerShown: false }}/>
      <Stack.Screen name="changedpassword" component={Halamanchangedpassword } options={{ headerShown: false }}/>
      <Stack.Screen name="notification" component={Halamannotification } options={{ headerShown: false }}/>
      <Stack.Screen name="detailtiket" component={Halamandetailtiket} options={{ headerShown: false }}/>
      <Stack.Screen name="checkout" component={Halamancheckout} options={{ headerShown: false }}/>
      <Stack.Screen name="bookmark" component={Halamanbookmark} options={{ headerShown: false }}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


