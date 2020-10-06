function changePic(){
    ($("#kaifa h3").fadeOut());
}

//检验表单填写是不是正确的
function check() {
    var item = ["name", "phone", "sid",
        "major", "grade", "sex", "first-wish",
        "second-wish", "myself", "hope", "hobbies"];
    for (var i = 0; i < 11; i++) {
        if (document.forms["form"][item[i]].value == "") {
            alert("请完成报名表");
            return false;
        }
    }
    var first_w = document.getElementById("first-wish").value;
    var second_w = document.getElementById("second-wish").value;
    var phone = document.getElementById("phone").value;
    var sid = document.getElementById("sid").value;
    if (parseFloat(phone).toString() == "NaN") {
        alert("电话号码必须为数字");
        return false;
    }
    if (parseFloat(sid).toString() == "NaN") {
        alert("学号必须为数字");
        return false;
    }
    if (first_w == "" || second_w == "") {
        alert("请填写第一志愿和第二志愿");
        return false;
    }
    if (first_w == second_w) {
        alert("两个志愿不能为同一个");
        return false;
    }
}

//变换背景图片
function ScollPostion() {
    floatpic();
    var t, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        t = document.body.scrollTop;
        h = document.body.scrollHeight;
    }
    var doc1 = document.getElementById("bg1");
    var doc2 = document.getElementById("bg2");
    //var num = t/document.documentElement.clientHeight;
    var name = ["kaifa", "zuce", 
    "wailian","xinxuan", 
    "kepu","shuangchuang"];
    var imgs = ["images/img1.jpg", "images/img2.jpg", 
    "images/img3.jpg","images/img4.jpg", 
    "images/img5.jpg", "images/img6.jpg",
    "images/bg.jpg"];
    //console.log(document.getElementById("sign-up").offsetTop-t);
    for (var i = 0; i < 6; i++) {
        if (t > document.getElementById(name[i]).offsetTop) {
            //console.log(document.getElementById(name[1]).offsetTop-t);
            doc1.style.backgroundImage = "URL(" + imgs[i] + ")";
            if (i < 5) {
                doc1.style.height = document.getElementById(name[i + 1]).offsetTop - t + "px";
                doc2.style.backgroundImage = "URL(" + imgs[i + 1] + ")";
                doc2.style.height = document.documentElement.clientHeight + "px";
            }
        }
    }
    if (t < document.getElementById(name[0]).offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[6] + ")";
        doc1.style.height = document.getElementById(name[0]).offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[0] + ")";
    }
}


//浮动的元素
function floatpic() {
    var y = document.documentElement.clientHeight;
    var x = document.documentElement.clientWidth;
    var pic1 = document.getElementById("join-img");
    pic1.style.marginTop = (9 / 10) * y -20+ "px";
    pic1.style.marginLeft = (x - 60) + "px";
    //console.log(document.body.scrollTop);
    if (((document.getElementById("sign-up").offsetTop - document.body.scrollTop) < y) || ((document.getElementById("sign-up").offsetTop - document.documentElement.scrollTop) < y)) {
        pic1.style.display = "none";
    }
    else {
        pic1.style.display = "block";
    }

    var pic2=document.getElementById("up-img");
    pic2.style.marginTop = (9 / 10) * y -60+"px";
    pic2.style.marginLeft = (x - 50) + "px";
    //console.log(document.documentElement.scrollTop);
    if ((document.body.scrollTop < 50) && (document.documentElement.scrollTop < 50)) {
        pic2.style.display = "none";
    }
    else {
        pic2.style.display = "block";
    }
}


//选择技术开发部的话出现一行部门选择栏
function hiddenElement() {
    //创建选项元素
    var first_w = document.getElementById("first-wish").value;
    var second_w = document.getElementById("second-wish").value;
    var label = [];
    label[0] = document.createElement("label");
    //label[1] = document.createElement("label");
    var select = [];
    select[0] = document.createElement("select");
    select[0].name = "select"; 
    //select[1] = document.createElement("select");

    var Value = ["ruanjian", "yingjian", "weixiu", "jingmo", "hangmo"];
    var name = ["软件组", "硬件组", "义务维修组", "静模组", "航模组"];
    var option = [];
    for (var i = 0; i < 5; i++) {
        option[i] = document.createElement("option");
        option[i].value = Value[i];
        option[i].innerHTML = name[i];
        select[0].appendChild(option[i]);
    }
    /*
    for (var i = 0; i < 5; i++) {
        option[i] = document.createElement("option");
        option[i].value = Value[i];
        option[i].innerHTML = name[i];
        select[1].appendChild(option[i]);
    }
    */
    var td = [];
    td[0] = document.getElementById("kaifaTd1");
    //td[1] = document.getElementById("kaifaTd2");
    while (td[0].firstChild != null) {
        td[0].removeChild(td[0].firstChild);
        //td[1].removeChild(td[1].firstChild);
    }

    //如果选了开发部，则显示
    if (first_w == "kaiFa" && second_w == "kaiFa") {
        while (td[0].firstChild != null) {
            td[0].removeChild(td[0].firstChild);
            //td[1].removeChild(td[1].firstChild);
        }
    }
    else if (first_w == "kaiFa" || second_w == "kaiFa") {
        label[0].innerHTML = "技术开发部志愿:";
        //label[1].innerHTML = "技术部第二志愿:";
        //console.log(td[0].firstChild);
        if (td[0].firstChild == null) {
            td[0].appendChild(label[0]);
            td[0].appendChild(select[0]);
            //[1].appendChild(label[1]);
            //td[1].appendChild(select[1]);
        }
    }
    else {
        while (td[0].firstChild != null) {
            td[0].removeChild(td[0].firstChild);
            //td[1].removeChild(td[1].firstChild);
        }
    }
}
