function calc() {
    let base = document.getElementById('base').value;
    let molecule = document.getElementById('molecule').value;
    let denominator = document.getElementById('denominator').value;
    let money = document.getElementById('money').value;
    let result = document.getElementById('result');
    if (molecule <= denominator) {
        result.innerHTML = "分子は分母より大きい値を入力してください";
        return;
    }
    let losses = base * 3 / 2;
    let resText = "1: " + base + "<br>";
    base *= (molecule - denominator) / denominator;
    base = Math.floor(base);
    resText += "2: " + base + "<br>";
    // log(底) {真数}
    // log(molecule/denominator) {2*molecule*money/3*denominator*base}
    let n = Math.floor(Math.log(2 * molecule * money / 3 / denominator / base) / Math.log(molecule / denominator));
    for (let i = 2; i < n; i++) {
        base *= molecule / denominator;
        base = Math.floor(base);
        resText += (i + 1) + ": " + base + "<br>";
    }
    for (let i = 2; i < n; i++) {
        losses *= molecule / denominator;
        losses = Math.floor(losses);
    }
    let percent = 100;
    for (let i = 0; i < n; i++) {
        percent *= 2/3;
    }
    resText += "連続で負けることができる回数: " + (n - 1) + "回<br>その時の負け金: " + losses + "円<br>負ける確率: " + percent + "%";
    result.innerHTML = resText;
}
