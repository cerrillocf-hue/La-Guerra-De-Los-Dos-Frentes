# La Guerra de los Dos Frentes

Juego narrativo/aventura 2D hecho con **Phaser 3** en JavaScript, 
sin librerías externas.  
originalmente lo hice en python pero al ver que nesesitaba imagenes locales 
decidi que mejor en phaser 3

## Descripción
Controlas a **Alex** en un mundo escolar interactivo con NPCs y diálogos.  
Puedes explorar, interactuar con personajes y tomar decisiones que afectan la historia.
lamentablemente aun es un demo pero 

#apartado tecnico 
El juego tiene diferentes estados: `menu`, `despertar`, `correr`, `llegada`, `dia1`, `overworld` y `epilogo`.  
y lo logramos implementar con escenas . 
**el objetivo es hacer que llegue a poki pero aun falta mucho para eso**
## Cómo ejecutar
1. Abrir `index.html` en un navegador moderno.  
2. La animación de la nave y el logo se reproduce automáticamente.  
3. Para agregar nuevas escenas:
   - Crear un archivo en `src/scenes/`.
   - Extender `Phaser.Scene` como en `Start.js`.
   - Registrar la nueva escena en el arreglo `scene` de `main.js`.

## Controles
- **Mover a Alex**: WASD o flechas.  
- **Interactuar con NPCs**: `E`.  
- **Avanzar diálogos**: `ENTER`.  
- **Opciones en diálogos**: Z/X (según la situación).  

## Mecánicas
- Overworld con interacción de NPCs y diálogos.  
- Estados de juego con transición entre escenas.  
- Minijuegos simples integrados (como el mini “correr” A/D).  
- Epílogos y escenas finales que se activan al completar interacciones clave. 


#Mensaje especial
Espero que la pasen muy bien jugvando este demo chiquito que como esta en la intro 
solo fue creado por 2 soles (por ahora)

## Tecnologías
- JavaScript
- Phaser 3
- HTML/CSS

## Autor
Soy ese
