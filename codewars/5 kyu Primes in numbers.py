

def primeFactors(n):
    i = 2
    count = None
    output = ''
    while n > 1:
      count = 0
      while n % i == 0:
        count += 1
        n /= i
      if count == 0:
        pass
      elif count == 1:
        output += '({})'.format(i)
      else:
        output += '({}**{})'.format(i, count)
      i += 1
    return output

from TestCodewar import Test
test = Test()
test.assert_equals(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)")