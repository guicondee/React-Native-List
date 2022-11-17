import { styles } from "./styles";

import { View, Text, TouchableOpacity } from "react-native";
 
 

export function Participant() {
   return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Guilherme Condé
      </Text>

      <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
   )
}