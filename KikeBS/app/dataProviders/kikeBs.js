var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    appId: 'uuly0o81wwk6g4uf',
    scheme: 'https'
});

// START_CUSTOM_CODE_kikeBs
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_kikeBs
module.exports = provider;