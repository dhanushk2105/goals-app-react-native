import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
  button: {
    color: "green",
    flex: 5,
  },
  inputContainer: {
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    color: "#fff",
    flex: 1,
    marginLeft: 20,
  },
});

const EnterGoal = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addTask() {
    if(enteredGoalText !== ""){
      props.addTaskHandler(enteredGoalText);
    }
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputText}>
        <TextInput
          placeholder="Tell Me your goal.."
          placeholderTextColor="green"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={{
            color: "#fff",
          }}
        />
      </View>
      <View>
        <Button title="ADD" style={styles.button} onPress={addTask} />
      </View>
    </View>
  );
};

export default EnterGoal;
