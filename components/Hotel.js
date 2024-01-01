import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { hotels } from "../data";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

const Hotel = () => {
  const route = useRouter();
  return (
    <View className="p-3 ">
      {hotels?.map((item, index) => (
        <Pressable
          key={index}
          className="my-2 bg-white"
          onPress={() => {
            route.push({
              pathname: "/hotel",
              params: {
                id: item.id,
                name: item.name,
                adress: item.adress,
                smalladress: item.smalladress,
                cuisines: item.cuisines,
                aggregate_rating: item.aggregate_rating,
                no_of_Delivery: item.no_of_Delivery,
              },
            });
          }}
        >
          <Image
            className="w-[100%] aspect-[6/4] rounded"
            source={{ uri: item.featured_image }}
          />
          <View className="flex-row items-center justify-between">
            <View className="p-1">
              <Text className="mt-[10px] text-base font-semibold">
                {item?.name}{" "}
              </Text>
              <Text className=" text-sm font-medium text-gray-700">
                North Indian . Fast Food . 160 or More
              </Text>
              <Text className=" text-xs font-medium text-[#505050]">
                {item?.time}
              </Text>
            </View>
            <View className="flex-row gap-1 items-center bg-[#006A4E] rounded px-1 pb-1 mr-[10px]">
              <Text className=" text-white">{item?.aggregate_rating}</Text>
              <Ionicons name="ios-star" size={15} color="white" />
            </View>
          </View>
          <View className="border-[1px] my-1 mx-1 border-[#C8C8C8]" />
          <View className="flex-row items-center gap-1 my-1">
            <MaterialCommunityIcons
              name="brightness-percent"
              size={24}
              color="#1F75FE"
            />
            <Text className="ml-[2px] font-medium text-[#1F75FE]">
              20% OFF up to Rs 100
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Hotel;
