const btn = document.getElementById('btn');
const result = document.getElementById('result');

const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];

btn.addEventListener('click', () => {
 const randomIndex = Math.floor(Math.random() * fortunes.length);
 const fortune = fortunes[randomIndex];
 result.textContent = fortune;
});

