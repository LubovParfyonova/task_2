// Диаметр

const PI = 3.14;
const d = +prompt('Введите диаметр окружности, см');

function l(x){
    return PI * x;
}

console.log('Длина окружности равна ' + l(d) + ' см');
alert('Длина окружности равна ' + l(d) + ' см');