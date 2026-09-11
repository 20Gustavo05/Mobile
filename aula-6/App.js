import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';


// primeira interação com input
/*export default function App() {

  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>

      <Text sytle={styles.titulo}>
        Usando Inputs
      </Text>

      <Text style={styles.descricao}>
        Na aula de hoje você aprenderá a fazer uso da ferramenta input para coletadr dados do usuário final.
      </Text>

      <TextInput
        placeholder='digite algo'
        value={nome}
        onChangeText={setNome}
        style={styles.campo}
      />

      <Text style={styles.resultado}>
        Nome Digitado: {nome}
      
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f6f8'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5f6b76',
    backgroundColor: '#F7F0F0',
    padding: 30,
    borderRadius: 5,
  },

  campo: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },

  resultado: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 10,
    },

});*/


// primeira atividade
/*export default function App() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [gmail, setGmail] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <View>

      <Text style={styles.nome}>
        Nome
      </Text>
      <TextInput
        placeholder='digite aqui.'
        value={nome}
        onChangeText={setNome}
        style={styles.campo}
      />

      <Text style={styles.sobrenome}>
      Sobrenome
      </Text>
      <TextInput
        placeholder='digite aqui.'
        value={sobrenome}
        onChangeText={setSobrenome}
        style={styles.campo}
      />

      <Text style={styles.gmail}>
        Gmail
      </Text>
      <TextInput
        placeholder='digite aqui.'
        value={gmail}
        onChangeText={setGmail}
        style={styles.campo}
      />
      
      <Text style={styles.telefone}>
        Telefone
      </Text>
      <TextInput
        placeholder='digite aqui.'
        value={telefone}
        onChangeText={setTelefone}
        style={styles.campo}
      />

    </View>

  );
}

const styles = StyleSheet.create({

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1f3c5b',
    marginTop: 20,
  },

  sobrenome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1f3c5b',
    marginTop: 20,
  },

  gmail: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1f3c5b',
    marginTop: 20,
  },

  telefone: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1f3c5b',
    marginTop: 20,
  },

  campo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1f3c5b',
    borderWidth: 2,
    borderRadius: 8,
  },

});*/


// segunda atividade
/*export default function App() {

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Solicitação de contato
      </Text>

      <Text style={styles.rotulo}>
        Nome
      </Text>

      <TextInput
        placeholder='Digite seu nome.'
        value={nome}
        onChangeText={setNome}
        style={styles.campo}
      />

      <Text style={styles.rotulo}>     
        Mensagem
      </Text>

      <TextInput
        placeholder='Digite sua Mensagem.'
        value={mensagem}
        onChangeText={setMensagem}
        multiline={true}
        style={[styles.campo, styles.campoMensagem]}
      />

      <View style={styles.areaResultado}>

        <Text style={styles.resultado}>
          Nome: {nome}
        </Text>

        <Text style={styles.resultado}>
          Mensagem: {mensagem}
        </Text>
      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f4f6f8'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30
  },

  rotulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 12
  },

  campo: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16
  },

  campoMensagem: {
    minHeight: 110,
    textAlignVertical: 'top'
  },

  areaResultado: {
    marginTop: 30,
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },

  resultado: {
    fontSize: 16,
    marginBottom: 10
  }
});*/


//terceira atividade
export default function App(){

  const [nome, setNome] = 
  useState('');
  const [mensagem,setMensagem] = 
  useState('');
  const [resultado, setResultado] = 
  useState('');

  function enviarSolicitacao() {
    if (nome === '') {
      setResultado('Digite seu nome.');
    }
    else if (mensagem === '') {
      setResultado('Digite uma mensagem.');
    }
    else {
      setResultado('Solicitação registrada com sucesso.');
      setNome('');
      setMensagem('');
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Solicitação de contato
      </Text>

      <Text style={styles.rotulo}>
        Nome
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.campo}
      />

      <Text style={styles.rotulo}>
        Mensagem
      </Text>
      
      <TextInput
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline={true}
        style={[styles.campo, styles.campoMensagem]}
      />

      <View style={styles.areaResultado}>
        <Text style={styles.resultado}>
        Nome: {nome}
        </Text>

        <Text style={styles.resultado}>
        Mensagem: {mensagem}
        </Text>
      </View>

      <View style={styles.areaBotao}>
        <Button
          title="Enviar solicitação"
          onPress={enviarSolicitacao}
        />
      </View>

      <Text style={styles.fresultado}>
      {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f4f6f8'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30
  },

  rotulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 12
  },

  campo: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16
  },

  campoMensagem: {
    minHeight: 110,
    textAlignVertical: 'top'
  },

  areaResultado: {
    marginTop: 30,
    padding: 18,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 10
  },

    areaBotao: {
    marginTop: 20
  },

  resultado: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25
  },
  
  fresultado: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    color: "green"
  }

});