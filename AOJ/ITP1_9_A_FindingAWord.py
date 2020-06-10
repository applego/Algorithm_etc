# -*- coding: utf-8 -*-
from sys import stdin

W = stdin.readline().rstrip()

sum = 0
while True:
  T = stdin.readline().rstrip()
  if T == 'END_OF_TEXT':
    break
  T = T.split()
  sum += len([s for s in T if s.lower() == W])
print(sum)
