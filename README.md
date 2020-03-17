# Bamazon App

Jessie Taylor: Developer

Link to github repository: https://github.com/Jessiejtaylor/bamazon

This application implements a simple command line based storefront (mocked after Amazon) using the npm inquirer package and the MySQL database backend together with the npm mysql package.

<b>How To Use:</b>

The Bamazon Customer Portal allows users to view the current items available for purchase. The user will be prompted to enter the item id# and the number of items they want to buy. If the item is in stock, the order will then be completed and the user will see the total cost of their shopping cart.

<b>Bamazon Customer Portal</b><br>

- The customer portal allows users to see a table of items available for purchase. Each item has an item ID, product name, department name, price, and stock quantity.

Command in terminal: "node bamazonCustomer"

![Main table](./images/photo1.png)

After the app presents the table of data, it's going to ask two questions at the bottom. 

- What is the ID of the product you want to buy?
- How many units of the product do you want to buy?

![Questions](./images/photo2.png)

When you answer the two questions, the app will multiply the number of units (numUnits) by the price to give the total cost of purchase which in this case is $116. 

The app also adjusts stock_quantity for the retailer manager.

If the user requests a value above the inventory amount, the app will tell the user that they've selected an "insufficient quantity". 

![Insufficient Quantity](./images/photo3.png)

<b>Tech used:</b>

- MySQL
- Inquirer
- Node