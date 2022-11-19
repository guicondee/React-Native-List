import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";

import  React, { useState }  from "react";

import { styles } from './styles'

import { Participant } from "../components/Participant";

 export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handlePaticipantAdd() {
    if(participants.includes(participantName)) {
     return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
    }
    
    setParticipants(prevState => [...prevState,  participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    
    
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(users => users !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
        onChangeText={setParticipantName}
        value={participantName}
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

      <FlatList
      showsVerticalScrollIndicator={false}
      data={participants} 
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)} 
        />
      )}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
        </Text>
      )}
      />
       
         
      

      
    </View>
  )
 }
