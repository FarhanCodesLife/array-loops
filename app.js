
// callback  function
// kisi b function k andar 1 or functio as a argument bhejte he is function ko  callback funtion kete he . or is fuction ko call nhi karte 



const  arry = ['red','orange','yellow','black','white','blue'];

// foreach k ander jo funtion as a argument bhjte he is ko b call back fntion khete he 
// foreach k funtion k ander  first argumnet arry me se pora items le atta he .
// or secound argument me  array ka  index number

arry.forEach(function(items,index){
    console.log(index);
    console.log(items)
})







arry.map(function(items,index){
    console.log(index);
    console.log(items)
})