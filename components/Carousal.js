import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousal = () => {
  const images = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  return (
    <View>
     <SliderBox images={images} autoplay circleLoop dotColor="#1327f" inactiveDotColor="#90A4AE" 
      imageComponentStyle={{borderRadius:6,width:"94%",marginTop:10}}/>
    </View>
  );
};

export default Carousal;
