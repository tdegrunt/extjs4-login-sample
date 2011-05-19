var strings = {};
strings.nl = {
  "_Username": "Gebruikersnaam" 
};
strings.en = {
  "_Username": "Username" 
};

String.prototype.l = function() {
  console.log('name: '+Ext.app.Application.name);
  var lang = 'nl';
  var result = this;
  if (strings[lang] && strings[lang][this]) result = strings[lang][this]; 
  return result;
};

Ext.application({
    name: 'LM',

    appFolder: 'app',

    controllers: [
        'LoginController'
    ],
    
    launch: function() {
			//Ext.create('LM.view.Main', {});
     	Ext.create('LM.view.LoginWindow', {}).show();
			Ext.create('Ext.container.Viewport', {
          layout: 'fit',
          items: [
              {
                  xtype: 'mainview',
              }
          ]
			});
    },
    //autoCreateViewport: true
});
