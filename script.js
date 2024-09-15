var color = true

function changeTheme() {

    var body = document.getElementById('body')
    var btnBgColor = document.getElementById('btn')
    var btnTextColor = document.getElementById('btn')
    var name = document.getElementById('btn')

    if(color === true){
        body.style.backgroundColor = "black";
        btnBgColor.style.backgroundColor = 'white';
        btnTextColor.style.color = 'black'
        name.textContent = 'Day';
        color = false;

    }else if(color === false){
        body.style.backgroundColor = "white";
        btnBgColor.style.backgroundColor = 'black';
        btnTextColor.style.color = 'white';
        name.textContent = 'Night';
        color = true;
    }
}