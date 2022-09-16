const aCar = {
    owner : "Joe Bloggs",
    type : {model : "Corolla",
  make: "Toyota",
CC:1.8},
    registration :{   year: 201,code:"WD",number:1058}
  };
  
  console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log("Reg. = "+ aCar.registration.year + "-"+ aCar.registration.code + "-" + aCar.registration.number)