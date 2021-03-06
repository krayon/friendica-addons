/*

Jappix - An open social platform
These are the Ad-Hoc JS scripts for Jappix

-------------------------------------------------

License: AGPL
Author: Vanaryon
Last revision: 11/07/11

*/

// Opens the adhoc popup
function openAdHoc() {
	// Popup HTML content
	var html = 
	'<div class="top">' + _e("Commands") + '</div>' + 
	
	'<div class="content">' + 
		'<div class="adhoc-head"></div>' + 
		
		'<div class="results adhoc-results"></div>' + 
	'</div>' + 
	
	'<div class="bottom">' + 
		'<div class="wait wait-medium"></div>' + 
		
		'<a href="#" class="finish">' + _e("Close") + '</a>' + 
	'</div>';
	
	// Create the popup
	createPopup('adhoc', html);
	
	// Associate the events
	launchAdHoc();
	
	return false;
}

// Quits the adhoc popup
function closeAdHoc() {
	// Destroy the popup
	destroyPopup('adhoc');
	
	return false;
}

// Retrieves an entity adhoc command
function retrieveAdHoc(xid) {
	// Open the popup
	openAdHoc();
	
	// Add a XID marker
	$('#adhoc .adhoc-head').html('<b>' + getBuddyName(xid).htmlEnc() + '</b> (' + xid.htmlEnc() + ')');
	
	// Get the highest entity resource
	var highest = getHighestResource(xid);
	
	if(highest)
		xid = highest;
	
	// Start a new adhoc command
	dataForm(xid, 'command', '', '', 'adhoc');
	
	return false;
}

// Starts an adhoc command on the user server
function serverAdHoc(server) {
	// Open the popup
	openAdHoc();
	
	// Add a XID marker
	$('#adhoc .adhoc-head').html('<b>' + server.htmlEnc() + '</b>');
	
	// Start a new adhoc command
	dataForm(server, 'command', '', '', 'adhoc');
}

// Addon launcher
function launchAdHoc() {
	// Click event
	$('#adhoc .bottom .finish').click(closeAdHoc);
}
