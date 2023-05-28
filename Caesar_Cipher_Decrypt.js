function Caeser_Cipher(str){
    //Alphabets constant storing all the 26 alpha characters.
    const Alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //Key constant representing the TOF-13 format.
    const key=13;
    
    //Non_Alpha constant storing all the non_alpha characters.
    const NON_Alpha=[" ","!","?","."];

    return str.split("").map((char,i)=>{
        if(NON_Alpha.includes(char)){
            return char;
        }
        else{
            i=(Alphabets.indexOf(char)+key)%26;
            return Alphabets[i];
        }
    }).join("");
}
console.log(Caeser_Cipher("SERR CVMMN!"));
