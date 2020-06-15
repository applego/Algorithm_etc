# -*- coding: utf-8 -*-
from sys import stdin
import math

n = int(stdin.readline().rstrip())
ans = -(math.pow(10, 9))
tmp_min_val = int(stdin.readline().rstrip())
for i in range(n - 1):
  val = int(stdin.readline().rstrip())
  diff = val - tmp_min_val
  if ans < diff:
    ans = diff
  if val < tmp_min_val:
    tmp_min_val = val
print(ans)
