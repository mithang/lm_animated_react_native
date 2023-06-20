// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import { View, Button } from 'react-native';
// import React from 'react';

// export default function AnimatedStyleUpdateExample(props) {
//   const randomWidth = useSharedValue(10);

//   const config = {
//     duration: 500,
//     easing: Easing.bezier(0.5, 0.01, 0, 1),
//   };

//   const style = useAnimatedStyle(() => {
//     console.log("useAnimatedStyle: ",randomWidth.value);
//     return {
//       width: withTiming(randomWidth.value, config),
//     };
//   });
//   console.log("randomWidth: ",randomWidth);
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//       }}>
//       <Animated.View
//         style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
//       />
//       <Button
//         title="toggle"
//         onPress={() => {
//           randomWidth.value = Math.random() * 350;
//         }}
//       />
//     </View>
//   );
// }
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{marginTop:100}}>
      <Text numberOfLines={1} ellipsizeMode="head">
        This is a long text that will be truncated, and the ellipsis will appear at the beginning.
      </Text>
      <Text numberOfLines={1} ellipsizeMode="middle">
        This is a long text that will be truncated, and the ellipsis will appear in the middle.
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail">
        This is a long text that will be truncated, and the ellipsis will appear at the end.
      </Text>
    </View>
  );
};

export default App;
