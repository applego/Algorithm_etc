"""
2^0 3^0 5^0
"""
import sys
sys.setrecursionlimit(600000)

# print(sys.getrecursionlimit())

def is_hamming_numbers(x):
    if x == 1:
        return 1
    if x % 2 == 0:
        return is_hamming_numbers(x / 2)
    if x % 3 == 0:
        return is_hamming_numbers(x / 3)
    if x % 5 == 0:
        return is_hamming_numbers(x / 5)
    return 0

hamming_numbers = []
def hamming_numbers_sequence(x):
    if x == 1:
        hamming_numbers.append(1)
        return 1
    hamming_numbers_sequence(x - 1)
    if is_hamming_numbers(x) == True:
        # print("%s" % x, end=' ')
        hamming_numbers.append(x)

hamming_numbers_sequence(300)
print(len(hamming_numbers))

def hamming(n):
    """Returns the nth hamming number"""
#   print(hamming_numbers[n-1])
    try:
        return hamming_numbers[n - 1]
    except Exception as e:
        print(n)


from TestCodewar import Test
test = Test()
test.expect(hamming(145) == 5120, "hamming(145) should be 5120");
test.expect(hamming(2) == 2, "hamming(2) should be 2");
test.expect(hamming(3) == 3, "hamming(3) should be 3");
test.expect(hamming(4) == 4, "hamming(4) should be 4");
test.expect(hamming(5) == 5, "hamming(5) should be 5");
test.expect(hamming(6) == 6, "hamming(6) should be 6");
test.expect(hamming(7) == 8, "hamming(7) should be 8");
test.expect(hamming(8) == 9, "hamming(8) should be 9");
test.expect(hamming(9) == 10, "hamming(9) should be 10");
test.expect(hamming(10) == 12, "hamming(10) should be 12");
test.expect(hamming(11) == 15, "hamming(11) should be 15");
test.expect(hamming(12) == 16, "hamming(12) should be 16");
test.expect(hamming(13) == 18, "hamming(13) should be 18");
test.expect(hamming(14) == 20, "hamming(14) should be 20");
test.expect(hamming(15) == 24, "hamming(15) should be 24");
test.expect(hamming(16) == 25, "hamming(16) should be 25");
test.expect(hamming(17) == 27, "hamming(17) should be 27");
test.expect(hamming(18) == 30, "hamming(18) should be 30");
test.expect(hamming(19) == 32, "hamming(19) should be 32");

#bit全探索してみたけど、使うん違うわ
candidates = (2, 3, 5)
n = 3
for i in range(2 ** n):
    bag = []
    # print("pattern {}:".format(i), end="")
    for j in range(n):
        if ((i >> j) & 1):
            bag.append(candidates[j])
    # print(bag)


#solutions
#TODO むりむり。。
from itertools import islice
def hamming2():
    h = 1
    _h=[h]    # memoized
    multipliers  = (2, 3, 5)
    multindeces  = [0 for i in multipliers] # index into _h for multipliers
    multvalues   = [x * _h[i] for x,i in zip(multipliers, multindeces)]
    yield h
    while True:
        h = min(multvalues)
        _h.append(h)
        for (n,(v,x,i)) in enumerate(zip(multvalues, multipliers, multindeces)):
            if v == h:
                i += 1
                multindeces[n] = i
                multvalues[n]  = x * _h[i]
        # cap the memoization
        mini = min(multindeces)
        if mini >= 1000:
            del _h[:mini]
            multindeces = [i - mini for i in multindeces]
        #
        yield h

hamming_numbers = list(islice(hamming2(), 5000))
def hamming_(n):
    return hamming_numbers[n - 1]

# print(len(list(islice(hamming2(),5000))))

test.expect(hamming_(145) == 5120, "hamming(145) should be 5120");

#s2
def hamming__(n):
    bases = [2, 3, 5]
    expos = [0, 0, 0]
    hamms = [1]
    for _ in range(1, n):
        next_hamms = [bases[i] * hamms[expos[i]] for i in range(3)]
        next_hamm = min(next_hamms)
        hamms.append(next_hamm)
        for i in range(3):
            expos[i] += int(next_hamms[i] == next_hamm)
    return hamms[-1]

test.expect(hamming__(145) == 5120, "hamming(145) should be 5120");
