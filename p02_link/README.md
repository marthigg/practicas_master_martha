# PRÁCTICA 2 - LINKS

1. Crear 3 páginas HTML: index.html, a.html y b.html. Todas en la misma carpeta.
2. Añadir un título a cada página.
3. Linkear las páginas entre sí utlilizando el elemento anchor (etiqueta `<a></a>`).
    - Este elemento debe ser creado dentro de cada una de las páginas y hacer referencia (href) a las otras páginas.

4. Añadir atributo `title=""` a los anchors.

5. Añadir atributo `style=""` a los anchors para poner colores de texto: página A rojo, página B azul, página INDEX verde

6. Probar los atributos 'target' en los anchors:
    - `target="_self"` 
    - `target="_blank"`	

7. Crear una página C dentro de una carpeta que se llame 'folderC' y dentro de ella otra página D dentro de una carpeta que se llame 'folderD' y linkearlas todas entre sí con index ( index, c y d).

### NOTAS
- La sintaxis para el elemento anchor es:
    ```
    <a href="[RUTA AL FICHERO]">[CONTENIDO VISIBLE]</a>
    ```

- El atributo 'target' permite controlar como se abren las páginas linkedas en un anchor.
    - `target="_self"` - abre página en la misma pestaña (por defecto).
    - `target="_blank"`	- abre página en nueva pestaña.
    - `target="_parent"` - Investígalo.
    - `target="_top"` - Investígalo.

- El atributo 'title' permiten añadir un 'tooltip' para mostrar información extra a los elemetos HTML cuando se hece 'hover'.
    ```
    <a title="Esto es un tooltip para un anchor :)" href="https://developer.mozilla.org/es/">MDN</a>
    ```


### REFERENCIAS
- MDN Hyperlinks - https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
- MDN Atributos - https://developer.mozilla.org/es/docs/Web/HTML/Attributes