
const desc = message => {

    let input = prompt(message);

    // Verificación de input
    while(input.length > 210){
        const copia = input;
        input = prompt('ERROR. Descripción demasiado larga.\n\n' + copia + '\n\n' + message)
    }
    
    // Impresión de mensaje segun longitud
    if(input.length < 70){ 
        document.write(
        `<p style="height: 16px;"></p>
        <p>
            ${input}
        </p>`
    )}
    else if(input.length >= 70 && input.length < 140){
        document.write(
            `<p style="height: 8px;"></p>
            <p>
                ${input}
            </p>`
        )
    }
    else{
        document.write(
            `<p>
                ${input}
            </p>`
        )
    }

}

const icon = dia => {
    
    icon1 = prompt('ICONO 1 ' + dia.toUpperCase());
    icon2 = prompt('ICONO 2 ' + dia.toUpperCase());

    if(!icon2){
        const result = `
            <div id="img2">
                <img src="D:/Documentos/PanoramaTemplate/icons/${icon1}.png">
            </div>
            `;
        document.write(result);
    }
    else{
        const result = `
            <div id="img">
                <img src="D:/Documentos/PanoramaTemplate/icons/${icon1}.png">
            </div>
            <div id="img">
                <img src="D:/Documentos/PanoramaTemplate/icons/${icon2}.png">
            </div>
            `;
        document.write(result);
    }
}

const inputW = message => {
    let input = prompt(message);

    document.write(input);
    if(input.length == 1){console.log('xd')};
}