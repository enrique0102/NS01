'use strict';

var isInit = true,
    helpers = require('../../../utils/widgets/helper'),
    // additional requires
    dataService = require('../../../dataProviders/kikeBs'),
    viewModel = require('./addItemForm-view-model');

function onRequestSuccess() {
    helpers.back();
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

exports.onCancelTap = function onCancelTap() {
    helpers.back();
};

exports.onSaveTap = function onSaveTap() {
    var data = dataService.data('Direccion');

    data.save({

            Nombre: viewModel.get('nombre'),

            Numero: viewModel.get('numero'),

            Referencia: viewModel.get('referencia'),

            Latitud: viewModel.get('latitud'),

            Longitud: viewModel.get('longitud'),

            // save properties

        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    viewModel.set('nombre', '');

    viewModel.set('numero', '');

    viewModel.set('referencia', '');

    viewModel.set('latitud', '');

    viewModel.set('longitud', '');

    // init properties

    page.bindingContext = viewModel;

    // additional pageLoaded
}

// START_CUSTOM_CODE_direccionModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_direccionModel
exports.pageLoaded = pageLoaded;