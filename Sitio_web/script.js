// 1. Datos de los productos (Rutas actualizadas a la carpeta galery)
const baseDeDatos = {
    "productos": [
        { "id": 1, "nombre": "ECHO-Pulse Pro", "tipo": "Audio", "precio": 1850, "desc": "Cancelación de ruido.", "img": "galery/image1.jpg" },
        { "id": 2, "nombre": "ECHO-Void Wireless", "tipo": "Audio", "precio": 2100, "desc": "Sonido 7.1 Espacial.", "img": "galery/image3.jpg" },
        { "id": 3, "nombre": "KeySync Mech RGB", "tipo": "Periférico", "precio": 1200, "desc": "Switches Brown.", "img": "galery/image5.jpg" },
        { "id": 4, "nombre": "Glide-Sync Mouse", "tipo": "Periférico", "precio": 950, "desc": "25k DPI óptico.", "img": "galery/image4.jpg" },
        { "id": 5, "nombre": "ECHO-Control Suite", "tipo": "Software", "precio": 450, "desc": "Gestión Cloud.", "img": "galery/image2.jpg" }
    ]
};

// 2. Ejecución principal al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    
    // RENDERIZAR PRODUCTOS
    const grid = document.getElementById('catalogo-grid');
    if (grid) {
        grid.innerHTML = ""; 
        baseDeDatos.productos.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${prod.img}" alt="${prod.nombre}" style="width:100%; border-radius:10px; margin-bottom:15px;">
                <h3>${prod.nombre}</h3>
                <p><strong>Categoría:</strong> ${prod.tipo}</p>
                <p>${prod.desc}</p>
                <p style="color: #00f2ff; font-weight: bold;">$${prod.precio} MXN</p>
                <button>Añadir al Carrito</button>
            `;
            grid.appendChild(card);
        });
    }

    // --- MANEJO DEL REGISTRO REAL (CONEXIÓN CON PYTHON) ---
    const regForm = document.getElementById('formRegistroCompleto');
    if (regForm) {
        regForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const usuario = document.getElementById('regUser').value; // Asegúrate que el ID sea regUser
            const email = document.getElementById('regEmailPersonal').value; // Asegúrate que el ID sea regEmailPersonal
            const pass = document.getElementById('regPass').value;

            // Datos que enviaremos al servidor
            const datosParaEnviar = {
                usuario: usuario,
                email: email,
                password: pass
            };

            try {
                // Hacemos la petición al servidor Flask (app.py)
                const respuesta = await fetch('http://localhost:5000/registro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosParaEnviar)
                });

                if (respuesta.ok) {
                    const resultado = await respuesta.json();
                    console.log("Servidor Python responde:", resultado.message);
                    
                    // Ocultar formulario y mostrar éxito
                    regForm.style.display = 'none';
                    const msg = document.getElementById('msgConfirmacionRegistro');
                    if(msg) msg.style.display = 'block';
                    
                } else {
                    alert("Hubo un problema con el registro en el servidor.");
                }
            } catch (error) {
                console.error("Error de conexión:", error);
                alert("Error: No se pudo conectar con el servidor Python. ¿Ya ejecutaste 'python app.py'?");
            }
        });
    }
});

function enviarDuda() {
    alert("Tu mensaje ha sido enviado al equipo de soporte de ECHO-Sync. Te responderemos pronto.");
}