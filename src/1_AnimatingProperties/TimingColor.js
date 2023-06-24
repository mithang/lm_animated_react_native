// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

// export default class animations extends Component {
//   state = {
//     animation: new Animated.Value(0),
//   };
//   startAnimation = () => {
//     Animated.timing(this.state.animation, {
//       toValue: 1,
//       duration: 1500
//     }).start(() => {
//       this.state.animation.setValue(0);
//     });
//   }

//   render() {
//     const boxInterpolation = this.state.animation.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
//     });

//     const colorInterpolation = this.state.animation.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["rgb(99,71,255)", "rgb(255,99,71)" ]
//     });

//     const boxAnimatedStyles = {
//       backgroundColor: boxInterpolation
//     };

//     const textAnimatedStyles = {
//       color: colorInterpolation
//     }

//     return (
//       <View style={styles.container}>
//         <TouchableWithoutFeedback onPress={this.startAnimation}>
//           <Animated.View style={[styles.box, boxAnimatedStyles]}>
//             <Animated.Text style={textAnimatedStyles}>Hello Animation!</Animated.Text>
//           </Animated.View>
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
//     width: 150,
//     height: 150,
//     alignItems: "center",
//     justifyContent: "center",
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
    //C1:
    // sharedVallue.value = 1;
    //C2:
    // sharedVallue.value = withTiming(1, {
    //   duration: 200,
    // });
    //C3:
    sharedVallue.value = withSpring(1, {
      duration: 200,
    });
    
  };
  //C1:
  const backgroundColor = useDerivedValue(() => {
    //Ap dung gia tri
    //return interpolate(sharedVallue.value, [0, 1],  ["rgb(255,99,71)", "rgb(99,71,255)"]);
    //Ap dung mau sac
    return interpolateColor(
      sharedVallue.value,
      [0, 1],
      ["rgb(255,99,71)", "rgb(99,71,255)"]
    );
  });

  const boxAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  //C2: Rut gon hon
  const textAnimatedStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      sharedVallue.value,
      [0, 1],
      ["rgb(99,71,255)", "rgb(255,99,71)"]
    );
    return {
      color,
    };
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}>
          <Animated.Text style={textAnimatedStyles}>
            Hello Animation!
          </Animated.Text>
        </Animated.View>
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
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
