# -*- coding: utf-8 -*-

import re
def main():
    b = input()

    maxcnt = 0
    scnt = 0
    for c in b:
        if(c=='A' or c=='C' or c=='G' or c=='T'):
            scnt += 1
        else:
            if(maxcnt<scnt):
                maxcnt=scnt
            scnt = 0

    print(max(scnt,maxcnt))

# main()

# 2020/06/14　２回め
from sys import stdin

matches = ['A','C','G','T']
S = stdin.readline().rstrip()
cnt_row = 0
cnt_max = 0
for s in S:
    if s in matches:
        cnt_row += 1
        if cnt_max < cnt_row:
            cnt_max = cnt_row
    else:
        cnt_row = 0
print(cnt_max)

# import re
# test = re.match("(A|C|G|T)", S)

#最速 1ms差だけど
s = list(input())
dp = [0]*(len(s)+1)
for i in range(len(s)):
    if s[i] in 'ACGT':
        dp[i] += 1
        dp[i+1] += dp[i]
    else:
        dp[i] = 0
print(max(dp))
