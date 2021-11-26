import React from "react";
import { DropDownPicker as RNDropDownPicker } from "react-native-dropdown-picker";

import { View } from "./View";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Colors } from "../config";

export const DropDownPicker = ({
  width = "100%",
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  return (
    <View
      style={
        {
          // backgroundColor: Colors.white,
          // borderRadius: 8,
          // flexDirection: "row",
          // padding: 12,
          // marginVertical: 12,
          // width,
          // borderWidth: 1,
          // borderColor: Colors.secondary.main,
          // marginRight: 5,
          // width: "20%"
        }
      }
    >
      <RNDropDownPicker
        containerStyle={{ marginRight: 5, width: "20%" }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
        placeholder="+1"
      />
      {/* <DropDownPicker
                    containerStyle={{
                      marginRight: 5,
                      width: "20%",
                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={{}}
                    listMode="SCROLLVIEW"
                    placeholder="+1"
                    placeholderStyle={{
                      color: Colors.secondary.dark,
                      fontWeight: "bold",
                    }}
                    style={{
                      borderColor: Colors.secondary.main,
                    }}
                  /> */}
      )
    </View>
  );
};
