# Escalas del Universo V15 — respaldo para iPad

Esta es una **versión alternativa** de la V15, no una versión nueva del contenido:
conserva 50 objetos, galerías, datos curiosos, reglas, tres dificultades,
cronómetro, premios, clasificación y puntuación acumulada. Se añadieron
controles de arrastre y deslizamiento táctiles, y una instalación sin conexión.

## Importante antes de empezar

- No se obtiene una app `.ipa`: es una **aplicación web instalable** (PWA).
- **No basta con descomprimir el ZIP en el iPad y tocar `index.html`.** La
  vista previa de Archivos no garantiza JavaScript ni instalación offline.
- Hace falta **publicar una sola vez** la carpeta en una dirección web
  **HTTPS**. El uso posterior puede ser independiente de internet y laptop.
- Esta distribución ocupa unos 200 MB. Reserva al menos 500 MB libres en el
  iPad, preferiblemente 1 GB, para descargas y almacenamiento temporal.
- **No está probado físicamente en un iPad**: ejecuta la prueba sin internet
  antes del evento. El almacenamiento de una PWA puede eliminarse si el
  dispositivo queda sin espacio o se borran sus datos.

## Publicación recomendada: GitHub Pages

Por el tamaño de los archivos, utiliza Git en computadora (no el botón de
subida del navegador de GitHub, que limita el tamaño individual de archivos).

1. Descomprime el ZIP en la computadora. Entra a la carpeta
   `Escalas_Universo_V15_iPad_Respaldo`; ahí deben estar `index.html`,
   `preparar_ipad.html`, `manifest.json`, `service-worker.js` y `assets/`.
2. Crea un **repositorio público vacío** de GitHub, por ejemplo
   `Escalas-Universo-V15-iPad`. No marques README ni licencia al crearlo.
   (GitHub Pages sirve archivos públicamente: no hagas esto si necesitas
   mantener privada la aplicación.)
3. Abre una terminal en la carpeta descomprimida y ejecuta, adaptando el
   usuario y nombre de repositorio:

   git init
   git add .
   git commit -m "V15 respaldo iPad"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/Escalas-Universo-V15-iPad.git
   git push -u origin main

   Si Git pide identificación, configura usuario y correo para commits,
   o utiliza GitHub Desktop. No subas el ZIP como archivo: publica su contenido.
4. En GitHub, entra a **Settings → Pages**, elige **Deploy from a branch**,
   rama `main`, carpeta `/(root)` y guarda.
5. Abre en una computadora y verifica el enlace HTTPS:

   https://TU_USUARIO.github.io/Escalas-Universo-V15-iPad/preparar_ipad.html

La publicación inicial necesita conexión a internet. La carpeta puede
publicarse también en otro alojamiento HTTPS que admita archivos de ~50 MB.

## Instalación en iPad (con internet, una sola vez)

1. Abre el enlace `preparar_ipad.html` en **Safari** del iPad.
2. Pulsa **Compartir → Añadir a pantalla de inicio** y confirma
   «Abrir como aplicación web» si aparece esa opción.
3. Vuelve a la pantalla de inicio y toca el icono **Escalas V15**.
4. Pulsa **Descargar recursos para usar sin internet**.
5. Mantén Safari/app abierta y la conexión activa durante la descarga.
   Espera hasta ver **«Preparación completada»**. Si se corta, toca
   **Continuar descarga** (conserva lo descargado).
6. Toca **Entrar a la V15** y comprueba la navegación y el ordenamiento.

**No descargues todos los archivos desde Safari ANTES de instalar**: para
asegurar la disponibilidad offline, realiza la preparación dentro de la app
abierta desde su icono de la pantalla de inicio.

## Ensayo obligatorio sin conexión

1. Cierra la aplicación después de que termine la preparación.
2. Activa el **modo avión** y comprueba que el Wi-Fi esté apagado.
3. Abre **Escalas V15** desde su icono. Debe entrar automáticamente al juego.
4. Prueba una partida: arrastra tarjetas con el dedo, utiliza las flechas,
   abre varias galerías y comprueba que animaciones e imágenes se vean.
5. Cierra y vuelve a abrir. Comprueba que el estado local se conserva.
6. Haz esta misma prueba un día antes de la actividad.

Si la app pide descarga de recursos de nuevo, vuelve a conectarte a internet
y repite la preparación. iPadOS puede eliminar datos web bajo ciertas
condiciones; por eso no es sensato prometer un respaldo offline permanente.

## Controles de la V15 para iPad

- **Arrastrar tarjetas**: coloca el dedo sobre la imagen o cuerpo de una tarjeta,
  deslízala a otra posición y suéltala. También sirven las flechas **← →**.
- **Galerías**: desliza horizontalmente sobre la imagen o toca las flechas.
- **Círculos**: toca uno para ir directamente a esa fotografía.
- **Ampliar**: usa el botón original, ahora con superficie táctil adecuada.
- Recomendamos usar el iPad **en horizontal**.
- Todas las reglas, tiempos y puntuaciones funcionan como en la V15 original.

## Alcances y precauciones

- Esta instalación **no necesita la laptop una vez preparada**.
- Al terminar la preparación tampoco necesita internet para los recursos
  empaquetados, siempre que sigan en la memoria caché de la aplicación.
- Las **puntuaciones de iPad y computadora no se sincronizan**; si la laptop
  se apaga a mitad de una partida, el iPad permite empezar otra, pero no
  retoma automáticamente la partida anterior de la laptop.
- No borres datos del sitio ni la app. Conserva la V15 original de PC.
- Si pulsas F5/recargas en un dispositivo que no tiene recursos precargados,
  la página no funcionará sin internet. En iPad, instala y prepara antes.

El código generado es solo una variante de entrada táctil y distribución.
El contenido de los 50 objetos de V15 se ha conservado sin modificaciones.
