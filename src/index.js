// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let result = {};
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result
    }
    if (currency > 0){
        let h = 0, //50
        q = 0, //25
        d = 0, //10
        n = 0, //5
        p = 0; //1


        h = (currency - currency%50) /50
 
        if (h > 0){
            result.H=h;
        }
        currency = currency%50;

        if (currency > 0) {

            q = (currency - currency%25) / 25
            if (q > 0) {
                result.Q = q;
            }        
        }

        currency = currency%25;
        
        if (currency > 0) {
            d = (currency - currency % 10) / 10
            if (d > 0) {
                result.D = d;
            }        
        }

        currency = currency%10;
        
        if (currency > 0) {
            n = (currency - currency % 5) / 5;
            if (n > 0) {
                result.N = n;
            }        
        }

        currency = currency%5;
        
        if (currency > 0) {
            result.P = currency;
        }
    }

    return result;
}
