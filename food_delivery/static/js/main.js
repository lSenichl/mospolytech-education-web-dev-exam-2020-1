$(document).on('click', '.number-spinner button', function () {

    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});

let priceArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let finPr;

$(document).on('click', '.number-spinner button', function () {
    let m1 = document.getElementById('m1').textContent;
    let m2 = document.getElementById('m2').textContent;
    let m3 = document.getElementById('m3').textContent;
    let m4 = document.getElementById('m4').textContent;
    let m5 = document.getElementById('m5').textContent;
    let m6 = document.getElementById('m6').textContent;
    let m7 = document.getElementById('m7').textContent;
    let m8 = document.getElementById('m8').textContent;
    let m9 = document.getElementById('m9').textContent;
    let m10 = document.getElementById('m10').textContent;

    let pm1 = document.getElementById('countM1').value;
    let pm2 = document.getElementById('countM2').value;
    let pm3 = document.getElementById('countM3').value;
    let pm4 = document.getElementById('countM4').value;
    let pm5 = document.getElementById('countM5').value;
    let pm6 = document.getElementById('countM6').value;
    let pm7 = document.getElementById('countM7').value;
    let pm8 = document.getElementById('countM8').value;
    let pm9 = document.getElementById('countM9').value;
    let pm10 = document.getElementById('countM10').value;

    priceArr[0] = m1 * pm1;
    priceArr[1] = m2 * pm2;
    priceArr[2] = m3 * pm3;
    priceArr[3] = m4 * pm4;
    priceArr[4] = m5 * pm5;
    priceArr[5] = m6 * pm6;
    priceArr[6] = m7 * pm7;
    priceArr[7] = m8 * pm8;
    priceArr[8] = m9 * pm9;
    priceArr[9] = m10 * pm10;

    console.log(priceArr);

    let finalPriceArr = 0;

    for (let index = 0; index < 10; index++) {
        finalPriceArr += priceArr[index];
    }

    let finalPrice = document.getElementById('finalPrice');
    let finalMosalPrice = document.getElementById('finalModalPrice');
    finalPrice.innerText = finalPriceArr;
    finalMosalPrice.innerText = finalPriceArr;
    finPr = finalPriceArr;

    document.getElementById("t1").innerHTML = '';
    document.getElementById("t2").innerHTML = '';
    document.getElementById("t3").innerHTML = '';
    document.getElementById("t4").innerHTML = '';
    document.getElementById("t5").innerHTML = '';
    document.getElementById("t6").innerHTML = '';
    document.getElementById("t7").innerHTML = '';
    document.getElementById("t8").innerHTML = '';
    document.getElementById("t9").innerHTML = '';
    document.getElementById("t10").innerHTML = '';

    if (priceArr[0] != 0) {
        var temp = "";

        temp += "<td style=\"width: 25%\">" + "<img src=\"static/img/b87bb973.jpg\" class=\"img-fluid\">" + "</td>";
        temp += "<td style=\"width: 25%\">" + "<strong>Плов</strong>" + "</td>";
        temp += "<td style=\"width: 25%\">" + `${pm1}` + " X " + `${m1}` + " Р" + "</td>";
        temp += "<td style=\"width: 25%\"><strong>" + `${priceArr[0]}` + " Р" + "</strong></td>";

        document.getElementById("t1").innerHTML = temp;
    }
    if (priceArr[1] != 0) {
        var temp2 = "";

        temp2 += "<td style=\"width: 25%\">" + "<img src=\"static/img/samii_vkusnii_borsh-404089.jpg\" class=\"img-fluid\">" + "</td>";
        temp2 += "<td style=\"width: 25%\">" + "<strong>Борщ</strong>" + "</td>";
        temp2 += "<td style=\"width: 25%\">" + `${pm2}` + " X " + `${m2}` + " Р" + "</td>";
        temp2 += "<td style=\"width: 25%\"><strong>" + `${priceArr[1]}` + " Р" + "</strong></td>";

        document.getElementById("t2").innerHTML = temp2;
    }
    if (priceArr[2] != 0) {
        var temp3 = "";

        temp3 += "<td style=\"width: 25%\">" + "<img src=\"static/img/draniki-iz-kartoshki-foto-1-570x368.jpg\" class=\"img-fluid\">" + "</td>";
        temp3 += "<td style=\"width: 25%\">" + "<strong>Драники</strong>" + "</td>";
        temp3 += "<td style=\"width: 25%\">" + `${pm3}` + " X " + `${m3}` + " Р" + "</td>";
        temp3 += "<td style=\"width: 25%\"><strong>" + `${priceArr[2]}` + " Р" + "</strong></td>";

        document.getElementById("t3").innerHTML = temp3;
    }
    if (priceArr[3] != 0) {
        var temp4 = "";

        temp4 += "<td style=\"width: 25%\">" + "<img src=\"static/img/Pasta_1523360590.jpg\" class=\"img-fluid\">" + "</td>";
        temp4 += "<td style=\"width: 25%\">" + "<strong>Паста</strong>" + "</td>";
        temp4 += "<td style=\"width: 25%\">" + `${pm4}` + " X " + `${m4}` + " Р" + "</td>";
        temp4 += "<td style=\"width: 25%\"><strong>" + `${priceArr[3]}` + " Р" + "</strong></td>";


        document.getElementById("t4").innerHTML = temp4;
    }
    if (priceArr[4] != 0) {
        var temp5 = "";

        temp5 += "<td style=\"width: 25%\">" + "<img src=\"static/img/300x233_0_f907946fe6809e00caed3d759703d609@2000x1500_0xc0a839a2_7163011741494799525.jpeg\" class=\"img-fluid\">" + "</td>";
        temp5 += "<td style=\"width: 25%\">" + "<strong>Бефстроганов</strong>" + "</td>";
        temp5 += "<td style=\"width: 25%\">" + `${pm5}` + " X " + `${m5}` + " Р" + "</td>";
        temp5 += "<td style=\"width: 25%\"><strong>" + `${priceArr[4]}` + " Р" + "</strong></td>";


        document.getElementById("t5").innerHTML = temp5;
    }
    if (priceArr[5] != 0) {
        var temp6 = "";

        temp6 += "<td style=\"width: 25%\">" + "<img src=\"static/img/hachapuri-1.jpg\" class=\"img-fluid\">" + "</td>";
        temp6 += "<td style=\"width: 25%\">" + "<strong>Хачапури</strong>" + "</td>";
        temp6 += "<td style=\"width: 25%\">" + `${pm6}` + " X " + `${m6}` + " Р" + "</td>";
        temp6 += "<td style=\"width: 25%\"><strong>" + `${priceArr[5]}` + " Р" + "</strong></td>";


        document.getElementById("t6").innerHTML = temp6;
    }
    if (priceArr[6] != 0) {
        var temp7 = "";

        temp7 += "<td style=\"width: 25%\">" + "<img src=\"static/img/primebeefdenversteak_500_306_5_100.png\" class=\"img-fluid\">" + "</td>";
        temp7 += "<td style=\"width: 25%\">" + "<strong>Стейк</strong>" + "</td>";
        temp7 += "<td style=\"width: 25%\">" + `${pm7}` + " X " + `${m7}` + " Р" + "</td>";
        temp7 += "<td style=\"width: 25%\"><strong>" + `${priceArr[6]}` + " Р" + "</strong></td>";


        document.getElementById("t7").innerHTML = temp7;
    }
    if (priceArr[7] != 0) {
        var temp8 = "";

        temp8 += "<td style=\"width: 25%\">" + "<img src=\"static/img/fila_new.jpg\" class=\"img-fluid\">" + "</td>";
        temp8 += "<td style=\"width: 25%\">" + "<strong>Филадельфия</strong>" + "</td>";
        temp8 += "<td style=\"width: 25%\">" + `${pm8}` + " X " + `${m8}` + " Р" + "</td>";
        temp8 += "<td style=\"width: 25%\"><strong>" + `${priceArr[7]}` + " Р" + "</strong></td>";


        document.getElementById("t8").innerHTML = temp8;
    }
    if (priceArr[8] != 0) {
        var temp9 = "";

        temp9 += "<td style=\"width: 25%\">" + "<img src=\"static/img/300x233_0_86f0e15b2ff49738d2d1e237fd2e049b@2123x1412_0xc0a839a2_7142987081498078867.jpeg\" class=\"img-fluid\">" + "</td>";
        temp9 += "<td style=\"width: 25%\">" + "<strong>Омлет</strong>" + "</td>";
        temp9 += "<td style=\"width: 25%\">" + `${pm9}` + " X " + `${m9}` + " Р" + "</td>";
        temp9 += "<td style=\"width: 25%\"><strong>" + `${priceArr[8]}` + " Р" + "</strong></td>";

        document.getElementById("t9").innerHTML = temp9;
    }
    if (priceArr[9] != 0) {
        var temp10 = "";

        temp10 += "<td style=\"width: 25%\">" + "<img src=\"static/img/unnamed.jpg\" class=\"img-fluid\">" + "</td>";
        temp10 += "<td style=\"width: 25%\">" + "<strong>Шашлык</strong>" + "</td>";
        temp10 += "<td style=\"width: 25%\">" + `${pm10}` + " X " + `${m10}` + " Р" + "</td>";
        temp10 += "<td style=\"width: 25%\"><strong>" + `${priceArr[9]}` + " Р" + "</strong></td>";


        document.getElementById("t10").innerHTML = temp10;
    }
});

