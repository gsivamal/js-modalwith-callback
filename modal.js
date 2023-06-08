
var modal = (function(){

    var method = {};

    var myModalEl = document.getElementById("myModal");
    var myModal = new bootstrap.Modal(myModalEl);

    const once = {
        once : true
    };

    method.registercallback = function(callback){
        myModalEl.addEventListener('shown.bs.modal',callback,once);
        return this;
    }

    method.open = function(fragmentid){
        $("#modal-content").load(fragmentid, function(content)){
            modal.show();
        });
    }

    method.close = function(){
        myModal.hide();
    }

    return method;

}());