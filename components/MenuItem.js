import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const MenuItem = ({ item, index }) => {
  const [additems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  return (
    <View>
      <Pressable className="m-[10px] flex-row justify-between my-[10px]">
        <View>
          <Text className="text-lg font-semibold w-[220px]">{item.name}</Text>
          <Text className="mt-1 text-sm font-medium">₹{item.price}</Text>
          <Text className="mt-1 rounded">
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                key={i}
                className="px-[3px]"
                name={i < Math.floor(item.rating) ? "star" : "star-o"}
                size={15}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text className="w-[230px] mt-[8px] text-gray-600 text-base">
            {item.description.length > 40
              ? item.description.substr(0, 37) + "..."
              : item.description}{" "}
          </Text>
        </View>
        <Pressable>
          <Image
            className="w-[120px] h-[120px] rounded-lg"
            source={{ uri: item.image }}
          />
          {selected ? (
            <Pressable
              style={{
                position: "absolute",
                top: 95,
                left: 20,
                backgroundColor: "#fd5c63",
                flexDirection: "row",
                paddingHorizontal: 10,
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Pressable
                onPress={() => {
                  if (additems == 1) {
                    dispatch(removeFromCart(item));
                    setAddItems(0);
                    setSelected(false);
                    return;
                  }
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuantity(item));
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 6,
                    fontSize: 15,
                  }}
                >
                  {additems}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItems((c) => c + 1);
                  dispatch(incrementQuantity(item));
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: "white",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (additems == 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(item));
              }}
              style={{
                position: "absolute",
                top: 95,
                left: 20,
                borderColor: "#E32636",
                borderWidth: 1,
                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 5,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#fd5c63" }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuItem;
