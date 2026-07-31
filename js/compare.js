
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome; 
        this.preco = preco;
        this.alturaCacamba = alturaCacamba; 
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo; 
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor; 
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba; 
        this.roda = roda;
        this.image = image;
    }

    getCarInfo() {
        let preco = "R$ " + new Intl.NumberFormat().format(this.preco);

        return [this.image, this.nome, this.alturaCacamba, this.alturaVeiculo,this.alturaSolo,
                this.capacidadeCarga, this.motor, this.potencia, this.volumeCacamba, this.roda, preco
        ];
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            carArr.push(carClass);
        } else {
            let carIndex = GetCarArrPosition(carArr, carClass)
            carArr.splice(carIndex, 1);
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    if(carArr.length >= 3) {
        alert("Desmarque um carro para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 


}

function UpdateCompareTable() {
    let compare_table = document.querySelector(".compare-table");

    const row = compare_table.querySelectorAll('tr');

    for(let i = 0; i < row.length; i++) {
        let table_cell = row[i].querySelectorAll('td');

        for(let j = 0; j < carArr.length; j++) {
            let car_info = carArr[j].getCarInfo();

            if(i == 0) {
                let images = table_cell[j+1].querySelectorAll('img');
                let current_image = images[i];

                current_image.src = car_info[i];
                current_image.width = 250; 
                current_image.height = 150; 
                continue;
            }

            table_cell[j+1].textContent = car_info[i];
        }
    }
}
