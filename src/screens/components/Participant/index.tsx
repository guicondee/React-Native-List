import { styles } from "./styles";

import { View, Text, TouchableOpacity } from "react-native";
 
type ParticipantProps = {
  name: string,
  onRemove: () => void
}
 

export function Participant(props: ParticipantProps ) {
   return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {props.name}
      </Text>

      <TouchableOpacity
          onPress={props.onRemove}
          style={styles.button}
      >
          <Text style={styles.buttonText}>
            -
          </Text>
      </TouchableOpacity>
    </View>
   )
}