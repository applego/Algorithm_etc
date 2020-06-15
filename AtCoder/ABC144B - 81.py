# -*- coding: utf-8 -*-
import time
import sys
from sys import stdin


N = int(stdin.readline().rstrip())

for i in range(1, 10):
  for j in range(1, 10):
    if N == i * j:
      print('Yes')
      sys.exit(0)
else:
  print('No')


t1 = time.time()
kuku=[]
for i in range(1, 10):
  for j in range(1, 10):
    # print(i * j)
    kuku.append(i * j)
if N in kuku:
  print("Yes")
else:
  print("No")
t2 = time.time()
print("time{}".format(t2 - t1))

kuku2 = [i * j for i in range(1, 10) for j in range(1, 10)]
print("Yes" if N in kuku2 else "No")
t3 = time.time()
print("time{}".format(t3 - t2))
