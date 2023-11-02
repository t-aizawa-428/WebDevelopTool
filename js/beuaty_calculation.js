const inputHeight = document.querySelector('#beauty-height');
const calBtn = document.querySelector('#cal-btn');
const clearBtn = document.querySelector('#clear-btn');
const error = document.querySelector('#error-message');
const tbl = document.querySelector('.article-main__beauty-area-table');
tbl.style.visibility = "hidden";

calBtn.addEventListener('click', () => {

    const height = inputHeight.value;
    
    //入力値チェック
    let errorMsg = errorCheck(height);

    if(!errorMsg) {

        //クリア
        clear();

        //適正体重算出
        let standardWeight = ((height*height)/10000.0)*22;

        //美容体重算出
        let beautyWeight = ((height*height)/10000.0)*20;
        
        //シンデレラ体重算出
        let cinderellaWeight = ((height*height)/10000.0)*18;

        //小数点第2位で切り捨て
        standardWeight = roundDown(standardWeight,2);
        beautyWeight = roundDown(beautyWeight,2);
        cinderellaWeight = roundDown(cinderellaWeight,2);

        //行に値挿入
        tbl.rows[1].cells[0].textContent = height+'cm';
        tbl.rows[1].cells[1].textContent = standardWeight+'kg';
        tbl.rows[1].cells[2].textContent = beautyWeight+'kg';
        tbl.rows[1].cells[3].textContent = cinderellaWeight+'kg';

        //表示ON
        tbl.style.visibility ="visible";

    } else {

        //エラー処理
        error.textContent = errorMsg;
        tbl.style.visibility = "hidden";
    };

});


//クリアボタン押下
clearBtn.addEventListener('click', () => {
    clear();
});

//クリア処理
function clear() {
    
    inputHeight.value = "";
    error.textContent = "";
    
    for(let i = 0; i < 3; i++) {
        tbl.rows[1].cells[i].textContent = "";
    };

    tbl.style.visibility = "hidden";
};

//エラーチェック
function errorCheck(height) {

    let errorMsg = ""

    //空文字判定
    if(!height) {
        errorMsg += '空白です。';
    };

    //数値判定
    if(isNaN(height)) {
        errorMsg += '半角数字で入力してください。';
    };

    return errorMsg;
};

//任意の桁で切り捨て
function roundDown(num, digit) {
    let digitVal = Math.pow( 10, digit );
    return Math.floor( num * digitVal ) / digitVal;
};