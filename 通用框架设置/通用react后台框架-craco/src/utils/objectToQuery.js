const isArray =
  typeof Array.isArray === 'function'
    ? Array.isArray
    : function (a) {
        return a instanceof Array;
      };

function buildParams(prefix, obj, traditional, add) {
  var name,
    i,
    v,
    rbracket = /\[\]$/;

  if (isArray(obj)) {
    for (i = 0; obj && i < obj.length; i++) {
      v = obj[i];
      if (traditional || rbracket.test(prefix)) {
        add(prefix, v);
      } else {
        buildParams(
          prefix + '[' + (typeof v === 'object' ? i : '') + ']',
          v,
          traditional,
          add
        );
      }
    }
  } else if (obj && obj.toString() === '[object Object]') {
    for (name in obj) {
      buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
    }
  } else {
    add(prefix, obj);
  }
}

export default function (o, trad) {
  var prefix,
    i,
    traditional = trad || false,
    s = [],
    enc = encodeURIComponent,
    add = function (key, value) {
      value =
        'function' === typeof value ? value() : value == null ? '' : value;
      s[s.length] = enc(key) + '=' + enc(value);
    };
  if (isArray(o)) {
    for (i = 0; o && i < o.length; i++) add(o[i].name, o[i].value);
  } else {
    for (prefix in o) {
      if (o.hasOwnProperty(prefix))
        buildParams(prefix, o[prefix], traditional, add);
    }
  }

  return s.join('&').replace(/%20/g, '+');
}
