        // ==========================================
        // Suma tres valores
        // ==========================================
        const primervalor = document.getElementById("valor1");
        const segundovalor = document.getElementById("valor2");
        const tercervalor = document.getElementById("valor3");

        const r = document.getElementById("r");

        const mensajeGeneral =
            document.getElementById("mensajeGeneral");

        function calcularsuma() {
        
            const a = parseFloat(primervalor.value);
            const b = parseFloat(segundovalor.value);
            const c = parseFloat(tercervalor.value);
        
            const resultado = document.getElementById("resultadoSuma");
        
            if (primervalor.value === "" ||
                segundovalor.value === "" ||
                tercervalor.value === "") {
        
                resultado.textContent = "Ingrese los tres números.";
                return;
            }
        
            resultado.textContent = "El resultado de la suma es: " + (a + b + c);
        
        }

        // ==========================================
        // Nuemero al cuadrado
        // ==========================================

        const nCuadrado = document.getElementById("nCuadrado");
        const resultado =document.getElementById("resultado");

        function calcularCuadrado() {
        
            const numero = parseFloat(nCuadrado.value);
        
            const resultado = document.getElementById("resultadoCuadrado");
        
            if (nCuadrado.value === "") {
        
                resultado.textContent = "Ingrese un número.";
                return;
            }
        
            resultado.textContent = "El resultado de " + numero + " al cuadrado es: " + Math.pow(numero, 2);
        
        }

        // ==========================================
        // PROMEDIO
        // ==========================================
        
        const primernumero = document.getElementById("nota1");
        const segundonumero = document.getElementById("nota2");
        const tercernumero = document.getElementById("nota3");
        
        const estudiante = document.getElementById("estudiante");
        
        function calcularPromedio() {
        
            const e = estudiante.value;
            const a = parseFloat(primernumero.value);
            const b = parseFloat(segundonumero.value);
            const c = parseFloat(tercernumero.value);
        
            const resultado = document.getElementById("resultadoPromedio");
        
            // Verificar campos vacíos
        
            if (e.trim() === "" ||
                primernumero.value === "" ||
                segundonumero.value === "" ||
                tercernumero.value === "") {
        
                resultado.textContent = "Complete todos los campos.";
                return;
            }
        
            // Calcular promedio
        
            const promedio = (a + b + c) / 3;
        
            // Mostrar resultado
        
            resultado.textContent =
                "El promedio de " + e + " es: " + promedio;
        
        }

        // ==========================================
        // CONVERSION
        // ==========================================
        
        const m = document.getElementById("unidades");
        
        const resul = document.getElementById("resultadocm");
        
        const result = document.getElementById("resultadokm");
        
        function convertirUnidades() {
        
            const metros = parseFloat(m.value);
        
            // Verificar si está vacío
        
            if (m.value === "") {
        
                resul.textContent = "Ingrese una cantidad de metros.";
                result.textContent = "";
        
                return;
            }
        
            // Realizar conversiones
        
            const centimetros = metros * 100;
            const kilometros = metros / 1000;
        
            // Mostrar resultados
    
            result.textContent = metros +"m equivalen a: "+ centimetros + " cm y a: " + kilometros + " km";
        }
        
        // ==========================================
        // COMPARACION
        // ==========================================
        
        const a = document.getElementById("n1");
        const b = document.getElementById("n2");
        
        const resultad = document.getElementById("resultadoComparacion");
        
        function compararNumeros() {
        
            const numero1 = parseFloat(a.value);
            const numero2 = parseFloat(b.value);
        
            // Verificar si los campos están vacíos
        
            if (a.value === "" || b.value === "") {
        
                resultad.textContent = "Ingrese ambos números.";
        
                return;
            }
        
            // Calcular diferencia
        
            const diferencia = Math.abs(numero1 - numero2);
        
            // Comparar los números
        
            if (numero1 > numero2) {
        
                resultad.textContent =
                    "El mayor es: " + numero1 +
                    "  El menor es: " + numero2 +
                    "  la diferencia es: " + diferencia;
        
            } else if (numero2 > numero1) {
        
                resultad.textContent =
                    "El mayor es: " + numero2 +
                    "  El menor es: " + numero1 +
                    "  la diferencia es: " + diferencia;
        
            } else {
        
                resultad.textContent =
                    "Ambos números son iguales. La diferencia es: 0";
        
            }
        
        }
     // ==========================================
     // BLOQUEAR LA LETRA "E" EN LOS CAMPOS
     // ==========================================

     const camposNumericos = document.querySelectorAll(
         'input[type="number"]'
     );

     camposNumericos.forEach(function(campo) {

         campo.addEventListener("keydown", function(event) {

             if (event.key === "e" || event.key === "E") {
                 event.preventDefault();
             }

         });

     });