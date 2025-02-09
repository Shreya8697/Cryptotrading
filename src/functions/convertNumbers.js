// export const convertNumbers=(number)=>{
//     if(number){
//         if(number >=1000){
//             return number;
//         }else if(number>=1000 && number<1000000){
//             return(
//                 number.toString().Slice(0, -3)+
//                 "."+
//                 number.toString().Slice(-3, -1)+
//                 "K"
//             );
//         }else if(number >=1000000 && number<1000000000){
//             return(
//                 number.toString().Slice(0,-6)+
//                 "."+
//                 number.toString().Slice(-6,-4)+
//                 "M"
//             );
//         }else if(number >=1000000000){
//             return(
//                 number.toString().Slice(0,-9)+
//                 "."+
//                 number.toString().Slice(-9,-7)+
//                 "B"
//             );
//         }
//     }
// };


//one more short and easy funtion
export const convertNumbers = (number) => {
    const numberWithCommas = number.toLocaleString(); // Fixed typo: `toLocalString` -> `toLocaleString`
    var arr = numberWithCommas.split(",");
    if (arr.length === 5) {
        // Trillion
        return arr[0] + "." + arr[1].slice(0, 2) + "T";
    } else if (arr.length === 4) {
        // Billion
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else if (arr.length === 3) {
        // Millions
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else if (arr.length === 2) {
        // Thousands
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else {
        // Hundreds
        return number.toLocaleString(); // Fixed typo
    }
};
