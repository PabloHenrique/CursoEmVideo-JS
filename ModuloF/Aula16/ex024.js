//Demostração de função chamada por função

function fat(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fat(n-1)
    }
}


console.log(fat(5))
/*
!5 = 5 x 4 x 3 x 2 x 1
<=>
5 x 4!


!numero = numero x !(numero -1)
!1 = 1
*/