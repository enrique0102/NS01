'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Login",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue0dd"
}, {
    "title": "Platos",
    "moduleName": "components/platos/platos",
    "icon": "\ue0eb"
}, {
    "title": "Mis Direcciones",
    "moduleName": "components/direccion/direccion",
    "icon": "\ue0eb"
}, {
    "title": "Carrito de Compras",
    "moduleName": "components/orden/orden",
    "icon": "\ue205"
}, {
    "title": "Seguimiento",
    "moduleName": "components/seguimiento/seguimiento",
    "icon": "\ue0dc"
}, {
    "title": "Sign Out",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue1ff",
    "context": {
        "logout": true
    }
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;