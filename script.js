function sub() {
    let nameErr = document.querySelector("#nameErr");
    let rollErr = document.querySelector("#rollErr");
    let markErr = document.querySelector("#markErr");
    let NameStudent = document.querySelector("#stdname").value.trim();
    let RollStudent = document.querySelector("#stdroll").value.trim();
    let MarkStudent = document.querySelector("#stdmark").value.trim();
    let contain = document.querySelector("#content");
    let GradeSystem = ""; 
    if (NameStudent === "") {
        nameErr.innerHTML = "This Field Is Mandatory";
        nameErr.style.color = "red";
        return;
    } else {
        nameErr.innerHTML = "";
    }

    if (RollStudent === "") {
        rollErr.innerHTML = "This Field Is Mandatory";
        rollErr.style.color = "red";
        return;
    } else {
        rollErr.innerHTML = "";
    }

    if (MarkStudent === "") {
        markErr.innerHTML = "This Field Is Mandatory";
        markErr.style.color = "red";
        return;
    } else if (MarkStudent > 100) {
        markErr.innerHTML = "Enter Marks Between 1-100";
        markErr.style.color = "red";
        return;
    } else {
        markErr.innerHTML = "";
    }

    let StudentsDetails = document.createElement("div");
    StudentsDetails.classList.add("M-para");

    let delIcon = document.createElement("i");
    delIcon.classList.add("bi", "bi-trash");
    delIcon.style.cursor = "pointer";

    delIcon.addEventListener("click", function () {
        contain.removeChild(StudentsDetails);
    });
    delIcon.addEventListener("mouseover",function(){
        delIcon.classList.remove("bi", "bi-trash");
        delIcon.classList.add("bi", "bi-trash-fill")
    })
    delIcon.addEventListener("mouseout",function(){
        delIcon.classList.remove("bi", "bi-trash-fill")
        delIcon.classList.add("bi", "bi-trash");
      
    })

switch (true) {
    case (MarkStudent >= 0 && MarkStudent<=10 ):
        GradeSystem = "F"
        break;
case (MarkStudent >= 11 && MarkStudent<=25 ):
    GradeSystem = "D"
break;
case(MarkStudent >= 26 && MarkStudent<=50 ):
    GradeSystem = "C"
break;

case (MarkStudent >=51 && MarkStudent<=75 ):
    GradeSystem = "B"
break;

case (MarkStudent >= 76 && MarkStudent<=100 ):
    GradeSystem = "A"
break;
    default:
        GradeSystem = "Invalid Marks"
        break;
}
    StudentsDetails.innerHTML = `
        <h4>${NameStudent}</h4>
        <h4>${RollStudent}</h4>
        <h4>${MarkStudent}</h4>
        <h4>${GradeSystem}</h4>
    `;
    let deleteWrapper = document.createElement("h4");
    deleteWrapper.appendChild(delIcon);
    StudentsDetails.appendChild(deleteWrapper);
    contain.appendChild(StudentsDetails);
    document.querySelector("#stdname").value = "";
    document.querySelector("#stdroll").value = "";
    document.querySelector("#stdmark").value = "";
}
