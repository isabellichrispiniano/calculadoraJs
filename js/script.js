teste = () => {
    let val = document.querySelector(".num").value 
    let val2 = document.querySelector(".num2").value
    const conta = document.querySelector("#escolha")
}

switch (conta){
    case "soma": val + val2;
    break;
}

document.querySelector(".result").innerHTML = `${val}`