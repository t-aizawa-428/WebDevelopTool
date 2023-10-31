const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const passBase  = alphabet + alphabetUpper + numbers;

const passwordText = document.querySelector('#password-text');

const createBtn = document.querySelector('.article-main__password-area-btn');
const textCount = 12;

//読み込み時に実行
window.onload = newCreatePasswordList();

//パスワードリスト新規作成
function newCreatePasswordList() {

    for (let i = 0; i < textCount; i++) {

        const password = getPassword();

        const content = `<input class="article-main__password-text" type="text" value="${password}">`;
        passwordText.insertAdjacentHTML('beforeend', content);
        
    }
};

//パスワード更新
function updatePassword() {

    let passwordTexts = document.querySelectorAll('.article-main__password-text');

    passwordTexts.forEach(pass => {

        pass.value = getPassword();

    });
};

//パスワード取得
function getPassword() {

    let pass='';
    let len = 8;

    //文字数取得
    let radioList = document.querySelectorAll(`input[type = 'radio']`);
    radioList.forEach(radio => {
        if(radio.checked) {
            len = radio.value;
            console.log(radio.value);
        };
    });

    //パスワード作成
    for (let j = 0; j < len; j++) {
        pass += passBase.charAt(Math.floor(Math.random() * passBase.length));
    }

    return pass;
};

//初期化
createBtn.addEventListener('click', () => {
    updatePassword();
});







