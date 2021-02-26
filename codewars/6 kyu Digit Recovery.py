alph = {
  "ZERO": 0,
  "ONE": 1,
  "TWO": 2,
  "THREE": 3,
  "FOUR": 4,
  "FIVE": 5,
  "SIX": 6,
  "SEVEN": 7,
  "EIGHT": 8,
  "NINE": 9,
};

def recover(st):
  result = ''
  for i, s in enumerate(list(st)):
    for digit in alph:
      start = i
      end = i + len(digit)
      tmp = st[start:end]
      if ''.join(sorted(tmp)) == ''.join(sorted(digit)):
        result += str(alph[digit])
        break
  return result if result else 'No digits found'

print(recover('NEO'))#, '1');
print(recover('ONETWO'))#, '12');
print(recover('TWWTONE'))#, '21');
print(recover('ZYX'))#, 'No digits found');
print(recover('ONENO'))#, '11');
print(recover('NEOTWONEINEIGHTOWSVEEN'))#, '12219827');
