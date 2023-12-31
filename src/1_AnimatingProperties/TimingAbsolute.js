// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

// export default class animations extends Component {
//   state = {
//     animation: new Animated.Value(0),
//   };
//   startAnimation = () => {
//     Animated.timing(this.state.animation, {
//       toValue: 300,
//       duration: 1500
//     }).start(() => {
//       this.state.animation.setValue(0);
//     });
//   }

//   render() {
//     const animatedStyles = {
//       top: this.state.animation,
//       left: this.state.animation,
//     }
//     return (
//       <View style={styles.container}>
//         <TouchableWithoutFeedback onPress={this.startAnimation}>
//           <Animated.View style={[styles.box, animatedStyles]} />
//         </TouchableWithoutFeedback>
//       </View>
//     );

//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     position: "absolute",
//     width: 150,
//     height: 150,
//     backgroundColor: "tomato",
//   }
// });

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolate,
  useDerivedValue,
  interpolateColor,
  withSpring,
} from "react-native-reanimated";

export default function animations() {
  const sharedVallue = useSharedValue(0);

  const startAnimation = () => {
    sharedVallue.value = 300;
  };

  const animatedStyles = useAnimatedStyle(() => {
    const config = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    //C1:
    // return {
    //   top: sharedVallue.value,
    //   left: sharedVallue.value,
    // };
    //C2:
    return {
      top: withTiming(sharedVallue.value, config),
      left: withTiming(sharedVallue.value, config),
    };
  });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    position: "absolute",
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});
