import { View, Text, Alert, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as LocationGedCoding from "expo-location";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import Carousal from "../../components/Carousal";

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
        style={{ marginHorizontal: 10, paddingVertical: 8,paddingHorizontal:10 }}
      >
        <TextInput placeholder="Search for food , hotels" />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <Carousal/>
    </ScrollView>
  );
};

export default index;