function getAdmArea(data) {
    let tempArr = [];
    var selectId = document.getElementById("inputAdmArea");
    data.forEach(elem => {
        if (elem.admArea) {
            if (!tempArr.includes(elem.admArea)) {
                var createOption = document.createElement("option");
                createOption.innerHTML = elem.admArea;
                selectId.appendChild(createOption);
                tempArr.push(elem.admArea);
            }
        }
    });
}

function getDistrict(data) {
    let tempArr = [];
    var selectId = document.getElementById("inputDistrict");
    data.forEach(elem => {
        if (elem.district) {
            if (!tempArr.includes(elem.district)) {
                var createOption = document.createElement("option");
                createOption.innerHTML = elem.district;
                selectId.appendChild(createOption);
                tempArr.push(elem.district);
            }
        }
    });
}

function getTypeObject(data) {
    let tempArr = [];
    var selectId = document.getElementById("inputTypeObject");
    data.forEach(elem => {
        if (elem.typeObject) {
            if (!tempArr.includes(elem.typeObject)) {
                var createOption = document.createElement("option");
                createOption.innerHTML = elem.typeObject;
                selectId.appendChild(createOption);
                tempArr.push(elem.typeObject);
            }
        }
    });
}

function getTable(data, page) {
    console.log(data);
    let data2 = [];
    console.log(data.length);
    if (data.length < 20) {
        for (let index = 0; index < data.length; index++) {
            data2[index] = data[index];
        }
    } else {
        for (let index = page * 20; index < page * 20 + 20; index++) {
            if (index > data.length) {
                break
            } else {
                data2[index % 20] = data[index];
            }
        }
    }

    console.log(data2);
    if (data2.length > 0) {
        var temp = "";

        data2.forEach((u) => {
            temp += "<tr>";
            temp += "<td>" + u.name + "</td>";
            temp += "<td>" + u.typeObject + "</td>";
            temp += "<td>" + u.address + "</td>";
            temp += "<td><button type=\"submit\" class=\"btn btn-dark\" id=";
            temp += `${u.id}`
            temp += ">Выбрать</button></td>"
        })

        document.getElementById("restTable").innerHTML = temp;
    }
}

