import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

class App extends React.Component
{
  open_2()
  {
    let url='https://ru.lipsum.com/';
    Linking.openURL(url);
  }

  render()
  {
    return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>5 книжных новинок октабря!</Text>
      </View>

      <View style={styles.name}>
        <Text style={styles.text1}>
          "Кадиш.com" Натан Ингландер.
          Издательство "Книжники"
        </Text>
      </View>
      
      <View style={styles.desc}>
        <Text style={styles.text2}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
        используя Lorem Ipsum для распечатки образцов. 
        Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.  
        </Text>
        <View style={styles.btn1}>
            <Button title='Читать далее' onPress={this.open_2}/>
        </View>
      </View>
    </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  name: {
    paddingTop: 20,
    paddingBottom: 100,
    backgroundColor: "#d6d7db",
  },
  text1: {
    textAlign: 'center',
    fontSize: 18
  },
  desc: {
    flex: 1,
    backgroundColor: '#a9a9a9',
  },
  text2: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16
  },
  btn1: {
    alignSelf: 'center',
    paddingTop: 20,
    width: 200,
  },
});
