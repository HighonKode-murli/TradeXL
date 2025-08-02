import {Router} from 'express';
import TradeController from '../controllers/trade.controller.js';
const router = Router()


//create new trade
router.route('/trades/add')
    .post(TradeController.createTrade)

// get all trades
router.route('/trades')
    .get(TradeController.getAllTrades)

router.route('trades/:id')
    .get(TradeController.getOneTrade)
    .put(TradeController.editTrade)
    .delete(TradeController.deleteOneTrade)


export default router