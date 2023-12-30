import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousal = () => {
  const images = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <View className="flex-1">
      <View className="mt-3">
        <SliderBox
          images={images}
          dotColor="black"
          inactiveDotColor="white"
          autoplay={true}
          autoplayInterval={5000}
          imageLoadingColor="gray"
          circleLoop={true}
          dotStyle={{
            height: 12,
            width: 12,
            borderRadius: 20,
          }}
          ImageComponentStyle={{ borderRadius: 15, width: "95%" }}
        />
      </View>
    </View>
  );
};

export default Carousal;
