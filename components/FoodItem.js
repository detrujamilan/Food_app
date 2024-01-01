import { View, Text, Pressable } from "react-native";
import React from "react";
import { menu } from "../data";
import MenuItem from "./MenuItem";
import { AntDesign } from '@expo/vector-icons';

const FoodItem = () => {
  return (
    <>
      <View>
        {menu.map((item, index) => (
          <>
            <Pressable key={index} className="mt-5 flex-row justify-between m-[10px]">
              <Text className="text-lg font-bold">
                {item.name} ({item.name.length}){" "}
              </Text>
              <AntDesign name="down" size={24} color="black" />
            </Pressable>
            {item.items.map((item, index) => (
              <MenuItem item={item} index={index} />
            ))}
          </>
        ))}
      </View>
    </>
  );
};

export default FoodItem;
