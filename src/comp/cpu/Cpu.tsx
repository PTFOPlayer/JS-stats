import React, {useState, useEffect} from "react"
import { Text} from "@nodegui/react-nodegui";
import { setInterval } from "timers";
var osutils = require("os-utils");
function Cpu() {

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

export default Cpu