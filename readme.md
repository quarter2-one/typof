# typof

## Check type of any JavaScript variable.

## usage

```
tasteTest.describe({
  "typof": {
    describe: {
      "Get value.": {
        vars: {
          cb: function (val, expected) {
            return typof.value(val);
          },
        },
        String: check(["one", "free", "pool"], "String"),
        Number: check([88, 89, 90], "Number"),
        Boolean: check([true, false], "Boolean"),
        Date: check([new Date()], "Date"),
        Object: check([{}], "Object"),
        Function: check([Adam], "Function"),
        Array: check([], "Array"),
        null: check([null, null], "Null"),
        undefined: check([undefined], "Undefined"),
      },

      "Get type.": {
        vars: {
          cb: function (val, expected) {
            return typof.type(val);
          },
        },
        String: check([String], "String"),
        Number: check([Number], "Number"),
        Boolean: check([Boolean], "Boolean"),
        Date: check([Date], "Date"),
        Object: check([Object], "Object"),
        Function: check([Function], "Function"),
        Array: check([Array], "Array"),
        null: check([null], "Null"),
        undefined: check([undefined], "Undefined"),
      },

      "is.": {
        String: checkIs("22", String),
        Number: checkIs(122, Number),
        Boolean: checkIs(true, Boolean),
        Date: checkIs(new Date(), Date),
        Object: checkIs({}, Object),
        Function: checkIs(function () {}, Function),
        Array: checkIs([], Array),
        null: checkIs(null, null),
        undefined: checkIs(undefined, undefined),
        Constructor: checkIs(new Adam(), Adam),
        TypedArray: checkIs([new Adam(), new Adam()], [Adam]),
      },

      //--------------------------------------------------------------------------------------------

      "Get value - fail.": {
        vars: {
          cb: function (val, expected) {
            return typof.value(val);
          },
        },
        String: checkF(88, "String"),
        Number: checkF("90", "Number"),
        Boolean: checkF("false", "Boolean"),
        Date: checkF("1988/01/01", "Date"),
        Object: checkF("8", "Object"),
        Function: checkF(true, "Function"),
        Array: checkF("ll", "Array"),
        null: checkF(undefined, "Null"),
        undefined: checkF(null, "Undefined"),
      },

      "is - fail.": {
        String: checkIsF(22, String),
        Number: checkIsF("122", Number),
        Boolean: checkIsF("true", Boolean),
        Date: checkIsF("1988/01/02", Date),
        Object: checkIsF("lopin", Object),
        Function: checkIsF({}, Function),
        Array: checkIsF(88, Array),
        null: checkIsF(undefined, null),
        undefined: checkIsF(null, undefined),
        Constructor: checkIsF(new String(), Adam),
        TypedArray: checkIsF([new Adam(), new String()], [Adam]),
      },
    },
  },
});

```
