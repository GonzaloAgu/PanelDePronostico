const inputW = message => {
    input = prompt(message);
    document.write(input);
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