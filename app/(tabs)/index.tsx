import {NavigationIndependentTree} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {View, Text, Button} from "react-native";

const Stack = createStackNavigator();

function Home({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button title="Xem hồ sơ" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Hồ sơ cá nhân</Text>
    </View>
  );
}

export default function AppStack() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
