var idade = 21
console.log(`Você tem ${idade}`)
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade >= 65) {
    console.log('Vota opcional')
}else {
    console.log('vota obrigatório')
}