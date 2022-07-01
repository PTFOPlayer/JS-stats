import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React, {useState, useEffect} from "react";
import { setInterval } from "timers";
var osutils = require("os-utils");
function Counter() {

  let cpu = 0
  
  const [cpuUsage, setCpuUsage] = useState(cpu)
  useEffect(() => {
    setInterval(() => {
        osutils.cpuUsage(function(v: number) {cpu = v * 100});
        setCpuUsage(cpu)
    },1000)
  }, [])
  return (
    <Text>CPU usage: {cpuUsage}</Text>
  )
}

class App extends React.Component {
  render() {
    return (
      <Window>
        <View>
          <Counter/>
        </View>
      </Window>
    );
  }
}

export default hot(App);
