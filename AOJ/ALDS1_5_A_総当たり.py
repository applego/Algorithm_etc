# -*- coding: utf-8 -*-
from sys import stdin

n = int(stdin.readline().rstrip())
A = list(map(int,stdin.readline().split()))
q = stdin.readline().rstrip()
M = list(map(int, stdin.readline().split()))

#Aの要素の和でmを作れるか
#→Aの要素のbit全探索（2^n）
#結果を辞書or setに　{}

sum_results = set()

for i in range(2 ** n):
  sum_tmp = 0
  for j in range(n):
    print("pattern i:{} j:{} i>>j{}".format(i,j,i>>j))

    if ((i >> j) & 1):  #順に右にシフトさせ最下位bitのチェックを行う
      sum_tmp += A[j]
  else:
    sum_results.add(sum_tmp)

for m in M:
  if m in sum_results:
    print("yes")
  else:
    print("no")

#*solutions
n = int(input())
*A, = map(int, input().split())
q = int(input())
*Q, = map(int, input().split())

bits = 1
for a in A:
    bits |= bits << a

for q in Q:
    print("yes"*((bits >> q) & 1) or "no")

#*2
def solve(A, i, m, n):
    """Return if it is possible to make value m with some elements in A.

    n is length of A.
    i is index.
    R is the record of answer i, m.
    Using Divide-and-Conquer method.
    """

    if R[i][m] != None:
        return R[i][m]
    if m == 0:
        R[i][m] = True
        return True
    elif i >= n:
        R[i][m] = False
        return False
    else:
        ans = solve(A, i + 1, m, n) or solve(A, i + 1, m - A[i], n)
        R[i][m] = ans
        return ans

import sys

n = int(sys.stdin.readline())
A = tuple(map(int, sys.stdin.readline().split()))
q = int(sys.stdin.readline())
M = tuple(map(int, sys.stdin.readline().split()))

s_A = sum(A)
R = [[None] * 2000 for i in range(n + 1)]

ans = ''

for m in M:
    if s_A < m:
        ans += 'no\n'
    elif solve(A, 0, m, n):
        ans += 'yes\n'
    else:
        ans += 'no\n'

print(ans, end = '')
