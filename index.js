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

