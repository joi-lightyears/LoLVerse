var femaleCheckbox = document.getElementById("cbx-13");
var maleCheckbox = document.getElementById("cbx-12");

// if male is checked female must be unchecked and vice versa
femaleCheckbox.addEventListener("click", function(){
    if(femaleCheckbox.checked){
        maleCheckbox.checked = false;
    }
});
maleCheckbox.addEventListener("click", function(){
    if(maleCheckbox.checked){
        femaleCheckbox.checked = false;
    }
});

// for note textarea
function limitText(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
    }
}


const validateForm = (e) => {
    e.preventDefault();
    // Kiểm tra mssv
    var mssv = document.getElementById("mssv");
    if (mssv.value === "") {
        // add class error
        mssv.classList.add("error");
        return false;
    }else{
        mssv.classList.remove("error");
    }
    // Kiểm tra họ tên
    var name = document.getElementById("hoVaTen");
    if (name.value === "") {
        // add class error
        name.classList.add("error");
        return false;
    }else{
        name.classList.remove("error");
    }
    // 
    var email = document.getElementById("email");
    if (email.value === "") {
        // add class error
        email.classList.add("error");
        return false;
    }else{
        var atposition=email.value.indexOf("@");  
        var dotposition=email.value.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.value.length){  
            if (email.classList.contains("error")) {
                return false;
            }else{
                email.classList.add("error");
                return false;
            }
        }
        email.classList.remove("error");
    }
    
    // Kiểm tra giới tính
    var sexContainer = document.getElementById("sex")
    if (!maleCheckbox.checked && !femaleCheckbox.checked) {
        sexContainer.classList.add("error");
        return false;
    }else{
        sexContainer.classList.remove("error");
    }
    // kiểm tra sở thích đã tích ít nhất 1 ô chưa
    var hobbies = document.getElementsByName("hobby");
    var hobbyContainer = document.getElementById("hobby");
    var isChecked = false;
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        hobbyContainer.classList.add("error");
        return false;
    }else{
        hobbyContainer.classList.remove("error");
    }
    // kiểm tra quốc tịch
    var nationalSelect = document.getElementById("nationaly");
    var nationalContainer = document.getElementById("national");
    // console.log(nationalContainer)
    if (nationalSelect.selectedIndex == 0) {
        nationalContainer.classList.add("error");
        return false;
    }else{
        nationalContainer.classList.remove("error");
    }
    

}