
"""
n = input
if n!=0:
  kaisuu = n//4
  point = 0
  for i in range(kaisuu):
    point += int(input())
  print(point)
  n = input()
"""

# -*- coding: utf-8 -*-
from sys import stdin

while True:
  n = int(stdin.readline().rstrip())
  if n == 0:
    break
  point = 0
  for i in range(n // 4):
    point += int(stdin.readline().rstrip())
  print(point)