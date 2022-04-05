import React from 'react';
import { Linking, StyleSheet, TouchableWithoutFeedback, Text, View, Image, Button } from 'react-native';

class App extends React.Component
{
  open_1()
  {
    let url='http://vk.com';
    Linking.openURL(url);
  }
  open_2()
  {
    let url='http://brightmagazine.ru/perfume/';
    Linking.openURL(url);
  }
  render()
  {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>
            Журнал Bright
          </Text>
        </View>

        <View style={styles.block}>
          <TouchableWithoutFeedback onPress={this.open_1}>
            <View>
              <Text style={styles.news}>
                Новости
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Image source={{
            uri: 'http://brightmagazine.ru/wp-content/uploads/2022/02/pexels-mart-production-8450334.jpg',
          }}
          style={styles.pic}/>
          <Text style={styles.topic}>
            Превращаем стресс в своего помощника
          </Text>
          <Text style={styles.text}>
           Парфюм обладает способностью представлять нас окружающим и оставаться в памяти, 
           поэтому важно четко сформулировать то, что мы хотим транслировать с их помощью. 
           А еще парфюм может стать отличным помощником в череде рабочих будней.
          </Text>
          <View style={styles.btn1}>
            <Button title='Читать далее' onPress={this.open_2}/>
          </View>
        </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d7db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20
  },
  block: {
    backgroundColor: '#fff',
    width: 400,
    paddingLeft: 20,
    paddingTop: 20,
  },
  news: {
    color: 'blue',
    paddingBottom: 20,
  },
  pic: {
    height: 200,
    width: 300,
  },
  topic: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    paddingBottom: 20,
    paddingTop: 20
  },
  btn1: {
    paddingBottom: 20,
    width: 200,
  },
});