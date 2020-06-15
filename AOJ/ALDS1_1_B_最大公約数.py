# -*- coding: utf-8 -*-
from sys import stdin

def greatest_common_divisor(x, y):
  if x == y:
    return x
  xx = max(x, y)
  yy = min(x, y)
  v1 = xx % yy
  #yy とv1の最大公約数がxとyの最大公約数と等しくなる
  # for i in range(min(yy, v1), 0, -1):
  #   if yy % i == 0 and v1 % i == 0:
  #     return i
  ret = 1
  i = 2
  # min_t = min(yy, v1)
  while i <= min(yy, v1):#min_t:
    # for i in range(2, min(yy, v1)):
    if yy % i == 0 and v1 % i == 0:
      ret *= i
      yy /= i
      v1 /= i
    else:
      i += 1
  return ret

def greatest_common_divisor2(x, y):
  if x == y:
    return x
  xx = max(x, y)
  yy = min(x, y)
  v1 = xx % yy
  #yy とv1の最大公約数がxとyの最大公約数と等しくなる
  ret = 1
  i = 2
  # min_t = min(yy, v1)
  while i <= min(yy, v1):  # min_t:
    # for i in range(2, min(yy, v1)):
    if yy % i == 0 and v1 % i == 0:
      ret *= i
      yy /= i
      v1 /= i
    else:
        i += 1
  return ret

def greatest_common_divisor3(x, y):
  xx = max(x, y)
  yy = min(x, y)
  v1 = xx % yy
  #print("{} {}".format(yy, v1))  # TODO delete
  if yy <= 0 or v1 <= 0:
    return max(yy, v1)
  else:
    return greatest_common_divisor3(yy, v1)

x_y = list(map(int, stdin.readline().split()))

import time
t1 = time.time()
print(greatest_common_divisor(x_y[0], x_y[1]))
t2 = time.time()
print('time{}'.format(t2 - t1))

print(greatest_common_divisor2(x_y[0], x_y[1]))
t3 = time.time()
print('time{}'.format(t3 - t2))

print(greatest_common_divisor3(x_y[0], x_y[1]))
t4 = time.time()
print('time{}'.format(t4 - t3))

#* 整数 x, y について、x ≥ y ならば x と y の最大公約数は
#* y と x % y の最大公約数に等しい。ここで x % y は x を y で割った余りである。　

# 812500000 1000000000
# 62500000
# time0.00029277801513671875
# 62500000
# time0.00010800361633300781
# 62500000
# time7.700920104980469e-05
