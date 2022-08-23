function myMoneybox (){
    let saveCoins = 0;

    function countMoney(coin){
        saveCoins += coin;
        console.log (`Tienes $${saveCoins}`);
    }
    return countMoney;
}

const moneyBox = myMoneybox();

moneyBox(5);
moneyBox(5);
moneyBox(5);

const moneyBoxAna = myMoneybox();

moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(30);
