import time

# -*- coding: utf-8 -*-
from sys import stdin
N, Y = map(int,stdin.readline().rstrip().split())
str_not_exist = '-1 -1 -1'

#time1
time1 = time.time()
for x in range(N + 1):
  for y in range(N + 1 - x):
    z = N - (x + y)
    if 10000 * x + 5000 * y + 1000 * z == Y:
      print('{0} {1} {2}'.format(x, y, z))
      break
  else:
    continue
  break
else:
  print(str_not_exist)
time2 = time.time()
print('time1:{}'.format(time2 - time1))

#time2
time3 = time.time()
for z in range(N + 1):
  for y in range(N + 1 - z):
    x = N - (z + y)
    if 10000 * x + 5000 * y + 1000 * z == Y:
      print('{0} {1} {2}'.format(x, y, z))
      break
  else:
    continue
  break
else:
  print(str_not_exist)
time4 = time.time()
print('time2:{}'.format(time4 - time3))

#Atcoder最速
time5 = time.time()
a0, a1 = N, Y
a1 = a1 // 1000
out = (-1, -1, -1)
for i in range(min(N + 1, a1 // 10 + 1)):
  b = (a1 - 10 * i) - (a0 - i)
  if b % 4 == 0 and b >= 0 and a0 - i - b // 4 >= 0:
    out = (i, b // 4, a0 - i - b // 4)
    break
print(out[0], out[1], out[2])
time6 = time.time()
print('time2:{}'.format(time6 - time5))
