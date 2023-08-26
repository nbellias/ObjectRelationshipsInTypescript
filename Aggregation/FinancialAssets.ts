interface FinancialAsset {
    name: string;
    type: string;
    quantity: number;
    pricePerUnit: number;
  }
  
  class Portfolio {
    assets: FinancialAsset[] = [];
  
    addAsset(asset: FinancialAsset): void {
      this.assets.push(asset);
    }
  
    calculateTotalValue(): number {
      return this.assets.reduce((total, asset) => total + asset.quantity * asset.pricePerUnit, 0);
    }
  }
  
  // Creating financial assets
  const assets: FinancialAsset[] = [
    { name: "Stock A", type: "Stock", quantity: 50, pricePerUnit: 100 },
    { name: "Bond X", type: "Bond", quantity: 10, pricePerUnit: 500 },
    { name: "Stock B", type: "Stock", quantity: 30, pricePerUnit: 75 },
    { name: "ETF Y", type: "ETF", quantity: 20, pricePerUnit: 120 },
  ];
  
  // Creating a portfolio
  const portfolio = new Portfolio();
  
  // Adding assets to the portfolio
  assets.forEach(asset => {
    portfolio.addAsset(asset);
  });
  
  // Calculating and displaying the total value
  const totalValue = portfolio.calculateTotalValue();
  console.log("Portfolio Assets:");
  portfolio.assets.forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.quantity} units x $${asset.pricePerUnit}`);
  });
  console.log(`Total Portfolio Value: $${totalValue}`);
  