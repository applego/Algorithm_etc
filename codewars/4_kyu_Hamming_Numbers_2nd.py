"""
2^0 3^0 5^0
"""
def hamming(n):
    bases = [2, 3, 5]
    expos = [0, 0, 0]
    hamms = [1]
    for _ in range(1, n):
        #*test
        # candi_next_hamms = []
        # for i in range(3):
        #     val = bases[i] * hamms[expos[i]]
        #     print("i:{0} bases[i]:{1} expos[i]:{2} hamms[expos[i]]:{3}".format(i, bases[i], expos[i], hamms[expos[i]]))
        #     # print(val)
        #     # print(expos)
        #     candi_next_hamms.append(val)
        # print(hamms)
        # print(candi_next_hamms)

        candi_next_hamms = [bases[i] * hamms[expos[i]] for i in range(3)]#testと同じこと
        next_hamm = min(candi_next_hamms)
        hamms.append(next_hamm)
        for i in range(3):
            expos[i] += int(candi_next_hamms[i] == next_hamm)
    return hamms[-1]

from TestCodewar import Test
test = Test()
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
test.expect(hamming(145) == 5120, "hamming(145) should be 5120");


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
