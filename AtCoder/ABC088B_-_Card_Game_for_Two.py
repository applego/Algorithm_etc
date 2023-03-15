# -*- coding: utf-8 -*-
from sys import stdin

N=int(stdin.readline().rstrip())
Cards = list(map(int,stdin.readline().rstrip().split()))

Cards.sort()

p_Alice = p_Bob = 0
for i in range(N):
  if i % 2 == 0:
    p_Alice += Cards.pop(-1)
  else:
    p_Bob += Cards.pop(-1)
else:
  print('{}'.format(p_Alice-p_Bob))

#最速（Atcodeランキング）
input()
A = sorted(map(int, input().split()))[::-1]
print(sum(A[::2])-sum(A[1::2]))
