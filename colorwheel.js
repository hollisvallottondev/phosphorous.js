import { convertToAngles } from "./helpers"; 

class ColorWheel {
    constructor( type ){
        switch( type ){
            case "prismatic":
                this.init_prismatic(); 
            break; 
            case "rgb": 
                this.init_rgb(); 
            break; 
            default:
                this.init_prismatic(); 
            break;  
        }
    }
    init_prismatic = () => {
        this.color_wheel = {
            0: RGB( 255, 0, 0), 
            120: RGB( 0, 255, 255), 
            240: RGB( 0, 0, 255)
        }
        this.type = "prismatic"; 
    }
    init_rgb = () => {

    }

    get_matches = ( colors, format, type_of_match ) => {
        switch( type_of_match ){
            case "analogous": 

            break; 
            case "complementary": 
                const match = this.match( colors, 180, type_of_match ); 
                return match; 
            break; 
            case "triadic":

            break;
            case "split-complementary": 
            
            break; 
            case "tetradic": 
            break; 
            case "nature": 

            break; 
            default: 
            //Call all options here 
            break; 
        }
    }

    match = ( color, degrees, type_of_match ) => {
        switch( this.type ){
            case "prismatic":
                const angle = convertToAngles( color ); 
            break;  
        }
    }

    
}


class RGB {
    constructor( r, g, b) {
        this.r = r; 
        this.g = g; 
        this.b = b; 
    }
    get_values = ( ) => {
        return this; 
    }
    get_r = () => {
        return this.r; 
    }
    get_g = () => {
        return this.g; 
    }
    get_b = () => {
        return this.b; 
    }
}