const mongoose= require('mongoose')
const {Schema} =mongoose

const Income = new Schema({
    inputTypeOne: String,
    inputTypeTwo: String,
    inputTypeThree: String,
});

const IncomeExpensesModel  = mongoose.model('Income', Income );
module.exports = IncomeExpensesModel;