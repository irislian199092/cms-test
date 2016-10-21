define(function(require,exports,module){
(function(window,undefined){
 	"use strict";
    /**
    * 全站命名空间
    * @copyright 北京宏图世展网络科技服务有限公司
    * @author eub前端
    * @date 20150617
    * @global
    * @namespace eub
    */
    var eub = window.eub || (window.eub = {}),
        register;



    /**
     * 注册空间
     * @param  {string} namespace 要注册的名称, 以 . 分隔
     * @return {object}           注册后的空间对象
     *
     * @name eub.register
     * 
     * @memberOf eub
     * @function
     * @example
     *     1, eub.register("eub.dell") => {};
     *     2, eub.register("eub.canon") => {};
     *     3, eub.register("eub.kindle") => {};
     */
    register = eub.register = function(namespace){
        var namespace = namespace.split('.'), //把字符串转数组
            len = namespace.length, //一看就知道 数组长度
            obj = window;

        for(var i=0; i<len; i++){
            obj = obj[namespace[i]] = obj[namespace[i]] || {};
        }
        return obj;
    }
    module.exports = eub;
    
})(window);
})