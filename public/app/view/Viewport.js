Ext.require('LM.view.Main');

Ext.define('LM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    layout: 'fit',

    items: [
        {
          xtype: 'mainview',
        },
    ],
});