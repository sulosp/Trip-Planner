
  function showWholeMonth() {
    document.getElementById("whole-month-tab").classList.add("active");
    document.getElementById("specific-days-tab").classList.remove("active");
    document.getElementById("whole-month-tab").classList.add("show");
    document.getElementById("specific-days-tab").classList.remove("show");
  }

  function showSpecificDays() {
    document.getElementById("whole-month-tab").classList.remove("active");
    document.getElementById("specific-days-tab").classList.add("active");
    document.getElementById("whole-month-tab").classList.remove("show");
    document.getElementById("specific-days-tab").classList.add("show");
  }

  
  //function showDropdown(){
  //  document.getElementsByClassName('dropdown-menu').classList.add("show");
  // }


  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }