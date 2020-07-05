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

function getTable(data) {
    console.log(data);
    if (data.length > 0) {
        var temp = "";

        data.forEach((u) => {
            temp += "<tr>";
            temp += "<td>" + u.name + "</td>";
            temp += "<td>" + u.typeObject + "</td>";
            temp += "<td>" + u.address + "</td>";
            temp += `<td><button type=\"submit\" class=\"btn btn-primary\" id=\`${u.id}\`>Выбрать</button></td>`;
        })

        document.getElementById("data").innerHTML = temp;
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

    request4.onload = () => getTable(JSON.parse(request4.response));
    request4.send();

    btnTable.onclick = function () {
        document.getElementById("data").innerHTML = ''
        const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1`;
        const request4 = new XMLHttpRequest();
        request4.open('GET', apilink);
        setTimeout(request4.onload = () => getTable(JSON.parse(request3.response)), 1000);
        request4.send();
    }

}