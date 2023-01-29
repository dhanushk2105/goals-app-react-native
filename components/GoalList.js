import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  goalList: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#051300",
    width: "70%",
    padding: "2%",
    borderRadius: "5px",
    borderWidth: "1",
    borderColor: "green",
    marginTop: "2%",
  },
});

export const GoalList = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={styles.goalList}>
      <Text style={styles.text}>{props.task}</Text>
    </Pressable>
  );
};
