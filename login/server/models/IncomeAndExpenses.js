const mongoose= require('mongoose')
const {Schema} =mongoose

const IncomeAndExpenses = new Schema({
    inputTypeOne: String,
    inputTypeTwo: String,
    inputTypeThree: String,
});

const IncomeExpensesModel  = mongoose.model('IncomeOutcome', IncomeAndExpenses );
module.exports = IncomeExpensesModel;