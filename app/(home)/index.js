import { View, Text, Alert, ScrollView, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as LocationGedCoding from "expo-location";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Carousal from "../../components/Carousal";
import Categories from "../../components/Categories";
import { hotels, hotelsDetails, items } from "../../data";
import Hotel from "../../components/Hotel";

const index = () => {
  const [locationServicesEnable, setLocationServicesEnable] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "fetching your location"
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Services not enabled ",
        "Please enable location services ",
        [{ text: "ok" }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnable(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location services",
        [{ text: "ok" }],
        { cancelable: false }
      );
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      //   {
      //     response.map((val, inx) => {
      //       return setDisplayCurrentAddress(val);
      //     });
      //   }
      for (let item of response) {
        let address = `${item?.name},${item?.postalCode},${item.district},${item?.city}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <ScrollView className="flex-1 bg-[#f8f8f8]">
      <View className="flex-row gap-2 items-center p-3">
        <EvilIcons name="location" size={26} color="#E52850" />
        <View className="flex-1">
          <Text className="text-sm font-medium">Deliver To </Text>
          <Text className="text-gray-700 text-base">
            {displayCurrentAddress}
          </Text>
        </View>
        <View className="bg-blue-300 w-10 h-10 justify-center items-center rounded-full">
          <Text className="">S</Text>
        </View>
      </View>
      <View
        className="flex-row justify-between items-center border-[1px] border-[#c0c0c0] rounded-xl mt-2 "
        style={{
          marginHorizontal: 10,
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}
      >
        <TextInput placeholder="Search for food , hotels" />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <Carousal />
      <Categories />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hotelsDetails?.map((item, index) => {
          return (
            <View className="bg-white flex-row m-3 rounded-lg" key={index}>
              <View className="">
                <Image
                  className="w-[100px] h-[100px] bg-cover rounded-lg "
                  source={{ uri: item?.images }}
                />
              </View>
              <View className="flex-col p-[10px]">
                <Text className="text-sm font-medium">{item?.name}</Text>
                <Text className="flex-1 mt-[3px] text-gray-500">
                  {item?.location}
                </Text>
                <View className="flex-row  items-center gap-[3px] font-medium ">
                  <View>
                    <Ionicons name="ios-time" size={24} color="green" />
                  </View>
                  <Text>{item?.checkOutTime} </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Text
        className="text-center my-[7px] text-gray-500 "
        style={{ letterSpacing: 5 }}
      >
        EXPLORE
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => (
          <View
            key={index}
            className=" bg-white w-[90px] border border-[#E0E0E0] px-[1px] py-[5px] rounded ml-[10px] my-[10px] items-center justify-center "
          >
            <Image
              className="w-[50px] h-[50px]"
              source={{ uri: item?.image }}
            />
            <Text className="text-sm font-medium mt-[6px]">{item?.name}</Text>
            <Text className="text-xs text-gray-500 mt-[3px]">
              {item?.description}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text
        className="text-center my-[7px] text-gray-500 "
        style={{ letterSpacing: 5 }}
      >
        ALL RESTAURANTS
      </Text>
      <Hotel />
    </ScrollView>
  );
};

export default index;
