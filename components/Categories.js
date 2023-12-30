import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Categories = () => {
  const items = [
    {
      id: "1",
      name: "fastest delivery",
    },
    {
      id: "2",
      name: "ratinf 4.0+",
    },
    {
      id: "3",
      name: "offers",
    },
    {
      id: "4",
      name: "cuisines",
    },
    {
      id: "5",
      name: "MAX Safety",
    },
    {
      id: "6",
      name: "Pro",
    },
  ];
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.5} className="mt-3">
              <View className="mx-[10px] rounded p-1  bg-[#DB7093]">
                <Text className="p-[6px] text-white font-medium">{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
