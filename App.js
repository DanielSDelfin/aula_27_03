import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect , useState,useRef } from 'react';

export default function App() {
  const[valor,setValor]=useState(0)

  // useEffect(()=>{
  //   console.log("Iniciando....")
  // },[])
  // useEffect(()=>{
  //   console.log("Iniciando 02 Effect" +valor)
  // },[valor])

  const dados = useRef()
  const input = useRef()

  function salvar(){
    dados.current = valor;
  }

  useEffect(()=>{
    console.log(dados.current);
  })

  return (
    <View style={styles.container}>
      <Text>turminha!</Text>
      <Text>{valor}</Text>
      <Button title='clique aqui' onPress={()=>setValor(valor+2)}/>
      <TextInput ref={input} placeholder='Digite seu Nome' style={{borderWidth:1,width:300,height:50,borderRadius:30}}/>
      <Button title='Limpar' onPress={()=>input.current.clear()}/>
      <Button title='Incluir focus' onPress={()=>input.current.focus()}/>
      <Button title='Salvar na referencia' onPress={salvar}/>
      <Button title='Salvar valor salvo na ref' onPress={()=>{
        console.log(dados.current)
      }}/>
      <Button title='Set native props' onPress={()=>{
        input.current.setNativePropos({
          borederColor:'red',
          borderRadius:15
        })
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
});
