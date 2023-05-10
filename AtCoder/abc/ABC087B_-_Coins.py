# -*- coding: utf-8 -*-
from sys import stdin

# num_of_500 = int(stdin.readline().rstrip())
# num_of_100 = int(stdin.readline().rstrip())
# num_of_50 = int(stdin.readline().rstrip())
# target_price = int(stdin.readline().rstrip())

import time

A, B, C, X = [int(stdin.readline().rstrip()) for i in range(4)]

start = time.time()

cnt = 0
for a in range(A + 1):
  for b in range(B + 1):
    for c in range(C + 1):
      if a * 500 + b * 100 + c * 50 == X:
        cnt += 1
else:
  print(cnt)
  time1 = time.time()
  print("time:{0}".format(time1 - start))

cnt = 0
for a in range(A + 1):
  if a * 500 > X:
    break
  for b in range(B + 1):
    if a * 500 + b * 100 > X:
      break
    for c in range(C + 1):
      x = a * 500 + b * 100 + c * 50
      if  x == X:
        cnt += 1
      elif x > X:
        break
print(cnt)
time2 = time.time()
print("time:{0}".format(time2 - time1))

# A, B, C, X = [int(input()) for i in range(4)]
print(sum(500 * a + 100 * b + 50 * c == X for a in range(A + 1) for b in range(B + 1) for c in range(C + 1)))
time3 = time.time()
print("time:{0}".format(time3 - time2))

cnt = 0
for a in range(A + 1):
  y_1 = X
  y_1 -= 500 * a
  for b in range(B + 1):
    y_2 = y_1
    y_2 -= b * 100
    if y_2 >= 0 and y_2 / 50 <= C:
      cnt += 1
print(cnt)
time4 = time.time()
print("time:{0}".format(time4 - time3))

# 30
# 40
# 50
# 6000
# 213
# time: 0.04265904426574707
# 213
# time: 0.012178897857666016
# 213
# time: 0.17990493774414062
