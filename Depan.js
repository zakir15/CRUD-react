import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { style } from './Style';

class Depan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:'',
      alamat:'',
    };
  }

  render() {
    return (
      <View style={style.viewWrapper}>
        <View style={style.viewData}></View>
        <View style={style.viewForm}>
          <TextInput 
          style={style.textInput}
          placeholder="Masukkan Nama"
          value={this.state.nama}
          onChangeText={(text)=>this.setState(
            {nama:text})}
          >
          </TextInput>
          <TextInput
            style={style.textInput}
            placeholder="Masukkan Alamat"
            value={this.state.alamat}
            onChangeText={(text)=>this.setState(
              {alamat:text})}
          ></TextInput>
          <Button title="Masukkan Data"
          onPress={()=>this.klikSimpan()}>
            
          </Button>
        </View>
      </View>
    );
  }
}

export default Depan;
