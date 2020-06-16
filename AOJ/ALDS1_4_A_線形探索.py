# -*- coding: utf-8 -*-
from sys import stdin

n = int(stdin.readline().rstrip())
S = list(map(int, stdin.readline().rstrip().split()))
q = int(stdin.readline().rstrip())
T = list(map(int, stdin.readline().rstrip().split()))

import time

t1 = time.time()
cnt = 0
for t in T:
  for s in S:
    if s == t:
      cnt += 1
      break
print(cnt)
print("time{}".format(t1 - (time.time())))

t2 = time.time()
cnt = 0
for t in T:
  if t in S:
    cnt += 1
print(cnt)
print("time{}".format(t2 - (time.time())))

t3 = time.time()
ss = set(S)
tt = set(T)
print(len(ss & tt))
print("time{}".format(t3 - (time.time())))

t4 = time.time()
cnt = 0
dic={}
for s in S:
  dic[s] = True
for t in T:
  if dic.__contains__(t):
    cnt += 1
print(cnt)
print("time{}".format(t4 - (time.time())))


# 5
# 1 2 3 4 5
# 3
# 3 4 1
# 3
# time-0.0002009868621826172
# 3
# time-1.6927719116210938e-05

#Solutions
#setを使用するべき

#1
n = input()
s = set(input().split())
q = input()
t = set(input().split())
print(len(s & t))

#2

DICT = {}

for i in range(len(S)):
    DICT[S[i]] = True

Q = int(input())
T = list(map(int, input().split()))

ans = 0

for i in range(len(T)):
    if DICT.__contains__(T[i]):
        ans += 1

print("%d" % (ans))
