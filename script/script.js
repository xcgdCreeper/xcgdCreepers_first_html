//检验表单填写是不是正确的
function check() {
    var item = ["name", "place", "phone", "sid",
        "major", "grade", "sex", "first-wish",
        "second-wish", "myself", "hope", "hobbies"];
    for (var i = 0; i < 12; i++) {
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
    var name = ["kaifa", "zuce", "wailian",
        "xinxuan", "chuanmei", "kepu",
        "chuangye", "chuangxin"];
    var imgs = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg",
        "images/img4.jpg", "images/img5.jpg", "images/img6.jpg",
        "images/img7.jpg", "images/img8.jpg", "images/bg.jpg"];
    //console.log(document.getElementById("sign-up").offsetTop-t);
    for (var i = 0; i < 8; i++) {
        if (t > document.getElementById(name[i]).offsetTop) {
            //console.log(document.getElementById(name[1]).offsetTop-t);
            doc1.style.backgroundImage = "URL(" + imgs[i] + ")";
            if (i < 7) {
                doc1.style.height = document.getElementById(name[i + 1]).offsetTop - t + "px";
                doc2.style.backgroundImage = "URL(" + imgs[i + 1] + ")";
                doc2.style.height=document.documentElement.clientHeight+"px";
            }
        }
    }
    if (t < document.getElementById(name[0]).offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[8] + ")";
        doc1.style.height = document.getElementById(name[0]).offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[0] + ")";
    }
    /*
    if (t < document.getElementById(name[0]).offsetTop) {
        doc1.style.backgroundImage = "URL(images/bg.jpg)";
        doc1.style.height = document.getElementById(name[0]).offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[0] + ")";
    }
    if (t > document.getElementById(name[0]).offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[0] + ")";
        doc1.style.height = document.getElementById(name[1]).offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[1] + ")";
    }
    if (t > document.getElementById(name[1]).offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[1] + ")";
        doc1.style.height = document.getElementById(name[2]).offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[2] + ")";
    }
    if (t > document.getElementById("wailian").offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[2] + ")";
        doc1.style.height = document.getElementById("xinxuan").offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[3] + ")";
    }
    if (t > document.getElementById("xinxuan").offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[3] + ")";
        doc1.style.height = document.getElementById("chuanmei").offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[4] + ")";
    }
    if (t > document.getElementById("chuanmei").offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[4] + ")";
        doc1.style.height = document.getElementById("kepu").offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[5] + ")";
    }
    if (t > document.getElementById("kepu").offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[5] + ")";
        doc1.style.height = document.getElementById("chuangye").offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[6] + ")";
    }
    if (t > document.getElementById("chuangye").offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[6] + ")";
        doc1.style.height = document.getElementById("chuangxin").offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[7] + ")";
    }
    if (t > document.getElementById("chuangxin").offsetTop) {
        doc1.style.backgroundImage = "URL(" + imgs[7] + ")";
        doc1.style.height = document.getElementById("chuangxin").offsetTop - t + "px";
        doc2.style.backgroundImage = "URL(" + imgs[7] + ")";
    }
    */
}


//浮动的一个小元素
function floatpic() {
    var y = document.documentElement.clientHeight;
    var x = document.documentElement.clientWidth;
    var pic = document.getElementById("join-img");
    pic.style.marginTop = (4 / 5) * y + "px";
    pic.style.marginLeft = (x - 200) + "px";
    if ((document.getElementById("sign-up").offsetTop - document.documentElement.scrollTop) < y - 100) {
        pic.style.display = "none";
        //console.log("hidden!");
    }
    else{
        pic.style.display="block";
    }
}


//选择技术开发部的话出现一行部门选择栏
function hiddenElement() {
    //创建选项元素
    var first_w = document.getElementById("first-wish").value;
    var second_w = document.getElementById("second-wish").value;
    var label = [];
    label[0] = document.createElement("label");
    label[1] = document.createElement("label");
    var select = [];
    select[0] = document.createElement("select");
    select[1] = document.createElement("select");

    var Value = ["ruanjian", "yingjian", "weixiu", "jingmo", "hangmo"];
    var name = ["软件组", "硬件组", "义务维修组", "静模组", "航模组"];
    var option = [];
    for (var i = 0; i < 5; i++) {
        option[i] = document.createElement("option");
        option[i].value = Value[i];
        option[i].innerHTML = name[i];
        select[0].appendChild(option[i]);
    }
    for (var i = 0; i < 5; i++) {
        option[i] = document.createElement("option");
        option[i].value = Value[i];
        option[i].innerHTML = name[i];
        select[1].appendChild(option[i]);
    }
    var td = [];
    td[0] = document.getElementById("kaifaTd1");
    td[1] = document.getElementById("kaifaTd2");
    while (td[0].firstChild != null) {
        td[0].removeChild(td[0].firstChild);
        td[1].removeChild(td[1].firstChild);
    }

    //如果选了开发部，则显示
    if (first_w == "kaiFa" && second_w == "kaiFa") {
        while (td[0].firstChild != null) {
            td[0].removeChild(td[0].firstChild);
            td[1].removeChild(td[1].firstChild);
        }
    }
    else if (first_w == "kaiFa" || second_w == "kaiFa") {
        label[0].innerHTML = "技术部第一志愿:";
        label[1].innerHTML = "技术部第二志愿:";
        //console.log(td[0].firstChild);
        if (td[0].firstChild == null) {
            td[0].appendChild(label[0]);
            td[0].appendChild(select[0]);
            td[1].appendChild(label[1]);
            td[1].appendChild(select[1]);
        }
    }
    else {
        while (td[0].firstChild != null) {
            td[0].removeChild(td[0].firstChild);
            td[1].removeChild(td[1].firstChild);
        }
    }
}