import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from './styles'

import { Participant } from "../components/Participant";


 
 export function Home() {
  function handlePaticipantAdd() {
    console.log('Usuário criado com sucesso')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
      Desenvolvimento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 16 Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
        placeholder="Nome do participante"
        placeholderTextColor='#6b6b6b'
        style={styles.input}
        />

        <TouchableOpacity
          onPress={handlePaticipantAdd}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />


    </View>
  )
 }
