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
    let u = 3 / 2;
    let v = molecule / denominator;
    // let n = [(log(money)-log(u*base))/log(1+uv)]+1
    let n = Math.floor((Math.log(money) - Math.log(u * base)) / Math.log(1 + u * v)) + 1;
    let text = `1: ${base}<br>`;
    base *= (u * v);
    for (let i = 0; i < n - 1; i++) {
        let x = base;
        for (let j = 0; j < i; j++) {
            x *= (1 + u * v);
        }
        text += `${i + 2}: ${Math.floor(x)}<br>`;
    }
    for (let i = 0; i < n - 1; i++) {
        losses *= (1 + u * v);
    }
    text += `損失: ${Math.floor(losses)}<br>`;
    text += `継続できる回数: ${n}`;
}
