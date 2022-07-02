import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React, {useState, useEffect} from "react";
import Cpu from "./comp/cpu/Cpu"

const style = `
  background-color: transparent;
`

class App extends React.Component {
  render() {
    return (
      <Window styleSheet={style}>
        <View>
          <Cpu/>
        </View>
      </Window>
    );
  }
}

export default hot(App);
