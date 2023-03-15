"""

"""
import math
from functools import reduce

def lcm_base(x, y):
    return (x * y) // math.gcd(x, y)

def lcm_list(numbers):
    return reduce(lcm_base, numbers, 1)

def convertFracts(lst):
    lcm = lcm_list([l[1] for l in lst])
    return [[n*lcm//d,lcm] for (n,d) in lst]



from TestCodewar import Test
test = Test()

a = [[1, 2], [1, 3], [1, 4]]
b = [[6, 12], [4, 12], [3, 12]]
test.assert_equals(convertFracts(a), b)
a = []
b = []
test.assert_equals(convertFracts(a), b)

#solution
import math
import functools

def convertFracts2(lst):
    lcm = lambda a, b : abs(a*b) // math.gcd(a, b)
    tmp_list = list(map(lambda x : x[1] ,list(lst)))
    lcm_num = functools.reduce(lcm,tmp_list)
    return list(map(lambda x : [x[0] * lcm_num // x[1], lcm_num] , list(lst)))
