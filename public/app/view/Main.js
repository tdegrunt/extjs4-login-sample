Ext.define('LM.view.Main', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.mainview',
    
		activeItem: 0,
    defaults: {
        // applied to each contained panel
        border:false
    },
    layout: 'card',
        
    items: [
	    {
	    	id: 'card0',
	      html: ''
	    },
	    {
	    	id: 'card1',
	    	xtype: 'panel',
	    	items: [
		    	{
						xtype: 'button',
						text: 'logout',
						action: 'logout'
		    	}
	    	]
	    }
    ],        

	  initComponent: function() {
      this.callParent(arguments);
		},      
});