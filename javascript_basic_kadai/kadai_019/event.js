// textというidを持つHTML要素を取得し定数に代入する
const textElement = document.getElementById('text');
// btnというidを持つHTML要素を取得し定数に代入する
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理
buttonElement.addEventListener('click', function() {
    // テキストを書き換える
    textElement.textContent = 'ボタンをクリックしました';
});


