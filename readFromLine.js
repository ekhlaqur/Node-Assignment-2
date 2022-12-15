const readline = require("readline")
const interface=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
interface .question("please enter your name ",(Name)=>{
    console.log("Hello",Name);
    interface.close()
})