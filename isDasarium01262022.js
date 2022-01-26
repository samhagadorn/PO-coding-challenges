function isDasarium(d) {
  d = d.toString();
  var num = '';
  var s = 0;

  for (var x = 0; x < d.length; x++) {
    s += Math.pow(d[x],(x + 1));
    num += d[x];
  }

  if (s == num) {
    return true;
  } else {
    return false;
  }
}

isDasarium(135);
