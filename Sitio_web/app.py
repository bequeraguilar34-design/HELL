from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Lista para guardar a CUALQUIER persona que se registre
base_datos_usuarios = []

@app.route('/registro', methods=['POST'])
def registro_usuario():
    datos = request.json
    nombre_usuario = datos.get('usuario')
    correo_usuario = datos.get('email')
    
    # Guardamos la información recibida de la web
    nuevo_registro = {
        "nombre": nombre_usuario,
        "email": correo_usuario
    }
    base_datos_usuarios.append(nuevo_registro)
    
    print(f"\n--- NUEVO REGISTRO EN ECHO-SYNC ---")
    print(f"Nombre: {nombre_usuario}")
    print(f"Correo: {correo_usuario}")
    print(f"Total de usuarios registrados: {len(base_datos_usuarios)}")
    
    return jsonify({
        "status": "success",
        "mensaje": f"¡Bienvenido {nombre_usuario}! Tu registro está listo."
    }), 200

if __name__ == '__main__':
    print("Servidor de ECHO-Sync corriendo en http://localhost:5000")
    app.run(debug=True, port=5000)