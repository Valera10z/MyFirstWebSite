document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    console.log(event);

    let form = event.target;

    console.log(form['name'].value);
    console.log(form['like'].value);
    console.log(form['education'].value);
    console.log(form['agree'].checked);

    if(!form['agree'].checked) {
        document.querySelector('label[for=agree]').style.color = "red";
        document.querySelector('label[for=agree]').style.fontWeight = "bold";
    }
    else {
        document.querySelector('label[for=agree]').style.color = null;
        document.querySelector('label[for=agree]').style.fontWeight = null;

        let message = form['name'].value;
        if(form['education'].value == "school") massage += " learning in school and ";
        else if(form['education'].value == "univer") message += " learning in univer and ";
        else message += " just ";

        message += " like ";

        if(form['like'].value == "cats") message += " cats!";
        else if(form['like'].value == "dogs") message += " dogs!";

        let newBlock = document.createElement('p');
        newBlock.innerText = message;
        document.querySelector("body").appendChild(newBlock);
    }
}