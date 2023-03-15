
"""
Yes I have a number
How I wish I could calculate an unused color for space
Thank you
END OF  INPUT
END OF INPUT
"""

# -*- coding: utf-8 -*-
from sys import stdin

while True:
  s = stdin.readline().rstrip()
  if s == 'END OF INPUT':
    break
  ans = ''
  cnt = 0
  for i in s:
    if i == ' ':
      ans += str(cnt)
      cnt = 0
    else:
      cnt += 1
  ans += str(cnt)
  print(ans)
