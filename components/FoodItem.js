import { View, Text, Pressable } from "react-native";
import React from "react";
import { menu } from "../data";

const FoodItem = () => {
  return (
    <View>
      {menu.map((item, index) => (
        <Pressable>
          <Text>{item.name} ({item.name.length})  </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FoodItem;
