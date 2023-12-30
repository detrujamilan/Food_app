import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FoodItem from "../../components/FoodItem";

const hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
 
  return (
    <ScrollView>
      <View className="flex-row justify-between mt-3 px-2">
        <View>
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back"
            size={24}
            color="black"
          />
        </View>
        <View className="flex-row items-center gap-2">
          <SimpleLineIcons name="camera" size={24} color="black" />
          <Ionicons name="bookmark-outline" size={24} color="black" />
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View className=" justify-center items-center my-4">
        <Text className="text-xl font-semibold"> {params?.name} </Text>
        <Text className="mt-1 text-gray-500 text-[15px] font-medium">North Indian . Fast Food . 160 or More</Text>
        <View className="flex-row items-center mt-1">
          <View className="flex-row gap-1 mt-1 items-center bg-[#006A4E] rounded px-1 pb-1 mr-[10px]">
            <Text className=" text-white">{params?.aggregate_rating}</Text>
            <Ionicons name="ios-star" size={15} color="white" />
          </View>
        <Text className="text-[15px] font-medium">3.2K Rating</Text>
        </View>
        <View className="bg-[#D0F0C0] px-2 mt-3 py-[5px] rounde-[20px]">
          <Text>30-40 mins * 6 km | Bangalore</Text>
        </View>
      </View>
        <FoodItem/>
    </ScrollView>
  );
};

export default hotel;
