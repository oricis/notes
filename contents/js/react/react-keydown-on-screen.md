# ReactJS

## Como capturar el uso de teclas globalmente

Al usar mi "React TODO App" en su segunda versión, que incluye dos pantallas,
para gestionar listas y las tareas de cada lista, enseguida me di cuenta
de que debía agilizar el cambio entre pantallas usando el teclado.

Los eventos de teclado suelen estar asociados a elementos concretos,
generalmente campos de entrada de formulario, pero puede ser necesario
capturar la pulsación de teclas a nivel de pantalla o aplicación.

Encontré la siguiente respuesta: https://stackoverflow.com/a/46123962/3919660
a una pregunta referente a la detección de la tecla <kbd>ESC</kbd>.

Para mí "feature" solo añadí una variable que guarda el código numérico
de la última tecla pulsada, comprobando antes si la tecla guardada es
la primera de la combinación que quería usar y si es así, llama a
la función que realiza normalmente el cambio de pantalla cuando se pulsa
el botón correspondiente de la interfaz. Una de esas pocas cosas que
son increíblemente simples de implementar...

Código de la aplicación con los citados cambios:
https://github.com/oricis/react__todo-list-practice/commit/9031c43b0f8f4707bc44bd5be877d11dc18092d1


### Usando Hooks

    import React, { useEffect } from 'react';

    const App = () =>
    {
        let lastUsedKeyCode = 0;

        const handleKeyDown = (e) =>
        {
            // Key codes
            // 16 - caps
            // 18 - alt

            const keyCode = e.keyCode
            if (keyCode === 18 && lastUsedKeyCode === 16) {
                lastUsedKeyCode = keyCode;
                swapAppMode();
            }
            lastUsedKeyCode = keyCode;
        }

        const swapAppMode = () =>
        {
            // TODO:
        }

        useEffect(() => {
            document.addEventListener("keydown", handleKeyDown, false);

            return () => {
                document.removeEventListener("keydown", handleKeyDown, false);
            };
        }, []);

        return (
            <div className="App">
                This is the App
            </div>
        );
    }

    export default App;


### Usando clases

    import React, { Component } from 'react';

    class App extends Component
    {
        lastUsedKeyCode  = 0;


        constructor(props)
        {
            super(props);

            this.appStorage = new AppStorage();
            this.state = this.init();
        }

        render()
        {
            return (
                <div className="App">
                    This is the App
                </div>
            );
        }

        componentDidMount()
        {
            document.addEventListener("keydown", this.handleKeyDown, false);
        }

        componentWillUnmount()
        {
            document.removeEventListener("keydown", this.handleKeyDown, false);
        }


        handleKeyDown = (e) =>
        {
            // Key codes
            // 16 - caps
            // 18 - alt

            const keyCode = e.keyCode;
            if (keyCode === 18 && this.lastUsedKeyCode === 16) {
                this.lastUsedKeyCode = keyCode;
                this.swapAppMode();
            }
            this.lastUsedKeyCode = keyCode;
        }

        swapAppMode = () =>
        {
            // TODO:
        }
    }

    export default App;


***

[Go to index](../../../README.md)
