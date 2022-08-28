let x = '';
let a = '';
let y = '';
let result = 0;
//экран моего калькулятора
const out = document.querySelector('.containerInputOutput p');

function clearAll() {
    x = '';
    y = '';
    a = '';
    result = '';
    out.textContent = 0;
}

function calculate(str) {
    var was_str;
    var sum_or_diff=function(sub, a, sign, b) {
        return sign==='-' ? a-b : +a + +b;
    };
    var mult_or_div= function(sub, a, sign, b) {
        if (sign === '*'){
            return a*b;
        }else if(sign === '/') {
            if (b === '0'){
                return 'Нельзя ÷ на 0';
            }
            else return a/b;
        }
    };
    var power= function(sub, a, b) {
        return Math.pow(a, b);
    };

    var match_power= /(-?[\d\.]+)\s*\^\s*(-?[\d\.]+)/g;

    var match_mult_div= /(-?[\d\.]+)\s*([\*\/])\s*(-?[\d\.]+)/g;

    var match_sum_diff= /(-?[\d\.]+)\s*([\+-])\s*(-?[\d\.]+)/g;

    var get_value= function(sub, exp) {
        while(exp.indexOf("^")!==-1)
        exp= exp.replace(match_power, power);
        while(match_mult_div.test(exp))
        exp= exp.replace(match_mult_div, mult_or_div);
        while(match_sum_diff.test(exp))
        exp= exp.replace(match_sum_diff, sum_or_diff);
        return exp;

    };
    while(str.indexOf("(") !== -1) // убираем скобки
    str=str.replace(/\(([^\(\)]*)\)/g, get_value);

    return get_value("", str);

};

//реализация обработчика события onclick при нажатии АС
document.querySelector('.containerNumberDel').onclick = clearAll;
//реализация обработчика события onclick при нажатии поля с кнопками
document.querySelector('.buttons').onclick = (event) => {
    // target интерфейса Event является ссылкой на объект
    //нажата не кнопка
    // classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка clearAll
    if (event.target.classList.contains('containerNumberDel')) return;

    out.textContent = '';
    let key = event.target.textContent;
    if (key !== '=') {
        if(key === '×'){
            if (y !== ''){
                a += '×';
                out.textContent = a;
                y = '';
                key = '*';
                x += key;
            }

        }
        else if(key === '÷'){
            if (y !== ''){
                a += '÷';
                out.textContent = a;
                y = '';
                key = '/';
                x += key;
            }
        }else{
            if(key === '+' || key === '-'){
                if (y !== ''){
                    a += key;
                    out.textContent = a;
                    y = '';
                    x += key;
                }
            }
            else{
                if (key === '.' && y.includes('.')){
                    x +='';
                    out.textContent = a;
                }
                else{
                x += key;
                a += key;
                y += key;
                if(a.length > 13 || result.length > 11){
                    out.textContent = 'Не помещается';
                    x = '';
                    y = '';
                    a = '';
                    result = '';
                    return;
                }
                else{
                    out.textContent = a;
                }
                }
            }
        }
    }
    else{
        //считаем итог с помощью парсинга
        result = calculate(x);
        //округление, чтобы не выходили за экран
        let ind = String(+result).indexOf('.');
        let lenstr = String(+result).length+1
        if (ind === -1){
            if (result === 'Нельзя ÷ на 0'){
                out.textContent = 'Нельзя ÷ на 0';
                x = '';
                a = '';
                result = '';
                y = '';
                return;
            }
            else if (lenstr > 12){
                out.textContent = 'Длинное число';
                x = '';
                a = '';
                result = '';
                y = '';
                return;
            }else{
                out.textContent = '=' + +result;
                a = +result;
                y = a;
            }
        }else {
            if (lenstr > 12){
                if (String((result*1).toFixed()).length > 11){
                    out.textContent = 'Длинное число';
                    x = '';
                    y = '';
                    a = '';
                    result = '';
                    return;
                }else {
                    out.textContent = '='+ +(result*1).toFixed(13-ind-2);
                    a = +(result*1).toFixed(13-ind-2);
                    y = a;
                }
            }else if (lenstr > 7 && lenstr <= 12){
                if (ind > 7){
                    out.textContent = '='+ +(result*1).toFixed(13-lenstr);
                    a = +(result*1).toFixed(13-lenstr);
                    y = a;
                }
                else{
                    out.textContent = '='+ +(result*1).toFixed(13-ind-2);
                    a = +(result*1).toFixed(13-ind-2);
                    y = a;
                }
            }else {
                out.textContent = '='+ +result;
                a = +result;
                y = a;
            }
        }
        x = String(+result);
    }
}
