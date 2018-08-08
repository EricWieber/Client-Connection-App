var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.win = Ti.UI.createWindow(
	{ backgroundColor: "#163318", height: Ti.UI.FILL, id: "win", backgroundImage: "/FisherBackground.png", layout: "vertical" });

	$.__views.win && $.addTopLevelView($.__views.win);
	$.__views.topbar = Ti.UI.createView(
	{ top: "-10dp", height: "70dp", width: "103%", borderColor: "#fff", borderRadius: "30dp", borderWidth: "2dp", backgroundColor: "#215525", id: "topbar" });

	$.__views.win.add($.__views.topbar);
	$.__views.topTitle = Ti.UI.createLabel(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, text: 'Client Programs App', id: "topTitle" });

	$.__views.topbar.add($.__views.topTitle);
	$.__views.add = Ti.UI.createButton(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", right: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, id: "add", title: "   Options   " });

	$.__views.topbar.add($.__views.add);
	options ? $.addListener($.__views.add, 'click', options) : __defers['$.__views.add!click!options'] = true;$.__views.view = Ti.UI.createView(
	{ id: "view", layout: "vertical", opacity: 0, backgroundImage: "/Fisher-3.png" });

	$.__views.win.add($.__views.view);
	$.__views.inform = Ti.UI.createButton(
	{ top: "10%", height: "20%", width: "60%", borderColor: "#fff", borderRadius: "30dp", borderWidth: "3dp", backgroundColor: "#215525", color: "#fff", font: { fontSize: 36, fontWeight: "bold" }, title: 'Client Check In', id: "inform" });

	$.__views.view.add($.__views.inform);
	inform ? $.addListener($.__views.inform, 'click', inform) : __defers['$.__views.inform!click!inform'] = true;$.__views.informlbl = Ti.UI.createLabel(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "25dp", font: { fontSize: 20 }, text: 'Check in clients and notify the team of their arrival', id: "informlbl" });

	$.__views.inform.add($.__views.informlbl);
	$.__views.cards = Ti.UI.createButton(
	{ top: "10%", height: "20%", width: "60%", borderColor: "#fff", borderRadius: "30dp", borderWidth: "3dp", backgroundColor: "#215525", color: "#fff", font: { fontSize: 36, fontWeight: "bold" }, title: 'Client Info Cards', id: "cards" });

	$.__views.view.add($.__views.cards);
	cards ? $.addListener($.__views.cards, 'click', cards) : __defers['$.__views.cards!click!cards'] = true;$.__views.cardslbl = Ti.UI.createLabel(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "25dp", font: { fontSize: 20 }, text: 'View client info and export cards', id: "cardslbl" });

	$.__views.cards.add($.__views.cardslbl);
	$.__views.versionV = Ti.UI.createView(
	{ height: Ti.UI.FILL, id: "versionV" });

	$.__views.win.add($.__views.versionV);
	$.__views.version = Ti.UI.createLabel(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: 5, font: { fontSize: 10 }, left: 5, text: 'Version 1.0', id: "version" });

	$.__views.versionV.add($.__views.version);
	exports.destroy = function () {};




	_.extend($, $.__views);


	Ti.App.Properties.setString('currentWindow', "index");

	$.win.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

	$.version.text = "Version " + Titanium.App.version;
	$.win.open();

	$.view.animate(Titanium.UI.createAnimation({
		opacity: 1,
		duration: 1000,
		delay: 500 }));


	function inform() {
		var winx = Alloy.createController('inform-index', {}).getView();
		winx.open({ transition: Ti.UI.iOS.AnimationStyle.CURL_UP });
	}

	function cards() {
		var winy = Alloy.createController('card-index', {}).getView();
		winy.open({ transition: Ti.UI.iOS.AnimationStyle.CURL_UP });
		var winz = Alloy.createController('pass', {}).getView();
		winz.open();
		Ti.App.Properties.setString('currentWindow', "index");
	}

	function options() {
		var wina = Alloy.createController('options', {}).getView();
		wina.open({ transition: Ti.UI.iOS.AnimationStyle.CURL_UP });
		var winb = Alloy.createController('pass', {}).getView();
		winb.open();
		Ti.App.Properties.setString('currentWindow', "index");
	}

	Ti.App.addEventListener('pause', function (event) {
		if (Ti.App.Properties.getString('currentWindow') != "index") {
			var prompt = Alloy.createController('pass', {}).getView();
			prompt.open();
		}
	});





	__defers['$.__views.add!click!options'] && $.addListener($.__views.add, 'click', options);__defers['$.__views.inform!click!inform'] && $.addListener($.__views.inform, 'click', inform);__defers['$.__views.cards!click!cards'] && $.addListener($.__views.cards, 'click', cards);



	_.extend($, exports);
}

module.exports = Controller;