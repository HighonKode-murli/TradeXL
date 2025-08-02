// seedTrades.js
import mongoose from 'mongoose';
import Trade from './models/trade.model.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tradexl';

const trades = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    date: new Date('2024-07-01'),
    buySell: 'buy',
    shares: 50,
    price: 180,
    shaper: 'Growth',
    tactical: 'Tech',
    closeTrade: false,
    openTrade: true
  },
  {
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    date: new Date('2024-06-15'),
    buySell: 'buy',
    shares: 10,
    price: 700,
    shaper: 'Momentum',
    tactical: 'EV',
    closeTrade: false,
    openTrade: true
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corp.',
    date: new Date('2024-05-20'),
    buySell: 'sell',
    shares: 20,
    price: 320,
    shaper: 'Value',
    tactical: 'Cloud',
    closeTrade: true,
    openTrade: false
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await Trade.deleteMany({});
    await Trade.insertMany(trades);
    console.log('Sample trades inserted');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
