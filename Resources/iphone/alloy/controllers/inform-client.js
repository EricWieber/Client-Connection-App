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
  this.__controllerPath = 'inform-client';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.win4 = Ti.UI.createWindow(
  { id: "win4" });

  $.__views.win4 && $.addTopLevelView($.__views.win4);
  refresh ? $.addListener($.__views.win4, 'focus', refresh) : __defers['$.__views.win4!focus!refresh'] = true;$.__views.topbar = Ti.UI.createView(
  { top: "-10dp", height: "70dp", width: "103%", borderColor: "#fff", borderRadius: "30dp", borderWidth: "2dp", backgroundColor: "#215525", id: "topbar" });

  $.__views.win4.add($.__views.topbar);
  $.__views.topTitle = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, id: "topTitle" });

  $.__views.topbar.add($.__views.topTitle);
  $.__views.edit = Ti.UI.createButton(
  { height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", right: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, id: "edit", title: "     Edit     " });

  $.__views.topbar.add($.__views.edit);
  editMe ? $.addListener($.__views.edit, 'click', editMe) : __defers['$.__views.edit!click!editMe'] = true;$.__views.back = Ti.UI.createButton(
  { height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", left: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, id: "back", title: "   Clients   " });

  $.__views.topbar.add($.__views.back);
  closeWindow ? $.addListener($.__views.back, 'click', closeWindow) : __defers['$.__views.back!click!closeWindow'] = true;$.__views.scrollView = Ti.UI.createScrollView(
  { backgroundColor: "#163318", layout: "vertical", color: "#fff", top: "70dp", id: "scrollView" });

  $.__views.win4.add($.__views.scrollView);
  $.__views.name = Ti.UI.createTextArea(
  { font: { fontSize: 22 }, color: "#fff", height: Ti.UI.SIZE, width: "85%", borderRadius: "3dp", borderColor: "#163318", backgroundColor: "#163318", top: 5, textAlign: "center", id: "name", text: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.scrollView.add($.__views.name);
  focusNum ? $.addListener($.__views.name, 'return', focusNum) : __defers['$.__views.name!return!focusNum'] = true;$.__views.informed = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fbb", bottom: "10dp", font: { fontSize: 24, fontWeight: "bold" }, top: 30, textAlign: "center", id: "informed", text: "Message Not Sent", editable: false });

  $.__views.scrollView.add($.__views.informed);
  $.__views.separator = Ti.UI.createView(
  { width: "90%", height: "1dp", backgroundColor: "#5C705D", top: 15, bottom: 0, id: "separator" });

  $.__views.scrollView.add($.__views.separator);
  $.__views.numbersLbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ccc", bottom: "10dp", font: { fontSize: 18 }, top: 20, textAlign: "center", id: "numbersLbl", text: "Contact Number(s):", editable: false });

  $.__views.scrollView.add($.__views.numbersLbl);
  $.__views.numbers = Ti.UI.createTextArea(
  { font: { fontSize: 20 }, color: "#fff", height: Ti.UI.SIZE, width: "85%", borderRadius: "3dp", borderColor: "#163318", backgroundColor: "#163318", top: 5, textAlign: "center", id: "numbers", text: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.scrollView.add($.__views.numbers);
  focusMes ? $.addListener($.__views.numbers, 'return', focusMes) : __defers['$.__views.numbers!return!focusMes'] = true;$.__views.separator = Ti.UI.createView(
  { width: "90%", height: "1dp", backgroundColor: "#5C705D", top: 15, bottom: 0, id: "separator" });

  $.__views.scrollView.add($.__views.separator);
  $.__views.messageLbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ccc", bottom: "10dp", font: { fontSize: 18 }, top: 20, textAlign: "center", id: "messageLbl", text: "Contact Message:" });

  $.__views.scrollView.add($.__views.messageLbl);
  $.__views.message = Ti.UI.createTextArea(
  { font: { fontSize: 20 }, color: "#fff", height: Ti.UI.SIZE, width: "85%", borderRadius: "3dp", borderColor: "#163318", backgroundColor: "#163318", top: 5, textAlign: "center", id: "message", text: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_DONE, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.scrollView.add($.__views.message);
  $.__views.separator = Ti.UI.createView(
  { width: "90%", height: "1dp", backgroundColor: "#5C705D", top: 15, bottom: 0, id: "separator" });

  $.__views.scrollView.add($.__views.separator);
  $.__views.informBtn = Ti.UI.createButton(
  { top: 30, height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "informBtn", title: "Send Text(s)" });

  $.__views.scrollView.add($.__views.informBtn);
  sendText ? $.addListener($.__views.informBtn, 'click', sendText) : __defers['$.__views.informBtn!click!sendText'] = true;exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var file = args.file;
  var x = args.x;
  var y = args.y;


  var string = JSON.parse(file.read().text);
  var edit = "false";

  $.name.value = string[x][y].name;
  $.numbers.value = string[x][y].numbers;
  $.message.value = string[x][y].message;
  refresh();

  $.win4.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

  function refresh() {
    setStyle();

    string = JSON.parse(file.read().text);
    if (string[x][y].informed == "true") {
      $.informed.text = "Message Sent";
      $.informed.color = "#cfc";
    } else {
      $.informed.text = "Message Not Sent";
      $.informed.color = "#fcc";
    }
  }

  function closeWindow() {
    $.win4.close({ transition: Ti.UI.iOS.AnimationStyle.CURL_DOWN });
  }

  function setStyle() {
    edit = "false";
    $.edit.title = "     Edit     ";
    $.topTitle.text = "Client";
    $.name.editable = "false";
    $.name.borderColor = '#163318';
    $.name.backgroundColor = "#163318";
    $.numbers.editable = "false";
    $.numbers.borderColor = '#163318';
    $.numbers.backgroundColor = "#163318";
    $.message.editable = "false";
    $.message.borderColor = '#163318';
    $.message.backgroundColor = "#163318";
    $.informBtn.title = "Send Text(s)";
  }

  function editMe() {
    if (edit == "false") {
      edit = "true";
      $.scrollView.backgroundColor = "#0B1A0C";
      $.edit.title = "  Cancel  ";
      $.topTitle.text = "Edit";
      $.name.editable = "true";
      $.name.borderColor = '#ddd';
      $.numbers.editable = "true";
      $.numbers.borderColor = '#ddd';
      $.message.editable = "true";
      $.message.borderColor = '#ddd';
      $.informBtn.title = "Save";
    } else {
      edit = "false";
      $.scrollView.backgroundColor = "#163318";
      $.edit.title = "     Edit     ";
      $.topTitle.text = "Client";
      $.name.editable = "false";
      $.name.borderColor = '#163318';
      $.numbers.editable = "false";
      $.numbers.borderColor = '#163318';
      $.message.editable = "false";
      $.message.borderColor = '#163318';
      $.informBtn.title = "Send Text(s)";

      $.name.value = string[x][y].name;
      $.numbers.value = string[x][y].numbers;
      $.message.value = string[x][y].message;
    }
  }

  function focusNum() {
    $.numbers.focus();
  }

  function focusMes() {
    $.message.focus();
  }

  function sendText(client) {
    if (edit == "true") {

      string = JSON.parse(file.read().text);

      string[x][y].name = $.name.value;
      string[x][y].numbers = $.numbers.value;
      string[x][y].message = $.message.value;
      string[x][y].informed = 'false';


      if (!file.write(JSON.stringify(string))) {
        alert("Failed to update file");
      }

      editMe();

      return;
    }

    var module = require('com.omorandi');


    var smsDialog = module.createSMSDialog();


    if (!smsDialog.isSupported()) {

      var a = Ti.UI.createAlertDialog({
        title: 'warning',
        message: 'the texting feature is not currently available on your device' });

      a.show();
    } else {

      var str = $.numbers.value.replace(" ", "").split(',');
      smsDialog.recipients = str;
      smsDialog.messageBody = $.message.value;


      smsDialog.barColor = 'red';


      smsDialog.addEventListener('complete', function (e) {






        if (e.result == smsDialog.SENT) {

          string = JSON.parse(file.read().text);
          string[x][y].informed = "true";

          if (!file.write(JSON.stringify(string))) {
            alert("Failed to update file");
          }
        } else if (e.result == smsDialog.FAILED) {
          var a = Ti.UI.createAlertDialog({
            title: 'Send Message',
            message: e.resultMessage });

          a.show();
        } else if (e.result == smsDialog.CANCELLED) {

        }
      });


      smsDialog.open({
        animated: true });

    }
  }





  __defers['$.__views.win4!focus!refresh'] && $.addListener($.__views.win4, 'focus', refresh);__defers['$.__views.edit!click!editMe'] && $.addListener($.__views.edit, 'click', editMe);__defers['$.__views.back!click!closeWindow'] && $.addListener($.__views.back, 'click', closeWindow);__defers['$.__views.name!return!focusNum'] && $.addListener($.__views.name, 'return', focusNum);__defers['$.__views.numbers!return!focusMes'] && $.addListener($.__views.numbers, 'return', focusMes);__defers['$.__views.informBtn!click!sendText'] && $.addListener($.__views.informBtn, 'click', sendText);



  _.extend($, exports);
}

module.exports = Controller;