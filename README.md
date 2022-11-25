<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
РОССИЙСКОЙ ФЕДЕРАЦИИ
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Хроменков Владимир Александрович</p>
<br><br><br>
<p align = "center">Лабораторная работа №6<br>«Основы языка <strong>JavaScript</strong>»<br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2022 г.</p>

***
# <p align = "center">Оглавление</p>

- [Цели и задачи](#цели-и-задачи)
- [Решение задач](#решение-задач)
    - [JavaScript](#javascript)
    - [CSS](#css)
    - [Codewars](#codewars-solution)
- [Вывод](#вывод)

***

# <p align = "center">Задачи</p>

1. Сделайте `alert` по нажатию на кнопку.

2. Сделайте изменение текста в `input` по нажатию кнопки.

3. Сделайте вывод содержимого `input` по нажатию кнопки.

4. Сделайте кнопку по нажатию на нее, она выводит `alert` содержимое `input`, возведенное в квадрат.

5. Сделайте кнопку по нажатию, она осуществляет обмен содержимым между двумя `input`.

6. Сделайте кнопку по нажатию на нее поменяется ее текст.

7. Сделайте кнопку по нажатию на нее, она меняет цвет текста в `input`, используя свойства CSS.

8. Сделайте кнопки по нажатию на них, одна из них блокирует `input` с помощью атрибута `disabled`, а другая разблокирует.

9. Сделайте кнопку при наведении на нее появляется `alert`.

10. Сделайте кнопку при двойном на нее появляется `alert`.

11. Сделайте область с помощью `div` при наведении на нее появляется `alert`.

12. Сделайте кнопку и картинку, при нажатии кнопки картинка меняется.

13. Сделайте `alert` по нажатию на кнопку. Используя `this`.

14. Сделайте изменение текста в input по нажатию кнопки. Используя `this`.

15. Сделайте кнопку, при нажатии кнопки кнопка блокируется.

16. Сделайте кнопку, при нажатии кнопка считает количество нажатий на нее.

17. Сделайте кнопку, при нажатии курсор мышки должен измениться.

18. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id=&quot;hide&quot;

    ```html
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <input type="button" id="hider" value="Нажмите, чтобы спрятать текст"/>
        <div id="hide">Текст</div>
    <script>
        /* ваш код */
    </script>
    </body>
    </html>
    ```

19. Создайте кнопку, при клике на которую, она будет скрывать сама себя.

20. Напишите простой калькулятор.

## [Codewars](https://www.codewars.com)

21.	[The Coupon Code](https://www.codewars.com/kata/the-coupon-code)

22.	[Unlucky Days](https://www.codewars.com/kata/unlucky-days)

23.	[Angle Between Clock Hands](https://www.codewars.com/kata/angle-between-clock-hands)

24.	[My Language Skills](https://www.codewars.com/kata/my-language-skills)

25.	[Run-length encoding](https://www.codewars.com/kata/run-length-encoding)

26.	[Walk the Object Path](https://www.codewars.com/kata/walk-the-object-path)

***

# <p align = "center">Решение задач</p>

## JavaScript

```js
window.addEventListener("load", Script);

function createrP(text, id) {
    const p = document.createElement("p");
    p.innerHTML = text;
    if (typeof id !== undefined) p.id = id;

    return p;
}

// 1 задание
function Script() {

{
    document.body.appendChild(createrP("1. Сделайте alert по нажатию на кнопку."));
    const btn = document.createElement("button");
    btn.innerHTML = "alert";
    btn.addEventListener("click",()=>alert("alert"));
    document.body.appendChild(btn);
}
// 2 задание
{
    document.body.appendChild(createrP("2. Сделайте изменение текста в input по нажатию кнопки."));
    const inp = document.createElement("input");
    document.body.appendChild(inp);

    const btn = document.createElement("button");
    btn.innerHTML = "Изменить input";
    btn.addEventListener("click",()=>inp.value = "Текст изменился");
    document.body.appendChild(btn);
}
// 3 задание
{
    document.body.appendChild(createrP("3. Сделайте вывод содержимого input по нажатию кнопки."));
    const inp = document.createElement("input");
    document.body.appendChild(inp);

    const btn = document.createElement("button");
    btn.innerHTML = "Вывод содержимого";
    btn.addEventListener("click",()=>{
        document.getElementById("p3")?.remove();
        btn.after(createrP(inp.value, "p3"));
    });
    document.body.appendChild(btn);
}
// 4 задание
{
    document.body.appendChild(createrP("4. Сделайте кнопку по нажатию на нее, она выводит alert содержимое input, возведенное в квадрат."));
    const inp = document.createElement("input");
    inp.value = 5;
    document.body.appendChild(inp);

    const btn = document.createElement("button");
    btn.innerHTML = "input в квадрате";
    btn.addEventListener("click",()=>{
        alert((+inp.value)**2);
    });
    document.body.appendChild(btn);
}
// 5 задание
{
    document.body.appendChild(createrP("5. Сделайте кнопку по нажатию, она осуществляет обмен содержимым между двумя input."));
    const inp1 = document.createElement("input");
    const inp2 = document.createElement("input");
    inp1.value = "Один";
    inp2.value = "Два";
    document.body.appendChild(inp1);
    document.body.appendChild(inp2);

    const btn = document.createElement("button");
    btn.innerHTML = "Обмен";
    btn.addEventListener("click",()=>{
       let temp = inp1.value;
       inp1.value = inp2.value;
       inp2.value = temp;
    });
    document.body.appendChild(btn);
}
// 6 задание
{
    document.body.appendChild(createrP("6. Сделайте кнопку по нажатию на нее поменяется ее текст."));
    const btn = document.createElement("button");
    btn.innerHTML = "Привет";
    btn.addEventListener("click",()=>{
        btn.innerHTML === "Привет" ?  btn.innerHTML = "Пока" : btn.innerHTML = "Привет";
    });
    document.body.appendChild(btn);
}
// 7 задание
{
    document.body.appendChild(createrP("7. Сделайте кнопку по нажатию на нее, она меняет цвет текста в input, используя свойства CSS."));
    const inp = document.createElement("input");
    inp.value = "Текст";
    document.body.appendChild(inp);

    var colors = ["red", "green", "blue", "orage", "black"];

    const btn = document.createElement("button");
    btn.innerHTML = "Изменить цвет input";
    btn.addEventListener("click",()=>inp.style.color = colors[Math.floor(Math.random() * colors.length)]);
    document.body.appendChild(btn);
}
// 8 задание
{
    document.body.appendChild(createrP("8. Сделайте кнопки по нажатию на них, одна из них блокирует input с помощью атрибута disabled, а другая разблокирует."));
    const inp = document.createElement("input");
    document.body.appendChild(inp);

    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.innerHTML = "Заблокировать";
    btn2.innerHTML = "Разблокировать";
    btn1.addEventListener("click",()=>inp.disabled = true);
    btn2.addEventListener("click",()=>inp.disabled = false);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
}
// 9 задание
{
    document.body.appendChild(createrP("9. Сделайте кнопку при наведении на нее появляется alert."));
    const btn = document.createElement("button");
    btn.innerHTML = "alert при наведении";
    btn.addEventListener("mouseover", ()=>alert("alert"));
    document.body.appendChild(btn);
}
// 10 задание
{
    document.body.appendChild(createrP("10. Сделайте кнопку при двойном на нее появляется alert."));
    const btn = document.createElement("button");
    btn.innerHTML = "alert при двойном нажатии";
    btn.addEventListener("dblclick", ()=>alert("alert"));
    document.body.appendChild(btn);
}
// 11 задание
{
    document.body.appendChild(createrP("11. Сделайте область с помощью div при наведении на нее появляется alert."));
    const div = document.createElement("div");
    div.style = "border: 2px solid; width: 50px; height: 25px";
    div.addEventListener('mouseover', ()=>alert("alert"));
    document.body.appendChild(div);
}
// 12. Сделайте кнопку и картинку, при нажатии кнопки картинка меняется.
{
    document.body.appendChild(createrP("12. Сделайте кнопку и картинку, при нажатии кнопки картинка меняется."));
    const img = document.createElement("img");
    var indexCat = 1;
    img.width = 300;
    img.height = 300;

    const btn = document.createElement("button");
    btn.innerHTML = "Сменить картинку";
    btn.addEventListener("click", ()=>{
        img.src = "./img/cats/cat_" + indexCat + ".jpg";
        indexCat++;

        if(indexCat == 4) indexCat = 1;
    });

    document.body.appendChild(img);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(btn);
    document.addEventListener('DOMContentLoaded',btn.click());
}
// 13. Сделайте alert по нажатию на кнопку. Используя this.
{
    document.body.appendChild(createrP("13. Сделайте alert по нажатию на кнопку. Используя this."));
    const btn = document.createElement("button");
    btn.innerHTML = "alert при нажатии";
    btn.onclick = () => alert(this);

    document.body.appendChild(btn);
}
// 14. Сделайте изменение текста в input по нажатию кнопки. Используя this.
{
    document.body.appendChild(createrP("14. Сделайте изменение текста в input по нажатию кнопки. Используя this."));
    const inp = document.createElement("input");
    document.body.appendChild(inp);

    const btn = document.createElement("button");
    btn.innerHTML = "Изменить input";
    btn.onclick = () => inp.value = "this";
    document.body.appendChild(btn);
}
// 15.Сделайте кнопку, при нажатии кнопки кнопка блокируется.
{
    document.body.appendChild(createrP("15.Сделайте кнопку, при нажатии кнопки кнопка блокируется."));
    const btn = document.createElement("button");
    btn.innerHTML = "Блокировать кнопку";
    btn.onclick = () => btn.disabled = true;
    document.body.appendChild(btn);
}
// 16. Сделайте кнопку, при нажатии кнопка считает количество нажатий на нее.
{
    document.body.appendChild(createrP("16. Сделайте кнопку, при нажатии кнопка считает количество нажатий на нее."));
    const btn = document.createElement("button");
    btn.innerHTML = "Счетчик нажатий";
    var n = 0;
    btn.addEventListener("click", () => {
        document.getElementById('lab1').innerHTML = "\t" + ++n;
    })
    document.body.appendChild(btn);

    const lab = document.createElement("label");
    lab.innerHTML = "\t" + n;
    lab.id = "lab1"
    btn.after(lab);
}
// 17. Сделайте кнопку, при нажатии курсор мышки должен измениться.
{
    document.body.appendChild(createrP("17. Сделайте кнопку, при нажатии курсор мышки должен измениться."));
    const btn = document.createElement("button");
    var cursors = ["crosshair", "pointer", "help", "zoom-in"]
    btn.innerHTML = "Изменить курсор";
    btn.addEventListener('click', () => {
        document.body.style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
    });
    document.body.appendChild(btn);
}
// 18. Cделайте так, чтобы при клике на кнопку исчезал элемент с id="hide"
{
    document.body.appendChild(createrP("18. Cделайте так, чтобы при клике на кнопку исчезал элемент с id='hide'"));
    const btn = document.createElement("button");
    btn.innerHTML = "Нажмите, чтобы спрятать текст";
    btn.addEventListener('click', () => {
        document.getElementById('hide').hidden = true;
    });
    document.body.appendChild(btn);

    const div = document.createElement("div");
    div.id = "hide";
    div.innerHTML = "Текст";
    document.body.appendChild(div);
}
// 19. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
{
    document.body.appendChild(createrP("19. Создайте кнопку, при клике на которую, она будет скрывать сама себя."));
    const btn = document.createElement("button");
    btn.innerHTML = "Спрятать кнопку";
    btn.onclick = () => btn.hidden = true;
    document.body.appendChild(btn);
}
// 20. Напишите простой калькулятор.
{
    document.body.appendChild(createrP("20. Напишите простой калькулятор."));

    const wrap = document.createElement("div");
    wrap.className = "calc_wrapper";
    document.body.appendChild(wrap);

    const inp = document.createElement("input");
    inp.className = "calc_input";
    inp.type = "text";
    inp.readOnly = true;
    inp.value = 0;
    wrap.appendChild(inp);

    const div = document.createElement("div");
    div.className = "btn_wrapper";
    wrap.appendChild(div);

    const div1 = document.createElement("div");
    div1.className = "calc_num_div";
    div.appendChild(div1);

    const div2 = document.createElement("div");
    div2.className = "calc_sign_div";
    div.appendChild(div2);

    // 1-ый блок
    let nums = [7,8,9,'+',4,5,6,'-',1,2,3,'×','.',0,'=','÷'];
    var dot = false;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let btn = document.createElement("button");
        btn.className = "calc_btn";
        btn.innerHTML = num;

        if (num === '.'){
            btn.onclick = () =>  {
                if (dot) return;
                dot = true;
                let lastIsNumber = !isNaN(inp.value[inp.value.length-1]);
                if (lastIsNumber) inp.value += num;}
        } else if (num === '='){
            btn.onclick = () => {
                dot = false;
                let exp = inp.value.replace(/×/g, "*").replace(/÷/g, "/")
                inp.value = eval(exp);
            }
        } else
            btn.onclick = () => inp.value == '0' ? inp.value= num : inp.value+= num;
        div1.appendChild(btn);
        if((i+1)%4 == 0) div1.appendChild(document.createElement("br"));
    }
}
}
```

## CSS

```css
*{
    box-sizing: border-box;
}

.calc_wrapper{
    border: solid 1px black;
    background-color: lightgray;
    padding: 5px;
    width: 160px;
}

.calc_wrapper button{
    width: 30px;
    height: 30px;
    color: white;
}

.calc_input{
    width: 95%;
    height: 30px;
    display: block;
    color: white;
    background-color: black;
    margin: 10px auto;
    text-align: right;
}

.calc_input:focus{
    outline: 0;
}

.calc_input:hover{
    cursor: default;
}

.btn_wrapper{
    display: flex;
    justify-content: center;
    gap: 5px;
    width: fit-content;
    margin: 0 auto;
}

.calc_num_div{
    display: grid;
    gap: 5px;
    grid-template-columns: auto auto auto;
}

.calc_sign_div{
    display: flex;
    gap: 5px;
    flex-direction: column;
}

.calc_btn{
    background-color: rgb(160, 160, 160);
}

.calc_sign{
    background-color: blue;
}
```

## [Codewars Solution](https://www.codewars.com) ([Profile Link](https://www.codewars.com/users/ZFGinc))

### [The Coupon Code](https://www.codewars.com/kata/the-coupon-code)

```js
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    if (enteredCode !== correctCode)
      return false;

    let year1 = Number(currentDate.slice(-4));
    let year2 = Number(expirationDate.slice(-4));

    if (year1 > year2)
        return false;

    if (year1 < year2)
        return true;

    if (CalculateDate(currentDate) > CalculateDate(expirationDate))
        return false;

    return true;
  }

  function CalculateDate(date){

      let months = {
      January : 1,
      February : 2,
      March : 3,
      April : 4,
      May : 5,
      June : 6,
      July : 7,
      August : 8,
      September : 9,
      October : 10,
      November : 11,
      December : 12,
    }

    let parts = date.split(' ');
    parts[1] = parts[1].slice(0,-1);

    return Number(months[parts[0]] * 100 + parts[1]);
}
```

<p align = "center">
<img src = "img/1.PNG">
</p>

### [Unlucky Days](https://www.codewars.com/kata/unlucky-days)

```js
function unluckyDays(year){
  let unlucky = 0;

  for (var i = 0; i < 12; i++)
    if( new Date(year, i, 13).getDay() === 5) unlucky++;

  return unlucky;
}
```

<p align = "center">
<img src = "img/2.PNG">
</p>

### [Angle Between Clock Hands](https://www.codewars.com/kata/angle-between-clock-hands)

```js
function handAngle (date) {
    let min = date.getMinutes();
    let h = date.getHours() % 12;

    let inMinute =  Math.PI * 2 / 60;
    let inHour = Math.PI * 2 / 12;

    let hourAngle = h * inHour + min * inHour / 60;
    let minAngle = min * inMinute;

    let res = Math.abs(hourAngle - minAngle);
    if (res > Math.PI) res = Math.PI * 2 - res;

    return res;
}
```

<p align = "center">
<img src = "img/3.PNG">
</p>

### [My Language Skills](https://www.codewars.com/kata/my-language-skills)

```js
function myLanguages(results) {
    let res = {};

    for (const lang in results) {
        if (results[lang] >= 60) res[results[lang]] = lang;
    }

    return Object.entries(res).sort((a, b) => b[0] - a[0]).map(record => record[1]);
}
```

<p align = "center">
<img src = "img/4.PNG">
</p>

### [Run-length encoding](https://www.codewars.com/kata/run-length-encoding)

```js
var runLengthEncoding = function(str){
    let res = [];
    let last = str[0], count = 1;
    for (let i = 1; i < str.length; i++) {

        if (str[i] !== last){
            res.push([count,last]);
            count = 1;
            last = str[i];
        } else if (str[i] === last) count++;

      if (i === str.length - 1) res.push([count,last]);
    }
    return res;
  }
```

<p align = "center">
<img src = "img/5.PNG">
</p>

### [Walk the Object Path](https://www.codewars.com/kata/walk-the-object-path)

```js
function find(object, path) {
  let arrPath = path.split('.')

  for(let item of arrPath) {

    if (object.hasOwnProperty(item))
      object = object[item]
    else
    {
      object = undefined
      break
    }

  }
  return object
}
```

<p align = "center">
<img src = "img/6.PNG">
</p>

***

# <p align = "center">Вывод</p>

Выполнил *лабораторную работу №6*, совершенствую навыки работы с языком `JavaScript`, решая все более и более сложные задачи.
