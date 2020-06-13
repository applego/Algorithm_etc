# -*- coding: utf-8 -*-
from sys import stdin
a, b = map(int,stdin.readline().rstrip().split())
a__b = a * b
if a__b % 2 == 0:
  print('Even')
else:
  print('Odd')
