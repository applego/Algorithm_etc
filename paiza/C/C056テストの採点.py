# -*- coding: utf-8 -*-
from sys import stdin

n, m = map(int, stdin.readline().rstrip().split())
test_results = [list(map(int, stdin.readline().rstrip().split())) for i in range(n)]
# pass_students_id = [i + 1 for i, result in enumerate(test_results) if (result[0] - result[1] * 5) >= m]
pass_students_id = []
for i, result in enumerate(test_results):
  r1 = result[0] - result[1] * 5
  r = r1 if r1 >= 0 else 0
  if r >= m:
    pass_students_id.append(i+1)
for i in pass_students_id:
  print(i)
# print(*pass_students_id,end='\n')