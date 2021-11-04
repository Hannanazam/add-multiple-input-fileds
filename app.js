var list = document.getElementById("list");

function addtodo(){
    var label = document.createElement("label");
    var label1 = document.createTextNode("hannan");
    label.appendChild(label1)
    var br = document.createElement("br");
    var br1 = document.createElement("br");
    var input = document.createElement("input");
    input.setAttribute("type" , "text")
    input.setAttribute("value" , "hannan")
    input.setAttribute("class" , "form-control")
    

    list.appendChild(label);
    list.appendChild(br);
    list.appendChild(input);
    list.appendChild(br1);
}
