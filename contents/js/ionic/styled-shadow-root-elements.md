# Ionic 5 - Cambiar estilos internos del componente

> Problema: se quiere eliminar el borde inferior que aparece por defecto:

![toggle](https://user-images.githubusercontent.com/7187599/82436098-92af7b80-9a95-11ea-9f70-376627544877.png)


El estilo se aplica por defecto al elemento interno de `ion-item`
con la clase CSS: `item-inner`. Se encuentra dentro del `#shadow-root`.

![applied](https://user-images.githubusercontent.com/7187599/82436465-25e8b100-9a96-11ea-9b52-a1b4e619ad28.png)

***

> Se esta aplicando el estilo:

    --inner-border-width: 0 0 1px 0;


> Se sobreescribe con:

    ion-header ion-item {
        --inner-border-width: 0;
    }


***

[Go to index](../../../README.md)
