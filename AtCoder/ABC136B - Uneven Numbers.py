# -*- coding: utf-8 -*-
import sys
from sys import stdin

strN = stdin.readline().rstrip()
N = int(strN)
strLen = len(strN)

odd_count1 = 0
for i in range(1, strLen + 1):
    if i % 2 == 0:
        if i == strLen:
            print(odd_count1)
            sys.exit(0)
    else:
        if i == strLen:
            t1 = '1'
            t1 += '0' * (i - 1)
            t3 = N - int(t1) + 1
            odd_count1 += t3
            print(odd_count1)
            sys.exit(0)
        else:
            t1 = '1' + '0' * (i - 1)
            t2 = '9' * i
            odd_count1 += (int(t2) - int(t1)+1)

# 1 →(1 - 9)→ x
# 2 → (10 - 99)→ 9
# 3 → (100 - 999)→ 9 + x
# 4 → (1000 - 9999)→9+9000
# 5 → (10000 - 99999)→9+9000+x
# 6 → (100000 - 999999)→9+9000+900000

# n → (1+'0'*n - '9'*n)→
