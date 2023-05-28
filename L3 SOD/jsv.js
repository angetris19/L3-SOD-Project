function convert() {
    // Get the input values
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    // Define the conversion rates for each currency
    var conversion_rates = {
        "USD": {
            "EUR": 0.93,
            "GBP": 0.81,
            
        },
        "EUR": {
            "USD": 1.07,
            "GBP": 0.87,
        },
        "GBP": {
            "USD": 1.15,
            "EUR": 1.23,
        }
         
    // Convert the amount to the target currency
    var rate = conversion_rates[from][to];
    var converted_amount = amount * rate;

    // Display the result
    document.getElementById("result").innerHTML = amount + " " + from + " = " + converted_amount.toFixed(2) + " " + to;
}
