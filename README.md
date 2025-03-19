## Amigo Secreto 🎁

¡Bienvenido al proyecto **Amigo Secreto**! Esta aplicación permite a los usuarios ingresar nombres de amigos en una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto" de cada uno.

![image](https://github.com/user-attachments/assets/267dd231-b5df-4b90-9bb6-30ad63389c97)
---

## 🚀 Descripción del proyecto

El proyecto consiste en una aplicación web simple que permite:
1. **Agregar nombres**: Los usuarios pueden ingresar nombres de amigos en un campo de texto y agregarlos a una lista visible.
2. **Validar entrada**: Si el campo de texto está vacío, se muestra una alerta pidiendo un nombre válido.
3. **Visualizar la lista**: Los nombres ingresados se muestran en una lista debajo del campo de entrada.
4. **Sorteo aleatorio**: Al hacer clic en el botón "Sortear Amigo", se selecciona un nombre aleatorio de la lista y se muestra en la página.

---

## 🛠️ Tecnologías utilizadas

- **HTML**: Estructura de la página.
- **CSS**: Estilos y diseño visual.
- **JavaScript**: Lógica para agregar nombres, validar entradas y realizar el sorteo.

---

## 📂 Estructura del proyecto

El proyecto está organizado de la siguiente manera:

![image](https://github.com/user-attachments/assets/e71bdf98-9dc5-4453-91eb-ab0e372ff26c)

---

## 🛠️ Instalación y uso

### Requisitos previos
- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- Editor de texto (opcional, para modificar el código).

### Pasos para ejecutar el proyecto
1. Clona este repositorio o descarga los archivos directamente.
2. Abre el archivo `index.html` en tu navegador.
3. ¡Listo! Ya puedes usar la aplicación.

---

## 🎯 Funcionalidades

### 1. Agregar nombres
- Escribe un nombre en el campo de texto y haz clic en "Añadir".
- El nombre se agregará a la lista debajo del campo de entrada.

### 2. Validar entrada
- Si el campo de texto está vacío, se mostrará una alerta pidiendo un nombre válido.

![image](https://github.com/user-attachments/assets/d929c42a-e24f-410c-a39c-54c52f4b2ffe)


### 3. Visualizar la lista
- Los nombres ingresados se muestran en una lista (`<ul>`).

### 4. Sorteo aleatorio
- Haz clic en "Sortear Amigo" para seleccionar un nombre aleatorio de la lista.
- El resultado se mostrará en la parte inferior de la página.

---

## 🧩 Código clave

### Agregar nombres
```js
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarListaAmigos();
}
```

![image](https://github.com/user-attachments/assets/aeab038e-7700-4e00-bd22-a2bfc2e10ddd)


### Sorteo aleatorio
```js
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}
```

![image](https://github.com/user-attachments/assets/5607a1f1-cf42-4310-8361-0e415683d1c7)


---

## 🐛 Problemas conocidos y soluciones
1. No se puede eliminar nombres de la lista
Solución: Puedes agregar un botón de "Eliminar" junto a cada nombre en la lista. Aquí tienes un ejemplo:
```js
const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";
botonEliminar.onclick = () => eliminarAmigo(i);
elementoLista.appendChild(botonEliminar);
```
---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).

Realiza tus cambios y haz commit (`git commit -m "Añadí nueva funcionalidad"`).

Sube tus cambios (`git push origin nueva-funcionalidad`).

Abre un Pull Request.

---

## ✉️ Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Widlins Dorvil

Email: ondorvil@gmail.com

GitHub: SirDorvil

---

### ¡Gracias por visitar este proyecto! Espero que te sea útil. 😊

---

### **¿Qué incluye este README?**
1. **Descripción del proyecto**: Explica qué hace la aplicación.
2. **Tecnologías utilizadas**: Menciona las herramientas y lenguajes usados.
3. **Estructura del proyecto**: Describe la organización de los archivos.
4. **Instalación y uso**: Proporciona instrucciones para ejecutar el proyecto.
5. **Funcionalidades**: Detalla las características principales.
6. **Código clave**: Muestra fragmentos importantes del código.
7. **Problemas conocidos y soluciones**: Ofrece soluciones a posibles problemas.
8. **Contribuciones**: Explica cómo otros pueden contribuir al proyecto.
9. **Contacto**: Proporciona información para contactar al desarrollador.

---
