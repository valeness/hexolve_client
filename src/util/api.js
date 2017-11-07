export default {
    get : function(url, data, success_callback, error_callback) {

        if(typeof success_callback == 'undefined') {
            success_callback = function(r) {
                console.log(r);
            }
        }

        if(typeof error_callback == 'undefined') {
            error_callback = function(r) {
                console.log(r);
            }
        }

        $.ajax({
            url : url,
            type : 'get',
            data : data,
            success : function(r) {
                success_callback(r);
            },
            error : function(r) {
                error_callback(r);
            }
        })
    }
}