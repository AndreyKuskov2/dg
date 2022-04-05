import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, SectionList, Linking } from 'react-native';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

activity_1=()=>
{
    let url='http://yandex.com';
    Linking.openURL(url);
}

activity_2=()=>
{
    let url='http://google.com';
    Linking.openURL(url);
}

activity_3=()=>
{
    let url='http://mail.ru';
    Linking.openURL(url);
}

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn1} onPress={activity_1}>
            <Image style={styles.img} source={require("C:/Users/Andrey/Programs/React Native/CD2.3/assets/home.png")}/>
            <Text>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={activity_2}>
            <Image style={styles.img} source={require("C:/Users/Andrey/Programs/React Native/CD2.3/assets/user.png")}/>
            <Text>Моя страница</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3} onPress={activity_3}>
            <Image style={styles.img} source={require("C:/Users/Andrey/Programs/React Native/CD2.3/assets/add.png")}/>
            <Text>Добавить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    marginTop: "7%",
    marginBottom: "15%",
  },
  buttons: {
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
    backgroundColor: "white",
  },
  img: {
    width: 25,
    height: 25
  },
  btn1: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    width: "32%",
  },
  btn2: {
    alignItems: "center",
    padding: 10,
    width: "36%"
  },
  btn3: {
    alignItems: "center",
    padding: 10,
    width: "32%"
  },
  item: {
    backgroundColor: "grey",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
