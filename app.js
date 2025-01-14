document.getElementById('fortuneBtn').addEventListener('click', function() {
    const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    const resultElement = document.getElementById('fortuneResult');
    resultElement.textContent = randomFortune;
    resultElement.className = 'fortune-result ' + randomFortune;
});
