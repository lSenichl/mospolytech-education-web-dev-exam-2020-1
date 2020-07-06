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
            temp += "<td><button type=\"submit\" class=\"btn btn-primary\" id=";
            temp += `${u.id}`
            temp += ">Выбрать</button></td>"
        })

        document.getElementById("restTable").innerHTML = temp;
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
        return obj1.rate - obj2.rate;
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
            return obj1.rate - obj2.rate;
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

}