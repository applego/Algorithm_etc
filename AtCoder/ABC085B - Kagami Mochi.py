# -*- coding: utf-8 -*-
from sys import stdin

N = int(stdin.readline().rstrip())
Mochis = sorted([int(stdin.readline().rstrip()) for i in range(N)])

width_top_mochi = Mochis[0]
count = 1
for i in range(1, len(Mochis)):
  if Mochis[i] > width_top_mochi:
    count += 1
    width_top_mochi =Mochis[i]
else:
  print(count)

#最速（Atcodeランキング）「ABC088B」
# input()
# A = sorted(map(int, input().split()))[::-1]
# print(sum(A[::2])-sum(A[1::2]))

#
# -*- coding: utf-8 -*-
# 	入力
# n=int(input())
# a= set(map(lambda x:x.strip(),stdin.readlines()))
# 出力
# print(len(a))

#*バケット法
d = [0] * 110
for i in range(N):
  d[i] = int(stdin.readline().rstrip())

num = {}
for i in range(N):
  if d[i] in num.keys():
    num[d[i]] += 1
  else:
    num[d[i]] = 1

res = 0
for i in range(1, 100):
  if i in num:#num[i] > 0:
    res += 1

print(res)
