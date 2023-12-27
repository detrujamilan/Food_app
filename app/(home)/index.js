import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as LocationGedCoding from "expo-location";

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
    console.log(location);
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
        let address = `${item?.name},${item?.postalCode},${item?.city}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  return (
    <View>
      <Text>home Screen</Text>
    </View>
  );
};

export default index;
