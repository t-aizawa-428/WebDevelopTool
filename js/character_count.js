const countBlank = document.querySelector('#countblank');
const countNotBlank = document.querySelector('#countnotblank');
const resetBtn = document.querySelector('.article-main__text-area-btn');
const inputText = document.querySelector('.article-main__text-area');

//文字カウント
inputText.addEventListener('keyup', () => {
    countBlank.value = inputText.value.length;
    countNotBlank.value = inputText.value.replace(/\s+/g, "").length;
});

//初期化
resetBtn.addEventListener('click', () => {
    inputText.value = "";
    countBlank.value = "0";
    countNotBlank.value = "0";
});



