#import time

# -*- coding: utf-8 -*-
import sys
from sys import stdin

N = int(stdin.readline().rstrip())
plans = [list(map(int, stdin.readline().rstrip().split())) for i in range(N)]

t = 0
p_x = p_y = 0
for plan in plans:
  d_x = abs(plan[1] - p_x)
  d_y = abs(plan[2] - p_y)
  d1 = d_x + d_y
  dt = plan[0] - t
  if d1 <= dt and (dt - d1) % 2 == 0:
    t = plan[0]
    p_x = plan[1]
    p_y = plan[2]
    continue
  else:
    print("No")
    break
else:
  print("Yes")

#196ms なかなかの好成績11位（2020.06.13）