/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"trial_app/demoapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
