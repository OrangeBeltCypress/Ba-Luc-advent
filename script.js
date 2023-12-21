const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")
const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const presents = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PI18mKycOpTX9qFThRXVMEXgWAvmV7qoaQ4FaU0VnChXjKD9AUi3gjLbYfiWw53cjLA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHd1-9meKPAgvnaNvTkUskz3DpNOdQ3QpoIRunsqjfN9o4V77LN8ah00-ELcEbZXD-Nw&usqp=CAU",
    "https://scontent-hou1-1.xx.fbcdn.net/v/t39.8562-6/395712265_1241495509826414_2240859651247779674_n.png?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=430b19&_nc_ohc=DsfS_18JG50AX9VzZ9T&_nc_ht=scontent-hou1-1.xx&oh=00_AfBwaKALAFjMwYoC_8we-b7dhMdbAXVZ9_ZTd-8y11arMg&oe=6587FECD",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02JM-sUMhWMdG04WbZ5sM9LuRoVbID-yUfR2QF957pfvbyN6WRFvfmXueJhU3eI-iGcA&usqp=CAU",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81EmlXBfPuL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eDNBI_GZnTTXFmz0yMcGjxZdey4D9716ZHd1Q_kRSyWVbrugu3PTZv49DeXy-YC5Wbk&usqp=CAU"
]

function present(num){
    if(num == 0){
        pic1.src = presents[0];
    }
    else if(num == 1){
        pic2.src = presents[1];
    } 
    else if(num == 2){
        pic3.src = presents[2];
    } 
    else if(num == 3){
        pic4.src = presents[3];
    } 
    else if(num == 4){
        pic5.src = presents[4];
    } 
    else if(num == 5){
        pic6.src = presents[5];
    }
}