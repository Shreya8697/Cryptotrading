export const convertDate=(number)=>{
    var myDate=new Date(number);
    return myDate.getDate()+"/"+(myDate.getMonth()+1);//adding +1 for month start from 1 and arry start from 0
};