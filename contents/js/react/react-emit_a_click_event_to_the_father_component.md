# ReactJS

## Cómo enviar un evento clic al componente padre

Tenemos un componente padre "App" y uno hijo, en este caso "Button".
Cuando se pulse sobre un "Button" voy a realizar una acción en el
componente padre "App".

    // index.js

    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    class App extends Component
    {
        render()
        {
            return (
                <div className="wrapper">
                    <Button
                        text="Clic aquí"
                        onClick={() => { this.showEventMessage() }}></Button>
                </div>
            );
        }

        showEventMessage = () => {
            console.log('The button was clicked !');
        }
    }

    class Button extends Component
    {
        render()
        {
            return (
                <button onClick={() => { this.props.onClick() }}>
                    {this.props.text}
                </button>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );


Alternativamente podemos definir una función en la clase Button que
emita el evento:

    class Button extends Component {
        render() {
            return (
                <button onClick={this.emitTheOnClic}>
                    {this.props.text}
                </button>
            );
        }

        emitTheOnClic = () => {
            this.props.onClick()
        }
    }

***

## Cómo enviar un ID mediante un evento clic al componente padre

Puede que tengamos varios botones y necesitemos identificar cual se
pulso, sin pasar una función específica por props para cada botón, lo
que rompe el principio de reutilización de componentes, podemos usar,
por ejemplo, identificadores.

    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    class App extends Component
    {
        render()
        {
            return (
                <div className="wrapper">
                    <Button
                        id="btn-1"
                        text="Botón 1"
                        onClick={(id) => { this.showEventMessage(id) }}></Button>
                    <Button
                        id="btn-2"
                        text="Botón 2"
                        onClick={(id) => { this.showEventMessage(id) }}></Button>
                </div>
            );
        }

        showEventMessage = (id) => {
            console.log('The button with ID "' + id +'" was clicked !');
        }
    }

    class Button extends Component
    {
        render()
        {
            return (
                <button onClick={this.emitTheOnClic}>
                    {this.props.text}
                </button>
            );
        }

        emitTheOnClic = () => {
            this.props.onClick(this.props.id)
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );


si bien con este método vemos como pasar un dato como argumento de una
función pasada por props, puede resultar mejor llamar a funciones
concretas en el componente padre asociadas a cada Button:

    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    class App extends Component {
        render() {
            return (
                <div className="wrapper">
                    <Button
                        text="Botón 1"
                        onClick={ this.onClickOnBtnOne }></Button>
                    <Button
                        text="Botón 2"
                        onClick={ this.onClickOnBtnTwo }></Button>
                </div>
            );
        }


        onClickOnBtnOne = () => {
            this.showEventMessage(1);
        }
        onClickOnBtnTwo = () => {
            this.showEventMessage(2);
        }
        showEventMessage = (btnNumber) => {
            console.log('The button number "' + btnNumber + '" !');
        }
    }

    class Button extends Component {
        render() {
            return (
                <button onClick={this.emitTheOnClic}>
                    {this.props.text}
                </button>
            );
        }

        emitTheOnClic = () => {
            this.props.onClick()
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

***

[Go to index](../../../README.md)
