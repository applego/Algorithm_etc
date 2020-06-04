# -*- coding: utf-8 -*-
from sys import stdin

a = [chr(ord('a') + i) for i in range(26)]
# print(a)

dic = {}
for ai in a:
  dic[ai] = 0
#python

b = list(stdin.readline().rstrip())
while len(b) != 0:
  for bi in b:
    if bi.lower() in dic.keys():
      dic[bi.lower()] += 1
  b = list(stdin.readline().rstrip())
  # print(b)
  # print(len(b))

for ai in a:
  print("{0} : {1}".format(ai,dic[ai]))