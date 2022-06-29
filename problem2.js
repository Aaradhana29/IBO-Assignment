// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniquePrducts(){

    let ans = []
    let ref = []
    for(let i=0;i<listOfProducts.length-1;i++){
    
        for(let j=i+1;j<listOfProducts.length;j++){
           if(!listOfProducts[j].visited&&listOfProducts[i].productName===listOfProducts[j].productName){
           listOfProducts[i].quantity += listOfProducts[j].quantity
           listOfProducts[j].find = true
           listOfProducts[j].visited = true
           }
        }
    }
    for(let i=0;i<listOfProducts.length;i++){
    if(!listOfProducts[i].find){
    ans.push(listOfProducts[i])
    }
    }
    console.log(ans) 
    }
    
    getUniquePrducts()