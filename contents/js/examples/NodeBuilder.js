/**
 * JS-UI
 *
 * Moisés Alcocer, 2021
 * https://www.ironwoods.es / https://github.com/oricis/js-ui
 * MIT Licence
 */

'use strict';

class NodeBuilder // class
{

    addAttributes(node, objAttributes = {}) // js node
    {
        for (const key in objAttributes) {
            if (Object.hasOwnProperty.call(objAttributes, key)) {
                const element = objAttributes[key];

                node.setAttribute(key, element);
            }
        }

        return node;
    }
    addChildren(node, arrChildNodes = []) // js node
    {
        for (let index = 0; index < arrChildNodes.length; index++) {
            const childNode = arrChildNodes[index];
            node.appendChild(childNode);
        }

        return node;
    }
    addHtmlContent(node, htmlString) // js node
    {
        node.innerHTML = htmlString;

        return node;
    }
    addTextContent(node, text) // js node
    {
        node.appendChild(document.createTextNode(text));

        return node;
    }
    build(strElement, objAttributes = {}, arrChildNodes = [], text) // js node
    {
        let node = document.createElement(strElement);
        if (objAttributes) {
            node = this.addAttributes(node, objAttributes);
        }
        if (arrChildNodes) {
            node = this.addChildren(node, arrChildNodes);
        }
        if (text) {
            node = this.addTextContent(node, text);
        }

        return node;
    }
}
const nodeBuilder = new NodeBuilder();
