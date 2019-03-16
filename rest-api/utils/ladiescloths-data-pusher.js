var LadiesclothsEntity=require('../model/ladiescloths-entity')

module.exports=function(){

    var ladiescloths =new LadiesclothsEntity();
    ladiescloths.pid="100";
    ladiescloths.subtitle="buy one get one 50% offer for entire store";
    ladiescloths.description="Ladies cloth";
    ladiescloths.title="Hurry Up";
   
    
    ladiescloths.save(function(err){
        if(!err) {
            console.log(err);
        }
        else{
            console.log("ladies clothes not save in db");
        }
    });
}
