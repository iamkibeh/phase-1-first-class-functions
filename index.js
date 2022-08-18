function receivesAFunction (cb){
cb();
}
// arrow function
const returnsANamedFunction = () => receivesAFunction;


function returnsAnAnonymousFunction(){
    return  function(){
        // code to be executed
    }
}

