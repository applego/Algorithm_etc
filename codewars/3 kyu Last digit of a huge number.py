"""

"""
from functools import reduce
from operator import add
from operator import mul

# ? ２つの数のlast_digitはこれでクリアだけど、それの繰り返しは対応できない。b ** a
def last_digit_(a, b):
    if a == 0:
        return 1
    b = int(str(b)[-1])
    if b == 0:
        return 0
    elif b == 1:
        return 1
    elif b == 2:
        candidates = [6, 2, 4, 8]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 3:
        candidates = [1, 3, 9, 7]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 4:
        candidates = [6, 4]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 5:
        return 5
    elif b == 6:
        return 6
    elif b == 7:
        candidates = [1, 7, 9, 3]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 8:
        candidates = [6, 8, 4, 2]
        mod = a % len(candidates)
        return candidates[mod]
    elif b == 9:
        candidates = [1, 9]
        mod = a % len(candidates)
        return candidates[mod]

    # m = b ** a
    # print("{}**{}={}".format(b, a, m))
    # print("return{}".format(int(str(m)[-1])))
    # return int(str(m)[-1])


def last_digit(lst):
    print('-------------------------')
    print(lst)
    print(list(reversed(lst)))
    if len(lst) == 0:
        return 1
    if len(lst) == 2 and all([i == 0 for i in lst]):
        return 1
    # print(reduce(last_digit_, lst))
    return reduce(last_digit_, reversed(lst))
    # print(reduce(mul, lst))

from TestCodewar import Test
test = Test()
test.it('Basic tests')
test_data = [
    # ([], 1),
    # ([0, 0], 1),
    # ([0, 0, 0], 0),
    # ([1, 2], 1),
    # ([3, 4, 5], 1),
    # ([4, 3, 6], 4),
    ([7, 6, 21], 1),
    ([12, 30, 21], 6),
    ([2, 2, 2, 0], 4),
    ([937640, 767456, 981242], 0),
    ([123232, 694022, 140249], 6),
    ([499942, 898102, 846073], 6)
]
for test_input, test_output in test_data:
    test.assert_equals(last_digit(test_input), test_output)
