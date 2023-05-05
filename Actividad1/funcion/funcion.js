let Datos = [
                {nombre: "Iván", Rango: "Aprendiz"},
                {nombre: "Paca", Rango: null},
                {nombre: "Benítez", Rango: null},
                {nombre: "Heraclio", Rango: null},
                {nombre: "Haydée", Rango: null},
                {nombre: "Cruz", Rango: "Aprendiz"},
                {nombre: "Manu", Rango: "Aprendiz"},
                {nombre: "Ruperta", Rango: null},
                {nombre: "Amílcar", Rango: null},
                {nombre: "Leonor", Rango: "Aprendiz"},
                {nombre: "Rosalinda", Rango: "Aprendiz"},
                {nombre: "Adrián", Rango: "Aprendiz"},
                {nombre: "Eligio", Rango: null},
                {nombre: "Gervasio", Rango: null},
                {nombre: "Isidro", Rango: "Aprendiz"},
                {nombre: "Herminia", Rango: null}

]

let Telefono = Datos.filter(info => info.Rango)

console.log(Telefono);