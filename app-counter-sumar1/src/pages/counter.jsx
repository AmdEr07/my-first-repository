let counterValue = 0

function Counter() {
   counterValue++
   return <div>{counterValue}</div>
}

export default Counter