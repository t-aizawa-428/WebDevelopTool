const inputHeight = document.querySelector('#bmi-height');
const inputWeight = document.querySelector('#bmi-weight');
const calBtn = document.querySelector('#cal-btn');
const clearBtn = document.querySelector('#clear-btn');
const error = document.querySelector('#error-message');
const tbl = document.querySelector('.article-main__bmi-area-table');

calBtn.addEventListener('click', () => {

    const height = inputHeight.value;
    const weight = inputWeight.value;

    //入力値チェック
    let errorMsg = errorCheck(height, weight);

    if(!errorMsg) {

        //クリア
        clear();

        //BMI算出
        let bmi = weight/((height*height)/10000.0);

        //適正体重算出
        let standardWeight = ((height*height)/10000.0)*22;

        //小数点第2位で切り捨て
        bmi = roundDown(bmi,2);
        standardWeight = roundDown(standardWeight,2);

        //行数
        let bmiRows;

        //BMI行判定
        if(bmi < 18.5) {
            bmiRows = 1;
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiRows = 2;
        } else if (bmi >= 25 && bmi < 30) {
            bmiRows = 3;
        } else if (bmi >= 30 && bmi < 35) {
            bmiRows = 4;
        } else if (bmi >= 35 && bmi < 40) {
            bmiRows = 5;
        } else if (bmi >40) {
            bmiRows = 6;
        }

        //行に値挿入
        tbl.rows[bmiRows].cells[2].textContent = standardWeight;
        tbl.rows[bmiRows].cells[3].textContent = bmi;


    } else {

        //エラー処理
        error.textContent = errorMsg
    };

});

//クリアボタン押下
clearBtn.addEventListener('click', () => {
    clear();
});


//クリア処理
function clear() {

    inputHeight.value = "";
    inputWeight.value = "";
    error.textContent = "";
    
    for(let i = 0; i < 6; i++) {

        let bmiRows = i + 1;
        tbl.rows[bmiRows].cells[2].textContent = "";
        tbl.rows[bmiRows].cells[3].textContent = "";
    };
};

//エラーチェック
function errorCheck(height, weight) {

    let errorMsg = ""

    //空文字判定
    if(!height || !weight) {
        errorMsg += '空白です。';
    };

    //数値判定
    if(isNaN(height) || isNaN(weight)) {
        errorMsg += '半角数字で入力してください。';
    };

    return errorMsg;
};

//任意の桁で切り捨て
function roundDown(num, digit) {
    let digitVal = Math.pow( 10, digit );
    return Math.floor( num * digitVal ) / digitVal;
};