# -*- coding: utf-8 -*-

# def main2():
#     N = int(code())
#     word = code()
#     for i in range(N):
#         print(word)

# main2()

def isValidIsbn10(code):
    if not code :
        return False

    if (len(code) != 10):
        return False

    chars = list(code)
    if (chars[9].upper() == 'X') :
        chars[9] = 10

    sum = 0
    for i in range(len(chars)):
        sum += ((10 - i) * int(chars[i]))

    return (0 == (sum % 11))


# -*- coding: utf-8 -*-
from sys import stdin
while True:
    code = input().rstrip()
    if not code:
        break
    if isValidIsbn10(code):
      print('true')
    else:
      print('false')
# A = list(map(int, stdin.readline().split()))

from TestCodewar import Test
Test = Test()
Test.it("Example tests")
Test.assert_equals(isValidIsbn10('4478025819'), True)
Test.assert_equals(isValidIsbn10('4864104441'), True)
Test.assert_equals(isValidIsbn10('486410444'), False)
Test.assert_equals(isValidIsbn10('48641044411'), False)
Test.assert_equals(isValidIsbn10('ABC'), False)
