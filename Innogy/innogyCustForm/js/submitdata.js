var form = document.getElementById('my_form');

form.onsubmit = function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    var vs = document.getElementById('vs').value;

    window.parent.postMessage({
        type: "ADD_CUSTOM_DATA",
        name: 'oo1_guest_ident',
	value: name
    }, "*");
    window.parent.postMessage({
        type: "ADD_CUSTOM_DATA",
	name: 'oo1_guest_email',    
        value: email
    }, "*");
    /* window.parent.postMessage({
        type: "ADD_CUSTOM_DATA",
	name: 'oo1_guest_phone',
        value: phone
    }, "*"); */
    window.parent.postMessage({
        type: "ADD_CUSTOM_DATA",
        name: 'vs',
        value: vs
    }, "*");
    window.parent.postMessage({
        type: "ENQUEUE"
    }, "*");
};
