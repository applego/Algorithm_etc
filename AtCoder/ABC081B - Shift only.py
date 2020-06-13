# -*- coding: utf-8 -*-
from sys import stdin

stdin.readline().rstrip()
sss = list(map(int, stdin.readline().rstrip().split()))
count = 0
while True:
  if len([1 for i in sss if i % 2 == 0]) != len(sss):
    print(count)
    break
  sss = [i / 2 for i in sss]
  count += 1
else:
  print(count)