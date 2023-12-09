/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let uniqueCategory = [];
  let priceEachCategory = [];
  transactions.forEach(transaction => {
    let currentPrice = transaction.price;
    let currCategory = transaction.category;
    if(uniqueCategory.includes(currCategory)){
      let index = uniqueCategory.indexOf(currCategory);
      let finalPrice = priceEachCategory[index]+currentPrice;
      priceEachCategory[index] = finalPrice;
    }
    else{
      uniqueCategory.push(currCategory);
      priceEachCategory.push(currentPrice);
    }
  });
  let expenditure = [];
  for(let i = 0;i<uniqueCategory.length;i++){
    let currentObject = {"category":uniqueCategory[i],"totalSpent":priceEachCategory[i]};
    expenditure.push(currentObject);
  }
  

  return expenditure;
}

module.exports = calculateTotalSpentByCategory;
