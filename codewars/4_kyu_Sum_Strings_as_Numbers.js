function sumStrings_BP(a, b) {
  let res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

// Test.assert_equals(sumStrings('915381589456908955396757569014', '841949236788909599143403221835'),
// '1757330826245818554540160790849');
console.log(sumStrings_BP('915381589456908955396757569014', '841949236788909599143403221835'));
