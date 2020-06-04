# -*- coding: utf-8 -*-
n,m,l = map(int,input().split())
A = [list(map(int,input().split())) for i in range(n)]
B = [list(map(int,input().split())) for i in range(m)]

ANS = [[0 for i in range(l)]for j in range(n)]
for ni in range(n):
  for li in range(l):
    for mi in range(m):
      ANS[ni][li] += A[ni][mi]*B[mi][li]
    if li!=l-1:
      print(ANS[ni][li],end=' ')
    else:
      print(ANS[ni][li])

#その他
for row in ANS:
  print(' '.join([str(n) for n in row]))

print([' '.join([str(n) for n in row]) for row in ANS])