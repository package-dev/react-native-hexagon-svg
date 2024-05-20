Install: 
```js
npm install react-native-hexagon-svg
```
Example :
```tsx
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hexagon from 'react-native-hexagon-svg'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Hexagon width={200} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
```
| Prop                         | Type         | Default | Description                                                                                                                                                      |
| ---------------------------- | ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width | number      | 100    | set the diameter of the hexagon  |
 