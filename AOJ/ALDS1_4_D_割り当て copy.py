# import sys
# from sys import stdin

# def s():
#   n, k = map(int, input().split())
#   # w = list(map(int, sys.stdin.readlines()))
#   w = list([int(stdin.readline().rstrip()) for i in range(n)])
#   def f():
#     c = t = 0
#     for j in w:
#       t += j
#       if t > m:
#         t = j
#         c += 1
#         if c >= k:
#           return 0
#     return 1
#   l, r = max(w), sum(w)
#   while l < r:
#       m = (l + r) // 2
#       if f():
#           r = m
#       else:
#           l = m + 1
#   print(r)


# # def test():
# #   print('加算関数を作成します')
# #   def add(x, y):
# #     z = x + y
# #     print("%d + %d = %d " % (x, y, z))
# #     return x + y
# #   return add


# if '__main__' == __name__:
#   s()
#   # a = test()
#   # ans = a(1, 2)
#   # print(ans)

# -*- coding: utf-8 -*-
import sys
from sys import stdin
import time
import math

n, k = map(int, stdin.readline().split())
w = list([int(stdin.readline().rstrip()) for i in range(n)])

def main():
  def is_ok():
    cnt_track = w_tmp = 0
    for w_i in w:
      w_tmp += w_i
      if w_tmp > m:
        w_tmp = w_i
        cnt_track += 1
        if cnt_track >= k:
          return 0
    return 1

  l, r = max(w), sum(w)
  while l < r:
    m = (l + r) // 2
    print("%d %d %d "%(l,r,m))
    if is_ok():
      r = m
    else:
      l = m + 1
  print(r)

def main2():
  # n, k = map(int, stdin.readline().split())
  # w = list([int(stdin.readline().rstrip()) for i in range(n)])
  def is_ok():
    cnt_track = w_tmp = 0
    for w_i in w:
      w_tmp += w_i
      if w_tmp > m:
        w_tmp = w_i
        cnt_track += 1
        if cnt_track >= k:
          return 0
    return 1

  r = sum(w)
  l = math.ceil(r/k)#max(w)
  while l < r:
    m = (l + r) // 2
    print("%d %d %d " % (l, r, m))
    if is_ok():
      r = m
    else:
      l = m + 1
  print(r)

if __name__ == '__main__':
  t1 = time.time()
  main()
  print("time:{}".format(time.time()-t1))

  t2 = time.time()
  main2()
  print("time:{}".format(time.time()-t2))
