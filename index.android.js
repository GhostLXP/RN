'use strict';

import React ,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

class HelloWorld extends Component {

  constructor(props) {
         super(props);
         this.state = {
             searchText: ""
         }
     }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
        <TextInput
            style={styles.input}
            ref="textInputRefer"/*在TextInput标签中定义引用的名称：ref="textInputRefer"，这样我们通过 this.refs.textInputRefer就可以得到TextInput 组件的引用。在Button的onPress函数中，调用了TextInput的clear方法，这样当我们点击“清除”按钮时，文本框中的内容就会被清除。*/
            placeholder='请输入内容...'
            keyboardType='phone-pad'
            onChangeText={(text) => {
                this.setState({searchText: text});
                }}
         />
        <Button style={styles.button}
            title="搜索"
            onPress={()=>{
                 Alert.alert('输入的内容为:' + this.state.searchText);

            }}
        />
        <Button style={styles.button}
                   title='清除'
                   onPress={ () => {
                        this.refs.textInputRefer.clear();
                   }}
        />
      </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   input: {
     flex:1,
     borderColor: 'gray'
   },
   button: {
      flex: 1,
   },
   searchBar: {
      flexDirection: 'row',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
   },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);