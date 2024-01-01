import { View, Text, ScrollView, Pressable, Animated } from "react-native";
import React, { useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FoodItem from "../../components/FoodItem";
import { useSelector } from "react-redux";
import { menu } from "../../data";

const hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = useSelector((state) => state.cart?.cart);
  console.log(cart);

  const scrollViewRef = useRef(null);
  const scrollAni = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;
  const scrollViewCategory = (index) => {
    const yOffSet = index * ITEM_HEIGHT;
    Animated.timing(scrollAni, {
      duration: 500,
      useNativeDriver: true,
    }).start();
    scrollViewRef.current.scrollTo({ y: yOffSet, Animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef}>
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
        <Text className="mt-1 text-gray-500 text-[15px] font-medium">
          North Indian . Fast Food . 160 or More
        </Text>
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
      <FoodItem />
      <View className="flex-row items-center bg-white bottom-0">
        {menu.map((item, index) => (
          <>
            <Pressable
              onPress={() => scrollViewCategory(index)}
              className="p-2 border m-2 items-center justify-center border-[#181818] "
            >
              <Text>{item.name}</Text>
            </Pressable>
          </>
        ))}
      </View>
      <Pressable></Pressable>
      {cart?.length > 0 && (
        <Pressable className="bg-red-500 p-3 justify-center items-center">
          <Text className="text-center text-white text-base font-medium">
            {" "}
            {cart.length} {console.log(cart.length)} items added{" "}
          </Text>
          <Text className="text-center text-white mt-1 font-semibold">
            Add items(s) worth 240 to reduce fee by RS 35.
          </Text>
        </Pressable>
      )}
    </ScrollView>
  );
};

export default hotel;
