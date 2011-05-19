Ext.define('LM.controller.LoginController', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            'loginwindow': {
                render: this.onPanelRendered
            },
            'loginwindow button[action=login]': {
                click: this.login
            },
            'loginwindow textfield': {
            	specialkey: this.keyenter
            },
            'mainview button[action=logout]': {
            	click: this.logout
            }
        });
    },
    refs: [
        {
            ref: 'mainview',
            selector: 'mainview'
        },
        {
        		ref: 'loginwindow',
        		selector: 'loginwindow'
        }
    ], 
    views: [
    	'Main'
    ],   

    onPanelRendered: function(panel) {
      console.log('The panel was rendered');
    },
    
    login: function(button) {
			var win    = button.up('window'),
	        form   = win.down('form'),
	        values = form.getValues();
	        
	    if (values.userName == "admin") {
	    	var lay = this.getMainview().getLayout();
				lay.setActiveItem(1);
	    	win.hide();	
	    }
    },
    keyenter: function() {
        console.log('keyenter');
    },
    logout: function(button) {
    		console.log('logout');
	    	var lay = this.getMainview().getLayout();
				lay.setActiveItem(0);
				var win = this.getLoginwindow();
				win.show();
    }
});