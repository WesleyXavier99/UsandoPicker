import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App(){

  const [pizza, setPizza] = useState(1)
  const [sabores, setSabores] = useState([
    {key:0,nome:"Calabresa",valor:29.50},
    {key:1,nome:"Frango com Catupiry",valor:33.90},
    {key:2,nome:"Portuguesa",valor:25.90},
    {key:3,nome:"Queijo e Presunto",valor:20.00},
    {key:4,nome:"Marguerita",valor:30.50},
    {key:5,nome:"Carne Seca",valor:35.00}
  ])

  let pizzasItem = sabores.map((v,k)=>{
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })

  /*<Picker.Item key={0} value={0} label='Calabresa'/>
        <Picker.Item key={1} value={1} label='Frango com Catupiry'/>
        <Picker.Item key={2} value={2} label='Portuguesa'/>
        <Picker.Item key={3} value={3} label='Queijo e Presunto'/>
        <Picker.Item key={4} value={4} label='Marguerita'/>
        <Picker.Item key={5} value={5} label='Carne Seca'/>*/

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Menu pizza</Text>

      <Picker 
      selectedValue={pizza}
      onValueChange={(itemValue,itemIndex)=> setPizza(itemValue)}
      >
        {pizzasItem}
      </Picker>

      <Text style={styles.texto}>Você esolheu: {sabores[pizza].nome}</Text>
      <Text style={styles.texto}>Valor: R$ {sabores[pizza].valor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:"15%",
    marginBottom:"8%"
  }, title:{
    fontSize:45,
    textAlign:'center'
  },
  texto:{
    fontSize:20,
    textAlign:'center'
  }
});
