
//===================================================================================//
//---------------------------------transaction controller----------------------------//
//===================================================================================//
var TransactionEntity = require('../../model/order/transaction-entity');

module.exports.postTransaction = (req,res) =>{
    var transaction = req.body;
    var transactionEntity = new TransactionEntity();

    for(key in transaction){
        transactionEntity[key] = transaction[key];
    }

    transactionEntity.save(err => {
        if(err){
            res.status(200).json({status:"success",message:"Transaction saved successfully"});
        }else{
            res.status(200).json({status:"failed",message:"ERROR: Transaction was not saved"});
        }
    });
}

module.exports.getTransactions = (req,res) =>{
    
    TransactionEntity.find({}, data => res.status(200).json(data));
}