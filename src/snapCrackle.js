// Seu código vai aqui

function snapCrackle(maxValue){
    let array = []

    for(let contador = 1; contador <= maxValue;contador++){
        let num = ""
        if(contador % 2 !== 0){
            num += "Snap"
            
        }
        if(contador % 5 === 0){
            num += "Crackle"
            
        }
        if(contador % 2 !== 0 && contador % 5 === 0){
            num += ""
            
            
        }
        if(contador % 2 === 0 && contador % 5 !== 0){
            num = contador
            
        }
        array.push(num)
    }
    return array
}
console.log(snapCrackle(15).join())