var typof = {
    is : function (val, type) {
        var isArray = Array.isArray(type);
        if (isArray){
            var isValArray = Array.isArray(val);
            if (!type.length === 1) return isValArray;
            if (!isValArray) return false;
            var me = this;
            return val.every(function (item){
                return me.is(item, type[0]);
            });
        };
        if (type == null) return (val === type);
        if (val == null) return false;
        /* Might need to check if (typeof val === 'object') before calling toString */
        return val.constructor.toString() === type.toString();
    },

    type : function (typ) {
          var exceptions = { 'null' : 'Null', 'undefined' : 'Undefined' };
          if (exceptions[typ]) return exceptions[typ];
          if (Array.isArray(typ)) return 'Array';

          var name = typ.toString();
          var name  = name.match(/function (.*?)\(/)[1];
          if (name==='') name = 'Anonymous';
          return name;
    },

    value : function (val) {
        var out =  ({}).toString.call(val);
        out = out.match(/\[object (.*?)\]/);
        return out[1];
    }
};


module.exports = typof;
