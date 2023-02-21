const os = require('os');
const si = require('systeminformation');
 //console.log(si.currentLoad());
console.log(os.type())
console.log(os.platform() )   
console.log(os.version());   // for os version 
console.log(os.freemem())  
 // for free memory

 console.log(os.arch())
 console.log(os.totalmem()) 



// to get information of cpu
si.cpu().then(data => console.log(data))     // for cpu information
si.system().then(data => console.log(data))    // for system information 
si.battery().then(data => console.log(data)) // for battery information