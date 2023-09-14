const fs = require('fs'); //using file system module, allow to access to files
const PORT = 3307;
const app = require('express');


console.log(PORT, "This is the server side")

fs.readFile('test.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})



// function CreateUser(){
//     <View>
//         <div className="background">
//             <div className="shape">
//                 <div className="shape">
//                     <h1>Create User</h1>
//                 </div>
//             </div>
//         </div>
//     </View>
// }
// CreateUser();