function clickHandler(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;

    let menu1 = document.getElementById('m1');
    let menu2 = document.getElementById('m2');
    let menu3 = document.getElementById('m3');
    let menu4 = document.getElementById('m4');
    let menu5 = document.getElementById('m5');
    let menu6 = document.getElementById('m6');
    let menu7 = document.getElementById('m7');
    let menu8 = document.getElementById('m8');
    let menu9 = document.getElementById('m9');
    let menu10 = document.getElementById('m10');

    let modalName = document.getElementById('modalName');
    let modalAdmArea = document.getElementById('modalAdmArea');
    let modalDistrict = document.getElementById('modalDistrict');
    let modalAddress = document.getElementById('modalAddress');
    let modalRate = document.getElementById('modalRate');

    const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1/`;
    const request = new XMLHttpRequest();
    request.open('GET', apilink + `${target.id}`);

    if (target.id != '') {
        console.log(target.id);
        request.onload = reqListener;
        function reqListener() {
            menu1.innerText = JSON.parse(request.response).set_1;
            menu2.innerText = JSON.parse(request.response).set_2;
            menu3.innerText = JSON.parse(request.response).set_3;
            menu4.innerText = JSON.parse(request.response).set_4;
            menu5.innerText = JSON.parse(request.response).set_5;
            menu6.innerText = JSON.parse(request.response).set_6;
            menu7.innerText = JSON.parse(request.response).set_7;
            menu8.innerText = JSON.parse(request.response).set_8;
            menu9.innerText = JSON.parse(request.response).set_9;
            menu10.innerText = JSON.parse(request.response).set_10;

            modalName.innerText = JSON.parse(request.response).name;
            modalAdmArea.innerText = JSON.parse(request.response).admArea;
            modalDistrict.innerText = JSON.parse(request.response).district;
            modalAddress.innerText = JSON.parse(request.response).address;
            modalRate.innerText = JSON.parse(request.response).rate;
        }
        request.send();

        let btnConf = document.getElementById('btnconfirm');
        btnConf.disabled = false;
        let btnConf2 = document.getElementById('confirmToModalBtn');
        btnConf2.disabled = false;
    }
}

window.onload = function () {
    const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1`;

    const request = new XMLHttpRequest();
    const request2 = new XMLHttpRequest();
    const request3 = new XMLHttpRequest();
    const request4 = new XMLHttpRequest();

    request.open('GET', apilink);
    request2.open('GET', apilink);
    request3.open('GET', apilink);
    request4.open('GET', apilink);

    request.onload = () => getDistrict(JSON.parse(request.response));
    request.send();

    request2.onload = () => getAdmArea(JSON.parse(request2.response));
    request2.send();

    request3.onload = () => getTypeObject(JSON.parse(request3.response));
    request3.send();

    var area = document.querySelector("#inputAdmArea");
    var area_val = area.options[area.selectedIndex].value;
    var distr = document.querySelector("#inputDistrict");
    var distr_val = distr.options[distr.selectedIndex].value;
    var type = document.querySelector("#inputTypeObject");
    var type_val = type.options[type.selectedIndex].value;
    var rests = document.querySelector("#inputState");
    var rests_val = rests.options[rests.selectedIndex].value == "Есть" ? 1 : 0;

    request4.onload = () => getTable(JSON.parse(request4.response).sort(function (obj1, obj2) {
        return obj2.rate - obj1.rate;
    }).filter(elem => {
        let result = true;
        if (area_val != "Не выбрано") {
            result *= (elem.admArea == area_val);
        }
        if (distr_val != "Не выбрано") {
            result *= (elem.district == distr_val);
        }
        if (type_val != "Не выбрано") {
            result *= (elem.typeObject == type_val);
        }
        if (rests_val != "Не выбрано") {
            result *= (elem.socialPrivileges == rests_val);
        }
        return result;
    }), 0);
    request4.send();

    btnTable.onclick = function () {
        document.getElementById("restTable").innerHTML = '';
        const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1`;
        const request4 = new XMLHttpRequest();
        request4.open('GET', apilink);

        var area = document.querySelector("#inputAdmArea");
        var area_val = area.options[area.selectedIndex].value;
        var distr = document.querySelector("#inputDistrict");
        var distr_val = distr.options[distr.selectedIndex].value;
        var type = document.querySelector("#inputTypeObject");
        var type_val = type.options[type.selectedIndex].value;
        var rests = document.querySelector("#inputState");
        var rests_val = rests.options[rests.selectedIndex].value == "Есть" ? 1 : 0;

        setTimeout(request4.onload = () => getTable(JSON.parse(request3.response).sort(function (obj1, obj2) {
            return obj2.rate - obj1.rate;
        }).filter(elem => {
            let result = true;
            if (area_val != "Не выбрано") {
                result *= (elem.admArea == area_val);
            }
            if (distr_val != "Не выбрано") {
                result *= (elem.district == distr_val);
            }
            if (type_val != "Не выбрано") {
                result *= (elem.typeObject == type_val);
            }
            if (rests_val != "Не выбрано") {
                result *= (elem.socialPrivileges == rests_val);
            }
            return result;
        }), 0), 1000);
        request4.send();
    }

    $('#defaultCheck1').on('click', function () {
        if ($(this).is(':checked')) {
            let finalMosalPrice = document.getElementById('finalModalPrice');
            finalMosalPrice.innerText = Math.round(finPr * 1.4);
            var tempo1 = "";

            tempo1 += "<td style=\"width: 50%\">" + "<strong>В два раза больше:</strong>" + "</td>";
            tempo1 += "<td style=\"width: 50%\">" + "Сеты X2, Цена -60%" + "</td>";

            document.getElementById("to1").innerHTML = tempo1;
        } else {
            document.getElementById("to1").innerHTML = '';
            let finalMosalPrice = document.getElementById('finalModalPrice');
            finalMosalPrice.innerText = finPr;
        }
    })

    $('#defaultCheck2').on('click', function () {
        if ($(this).is(':checked')) {
            var tempo2 = "";

            let finalMosalPrice = document.getElementById('finalModalPrice');
            tempo2 += "<td style=\"width: 50%\">" + "<strong>Только горячим:</strong>" + "</td>";
            tempo2 += "<td style=\"width: 50%\">" + "Если заказ приедет холодным то он будет Вам стоить " + `${Math.round(Number(finalMosalPrice.textContent) * 0.7)}` + " Р" + "</td>";

            document.getElementById("to2").innerHTML = tempo2;
        } else {
            document.getElementById("to2").innerHTML = '';
        }
    })

    btnconfirm.onclick = function () {
        if (document.getElementById('finalModalPrice').textContent != 0) {
            let not = document.getElementById('notification');
            not.innerHTML = "<div class=\"alert alert-success\" role=\"alert\">Ваш заказ принят!</div>";
            console.log('Заказ успешно отправлен!');
            setTimeout(function () {
                not.innerHTML = '';
            }, 2500);
        }
    }

    let tbl = document.getElementById('restTable');
    tbl.onclick = clickHandler;

}