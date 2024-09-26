function calc() {
    let base = document.getElementById('base').value;
    let molecule = document.getElementById('molecule').value;
    let denominator = document.getElementById('denominator').value;
    let money = document.getElementById('money').value;
    let result = document.getElementById('result');
    let losses = base * 3 / 2;
    let plosses = losses;
    let u = 3 / 2;
    let v = molecule / denominator;
    // let n = [(log(money)-log(u*base))/log(1+uv)]+1
    let n = Math.floor((Math.log(money) - Math.log(u * base)) / Math.log(1 + u * v)) + 1;
    let text = `1: ${base} 負けた場合: ${Math.floor(plosses)}<br>`;
    base *= (u * v);
    for (let i = 0; i < n - 1; i++) {
        base *= (1 + u * v);
        text += `${i + 2}: ${Math.floor(base)} 負けた場合: -${Math.floor(plosses + base*u)} 勝った場合: ${Math.floor(base * 2.8 - plosses)}<br>`;
        plosses += base*u;
    }
    for (let i = 0; i < n - 1; i++) {
        losses *= (1 + u * v);
    }
    let percentage = 100;
    for (let i = 0; i < n; i++) {
        percentage *= 2;
    }
    for (let i = 0; i < n; i++) {
        percentage /= 3;
    }
    text += `損失: ${Math.floor(losses)}<br>`;
    text += `継続できる回数: ${n}回<br>`;
    text += `すべてを失う確率: ${percentage}%<br>`;
    result.innerHTML = text;
}
