import React, { FC, useState } from "react";
import { Button, Text, View } from "react-native";

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={{margin: 30, textAlign:'center', fontSize: 25}}>Counter: {counter}</Text>
      <View style={{flexDirection: 'row'}}>
      <Button
        title="Increment"
        onPress={() => setCounter(counter + 1)}
        testID="incrementButton"
      />
       <Button
        title="Decrement"
        onPress={() => setCounter(counter - 1)}
        testID="decrementButton"
      />
      </View>
    </View>
  );
};

export default Counter;