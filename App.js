import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import EnterGoal from "./components/EnterGoal";
import { GoalList } from "./components/GoalList";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([{ text: 'Task 1', key: Math.random().toString()}, { text: 'Task 2', key: Math.random().toString()}]);

  function addGoalHandler(enteredGoalText) {
    setGoals((current_list) => [...goals,{ text: enteredGoalText, key: Math.random().toString()}]);
  }
  function deleteGoalHandler(id){
    setGoals(current_list => {
      return current_list.filter((goal) => goal.key !== id)
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <EnterGoal addTaskHandler={addGoalHandler} />
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (<View style={styles.listContainer}>
            <GoalList task={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.key}/> 
          </View>);
        }}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "green",
  },
});
