var mysql = require("mysql")
var inquirer = require("inquirer")
require("console.table")
var totalPurchase = 0
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Jessie",
    password: "JumpCrew",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) {
        console.log(err)
    }
    console.log("connection id", connection.threadId)
    askQuestions()
})

function askQuestions() {
  connection.query("select * from products", function(error,data){
       console.table(data)
       inquirer.prompt([{
        type: "input",
        message: "What is the ID of the product you want to buy?",
        name: "item_id"
    },
    {
        type: "input",
        message: "How many units of the product do you want to buy?",
        name: "numUnits"
    }

    ]).then(function (userData) {
        

        console.log(userData)
          
  connection.query("select * from products where item_id=?",userData.item_id, function(error,data){
           console.table(data)
        //    console.log(data[0].stock_quantity)
//         var array=[{name:"phil"},{name:"jessie"}]
//         array.name
//         array[1].name
// //[
    //{
    //  item_id:1,
    //  product_name: "Skirt",
    //  department:"apparel",
    //  price: 19,
    //  stock_quantity:4999
//     },
//{
    //  item_id:1,
    //  product_name: "Skirt",
    //  department:"apparel",
    //  price: 19,
    //  stock_quantity:4999
//     }

// ]

          if (userData.numUnits>data[0].stock_quantity) {
              console.log("Insufficient quantity!")
          }
           var newQuantity=data[0].stock_quantity - userData.numUnits
           var statement =     connection.query("update products set stock_quantity = ? where item_id=?",[newQuantity,userData.item_id], function(error,data2){


            totalPurchase = totalPurchase +  data[0].price * userData.numUnits
            console.log("The total cost of purchase is ",totalPurchase)

              askQuestions()
           })  
        //    console.log(statement.sql)

      } )

    
    })

  })


   
}
