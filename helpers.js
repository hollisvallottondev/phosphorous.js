const convert_rgb_to_hex = ( rgb_obj ) => {
    const r = to_hex( rgb_obj.r ); 
    const g = to_hex( rgb_obj.g ); 
    const b = to_hex( rgb_obj.b ); 
    return `#${r}${g}${b}`; 
}

const convert_hex_to_rgb = ( hex ) => {
    let result = ""; 
    hex = clean_hex( hex ); 
    for( let i = 0; i < hex.length; i+=2)
        result += ' ' + hex_to_decimal( hex.substring(i, i+2))
    return result; 
}

const to_hex = ( integer ) => {
    let number = parseInt( integer, 10);
    if (isNaN( number )) return "00";
    number = Math.max(0,Math.min( number,255));
    return "0123456789ABCDEF".charAt(( number - number %16)/16)
         + "0123456789ABCDEF".charAt(number%16);
}

const clean_hex = ( hex ) => hex.charAt(0)=="#"? hex.substring(1,7): hex 
const hex_to_decimal = ( hex ) => parseInt( hex, 16); 

const hexToR = (h) => {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

const getAngle = ( number, third ) => {
    
    number * 120 / 255 
}

const convertToAngles = ( rgb, color_wheel ) => {
    return getAngle(rgb.r) + getAngle(rgb.g) + getAngle(rgb.b); 
}
const rgb = {
    r: 223, 
    g: 86,
    b: 67
} 
const black = {
    r: 0, 
    g: 0,
    b: 0
}

const white = {
    r: 255, 
    g: 255,
    b: 255
}

const cubic_int = ( t, A,  B) => {
    console.log(`t: ${t} A:${A} B:${B}`); 
    const weight = t*t*(3-2*t);
    return parseFloat(A + weight*(B-A));
}
    

const ryb_to_rgb = ( ryb ) => {
    let x0, x1, x2, x3, y0, y1;
    console.log('RYB', ryb)
    //red
    x0 = cubic_int(ryb.b, 1.0, 0.163);
    x1 = cubic_int(ryb.b, 1.0, 0.0);
    x2 = cubic_int(ryb.b, 1.0, 0.5);
    x3 = cubic_int(ryb.b, 1.0, 0.2);
    
    y0 = cubic_int(ryb.y, x0, x1);
    y1 = cubic_int(ryb.y, x2, x3);
    
    const r = cubic_int( ryb.r, y0, y1); 
    console.log('RED DONE'); 
    //green
    x0 = cubic_int(ryb.b, 1.0, 0.373);
    x1 = cubic_int(ryb.b, 1.0, 0.66);
    x2 = cubic_int(ryb.b, 0.0, 0.0);
    x3 = cubic_int(ryb.b, 0.5, 0.094);
    y0 = cubic_int(ryb.y, x0, x1);
    y1 = cubic_int(ryb.y, x2, x3);
    const g = cubic_int( ryb.r,y0, y1 ); 
    console.log('GREEN DONE'); 

    //blue
    x0 = cubic_int(ryb.b, 1.0, 0.6);
    x1 = cubic_int(ryb.b, 0.0, 0.2);
    x2 = cubic_int(ryb.b, 0.0, 0.5);
    x3 = cubic_int(ryb.b, 0.0, 0.0);
    y0 = cubic_int(ryb.y, x0, x1);
    y1 = cubic_int(ryb.y, x2, x3);
    const b = cubic_int( ryb.r, y0, y1 ); 
    console.log('BLUE DONE'); 


    return {r, g, b}  
}

module.exports = {
    convertToAngles,
    ryb_to_rgb
}


// console.log(`R: ${rgb.r} G:${rgb.g} B:${rgb.b}`, convert_rgb_to_hex(rgb)); 
// console.log(`R: ${black.r} G:${black.g} B:${black.b}`, convert_rgb_to_hex(black)); 
// console.log(`R: ${white.r} G:${white.g} B:${white.b}`, convert_rgb_to_hex(white)); 

// console.log("#DF5643", convert_hex_to_rgb("#DF5643"));
// console.log("#FFFFFF", convert_hex_to_rgb("#FFFFFF"));
// console.log("#000000", convert_hex_to_rgb("#000000"));

// console.log('to angles color', convertToAngles( rgb )); 
// console.log('to angles black', convertToAngles( black )); 
// console.log('to angles white', convertToAngles( white )); 