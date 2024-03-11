// Question no 31   No Users

let userNames1: string[] = ['asif','yasir','admin','yaseen','atif'];

while(userNames1.pop()){
}
userNames1.push('asif')

console.log(userNames1) // now we have empty list....

if (Object.keys(userNames1).length === 0){
    console.log('We need to find some users!')
}
