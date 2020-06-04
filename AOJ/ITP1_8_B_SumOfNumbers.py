# -*- coding: utf-8 -*-
from sys import stdin
# a = input()
a = stdin.readline().rstrip()
while a != '0':
  # [sum += int(i) for i in list(a)]
  b = [(int(i)) for i in list(a)]
  # print(b)
  print(sum(b))
  a = stdin.readline().rstrip()


#a,b = map(int,input().split())
# 出力
#print("{} {}".format(a * b, 2 * (a + b)))

#累積和
from itertools import accumulate

a = list(range(1, 11))
b = list(accumulate(a))
print(a)
print(b)