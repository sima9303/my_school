let Data = {"URL": ""}

chrome.tabs.query({
    active: true,
    currentWindow: true,
},tabs=>{
    const tab = tabs[0]
    Data.URL = tab.url;
    console.log(`URL: ${Data.URL}`);
});

$(function(){
    var qrtext = (`URL: ${Data.URL}`);
    var utf8qrtext = unescape(encodeURIComponent(qrtext));
    $("#img-qr").html("");
    $("#img-qr").qrcode({text:utf8qrtext}); 
  });