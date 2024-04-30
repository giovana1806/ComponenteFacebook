import { View, Image, Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
    <View style={styles.container}>
      <Image
        style={{width: '80%', height: 80, marginBottom:30}}
        resizeMode="contain"
        source={require('../../assets/facebook.png')}
      />
      <InputTexto dica="Digite  email ou numero de telefone"/>
      <InputTexto dica="Digite sua senha" seguranca={true}/>

      <Botao btn="entrar" cor='blue' src='home' size='80%' cortext='white'/>

      <View style={styles.cont}>
        <View style={styles.line} />
        <Text style={styles.text}>ou</Text>
        <View style={styles.line}/>
      </View>

      <Botao btn="criar nova conta" src='cadastrar' cortext={styles.botao}/>

    </View>
  );
}

