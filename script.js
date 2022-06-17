
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



