const champsSales = [
    {
        id: 1,
        name: "Aatrox",
        price: 4700,
    },
    {
        id: 2,
        name: "Bel'Veth",
        price: 480,
    },
    {
        id: 3,
        name: "Teeemo",
        price: 800,
    },
    {
        id: 4,
        name: "Nasus",
        price: 1700,
    },
    {
        id: 5,
        name: "Jinx",
        price: 6300,
    },
    {
        id: 6,
        name: "Lux",
        price: 80,
    },
    {
        id: 7,
        name: "Garen",
        price: 4,
    },
    {
        id: 8,
        name: "Veigar",
        price: 8,
    },
    {
        id: 9,
        name: "Rammus",
        price: 4300,
    },
    {
        id: 10,
        name: "Naafiri",
        price: 4000,
    },
]


// load data from storeData.js according to select price
var price = 0;
var selectBox = document.getElementById("selectBox");


selectBox.addEventListener("change", function () {
    price = selectBox.value;
    var table = document.getElementById("table");
    table.innerHTML = "";
    const headerTable = document.createElement("tr");
    headerTable.innerHTML = `
    <td class="checkBox">
        <div class="checkbox-wrapper-12">
            <div class="cbx">
                <input name="tickChamp" id="-1" type="checkbox">
                <label for="-1"></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
            </div>
            <!-- <label for="cbx-12" class="cbx-label-12">Nam</label> -->
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                <filter id="goo-12">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                </filter>
                </defs>
            </svg>
        </div>
    </td>
    <th>Hàng hóa</th>
    <th>Đơn giá</th>
    <th>Số lượng</th>
    <th>Thành tiền</th>
    `;
    table.appendChild(headerTable);

    // all selected
    if (price == -1) {
        // load all champs
        // table.innerHTML = "";
        for (var i = 0; i < champsSales.length; i++) {
            const champRow = document.createElement("tr");
            champRow.innerHTML = `
            <td class="checkBox">
                <div class="checkbox-wrapper-12">
                    <div class="cbx">
                        <input name="tickChamp" id=${champsSales[i].id} type="checkbox">
                        <label for=${champsSales[i].id}></label>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                        </svg>
                    </div>
                    <!-- <label for="cbx-12" class="cbx-label-12">Nam</label> -->
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                        <filter id="goo-12">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                        </filter>
                        </defs>
                    </svg>
                </div>
            </td>
            <td>${champsSales[i].name}</td>
            <td>${champsSales[i].price}</td>
            <td id="quantity-${champsSales[i].id}" contenteditable="false">0</td>
            <td id="champ-${champsSales[i].id}-price" class="eachPrice"></td>
            `;
            table.appendChild(champRow);
        }
        
    }else if(price!== -1){
        // get range from string price
        var range = price.split("-");
        var min = parseInt(range[0]);
        var max = parseInt(range[1]);
        // load champs with price from 0 to 450
        
        
        for (var i = 0; i < champsSales.length; i++) {
            if(champsSales[i].price > min && champsSales[i].price <= max){
                const champRow = document.createElement("tr");
                champRow.innerHTML = `
                <td class="checkBox">
                    <div class="checkbox-wrapper-12">
                        <div class="cbx">
                            <input name="tickChamp" id=${champsSales[i].id} type="checkbox">
                            <label for=${champsSales[i].id}></label>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        <!-- <label for="cbx-12" class="cbx-label-12">Nam</label> -->
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                            <filter id="goo-12">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                                <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                </td>
                <td>${champsSales[i].name}</td>
                <td>${champsSales[i].price}</td>
                <td id="quantity-${champsSales[i].id}" contenteditable="false">0</td>
                <td id="champ-${champsSales[i].id}-price" class="eachPrice"></td>
            `;
            table.appendChild(champRow);
            }
        }
    
    }
    const tableFooter = document.createElement("tr");
    tableFooter.innerHTML = `
    <tr>
        <th colspan="4">Tổng</th>
        <td class="totalPrice"></td>
    </tr>
    `;
    table.appendChild(tableFooter);
    // allow contenteditable when tick on checkbox
    var checkBoxes = document.querySelectorAll("input[name=tickChamp]");
    // var quantities = document.querySelectorAll("td[id^=quantity]");
    checkBoxes[0].addEventListener("click", function () {
        if (this.checked) {
            for (var i = 1; i < checkBoxes.length; i++) {
                checkBoxes[i].checked = true;
                var quantity = document.getElementById("quantity-" + checkBoxes[i].id);
                quantity.setAttribute("contenteditable", "true");
            }
        } else {
            for (var i = 1; i < checkBoxes.length; i++) {
                checkBoxes[i].checked = false;
                var quantity = document.getElementById("quantity-" + checkBoxes[i].id);
                var eachPrice = document.getElementById("champ-" + checkBoxes[i].id + "-price");
                var totalPrice = document.querySelector(".totalPrice");
                quantity.setAttribute("contenteditable", "false");
                quantity.innerHTML = 0;
                eachPrice.innerHTML = "";
                totalPrice.innerHTML = "";
            }
        }
    });

    for (var i = 1; i < checkBoxes.length; i++) {
        // console.log(checkBoxes[i].id);
        

        checkBoxes[i].addEventListener("click", function () {
            var quantity = document.getElementById("quantity-" + this.id);
            var eachPrice = document.getElementById("champ-" + this.id + "-price");
            if (this.checked) {
                quantity.setAttribute("contenteditable", "true");
            } else {
                quantity.setAttribute("contenteditable", "false");
                quantity.innerHTML = 0;
                eachPrice.innerHTML = "";
            }
        });
    }

    // update each champ price
    for (var i = 1; i < checkBoxes.length; i++) {
        var quantity = document.getElementById("quantity-" + checkBoxes[i].id);
        var checkBox = document.getElementById(checkBoxes[i].id);
        checkBox.addEventListener("click", function () {
            var quantity = document.getElementById("quantity-" + this.id);
            var eachPrice = document.getElementById("champ-" + this.id + "-price");
            var eachPrices = document.querySelectorAll(".eachPrice");
            var totalPrice = document.querySelector(".totalPrice");
            if (this.checked == false) {
                quantity.innerHTML = 0;
                eachPrice.innerHTML = "";
                var total = 0 
                console.log(total);
                for (var i = 1; i < checkBoxes.length; i++) {
                    // just sum checked
                    if (checkBoxes[i].checked) {
                        total += parseInt(eachPrices[i].innerHTML);
                    }
                }
                console.log(total);
                
                totalPrice.innerHTML = total;
            }
        });



        quantity.addEventListener("input", function () {
            var quantity = this.innerHTML;
            var id = this.id.split("-")[1];
            var champPrice = document.getElementById("champ-" + id + "-price");
            champPrice.innerHTML = quantity * champsSales[id - 1].price;
            var totalPrice = document.querySelector(".totalPrice");
            var eachPrices = document.querySelectorAll(".eachPrice");
            var total = 0;
            for (var i = 1; i < eachPrices.length; i++) {
                // just sum checked
                if (checkBoxes[i + 1].checked) {
                    total += parseInt(eachPrices[i].innerHTML);
                }
            }
            totalPrice.innerHTML = total;
        });

    }
});


