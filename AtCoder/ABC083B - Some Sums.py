# -*- coding: utf-8 -*-
from sys import stdin
import time

N, A, B = map(int,stdin.readline().rstrip().split())

time1 = time.time()
print(sum(i for i in range(1, N + 1) if A <= sum(map(int, str(i))) <= B))
time2 = time.time()
print("time:{0}".format(time2 - time1))

ans_sum = 0
for i in range(1, N + 1):
  tsum = sum(map(int,str(i)))
  if A <= tsum <= B:
      ans_sum += i
else:
  print(ans_sum)
  time3 = time.time()
  print("time:{0}".format(time3 - time2))

#time:0.00018095970153808594
