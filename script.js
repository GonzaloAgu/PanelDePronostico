
const descChange = (message, elemento) => {

    let input = prompt('DESCRIPCION ' + message.toUpperCase());

    // Verificación de input
    while(input.length > 210 || input.length == ''){
        input = prompt('ERROR. Descripción no válida.\n\n' + elemento)
    }
    
    // Impresión de mensaje segun longitud
    if(input.length < 70){ 
        result = `<p style="height: 16px;"></p>
        <p>
            ${input}
        </p>`
    }
    else if(input.length >= 70 && input.length < 140){
        result = `<p style="height: 8px;"></p>
            <p>
                ${input}
            </p>`
    }
    else{
        result = `<p>
                ${input}
            </p>`
    }
    document.getElementById(elemento).innerHTML = result;
}

const iconChange = (dia, elemento) => {
    
    let result = '';

    icon1 = prompt('ICONO 1 ' + dia.toUpperCase());
    icon2 = prompt('ICONO 2 ' + dia.toUpperCase());

    if(!icon2){
        result = `
            <div id="img2">
                <img src="D:/Documentos/PanoramaTemplate/icons/${icon1}.png">
            </div>
            `;
    }
    else{
        result = `
            <div id="img">
                <img src="D:/Documentos/PanoramaTemplate/icons/${icon1}.png">
            </div>
            <div id="img">
                <img src="D:/Documentos/PanoramaTemplate/icons/${icon2}.png">
            </div>
            `;
    }
    document.getElementById(elemento).innerHTML = result;
}


const inputChange = (message, elemento) => {
    
    let input = prompt(message);
    
    document.getElementById(elemento).innerHTML = input;
}

const tempChange = (message, elemento) => {
    let input = prompt(message);
    document.getElementById(elemento).innerHTML = `<h1>
            
    ${input}ºC

</h1>`
}

let contSu = 0;  //Contador de nuevos elementos superiores
let contIn = 0;  //Contador de nuevos elementos inferiores
const nuevoDia = pos => {
    dia = prompt("Ingrese día a agregar");
    /*Elijo contador segun input*/
    if(pos == 'Ar'){
        i = contSu;
        contSu++;
        console.log('Se añadirá un elemento superior ' + i);
    }
    else{
        i = contIn;
        contIn++;
        console.log('Se añadirá el elemento inferior ' + i);
    }

    const diaBreve = dia.slice(0, 3);
    const result = `<!--${dia.toUpperCase()}-->
    <div id="cuerpo">
    
        <div id="header">
            <p>${dia.toUpperCase()}</p>
        </div>
        <div class="tempMax" id="max${diaBreve}" onclick="tempChange('MAXIMA ${dia.toUpperCase()}', 'max${diaBreve}')"><h1>
            Max
        </h1></div>
        <div class="tempMin" id="min${diaBreve}" onclick="tempChange('MINIMA ${dia.toUpperCase()}', 'min${diaBreve}')"><h1>
            Min
        </h1></div>


        <div id="desc">
            <div class="icons" id="${diaBreve}Icon" onclick="iconChange('${dia.toUpperCase()}', '${diaBreve}Icon');">
                <div id="img2">
                    <img src="D:/Documentos/PanoramaTemplate/icons/blank.png">
                </div>
            </div>
    
            <div class="info" id="${diaBreve}Info" onclick="descChange('${dia.toUpperCase()}', '${diaBreve}Info')">
                <p style="height: 16px;"></p>
                <p>
                 Añadir descripción.
                </p>
            </div>
        </div>
    
    </div>`;

    document.getElementById(('nuevo' + pos + i)).innerHTML = result;
    
}
