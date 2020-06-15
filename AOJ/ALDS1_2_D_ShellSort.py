# -*- coding: utf-8 -*-
from sys import stdin

def bubble_sort(A, N):  # N個の要素を含む0-オリジンの配列 A
  #A = [int(a[1]) for a in A]
  flag = True  # 逆の隣接要素が存在する
  exchange_cnt = 0
  while flag:
    flag = False
    for j in range(N - 1, 0, -1):
      if int(A[j][1]) < int(A[j - 1][1]):
        A[j], A[j - 1] = A[j - 1], A[j]
        flag = True
        exchange_cnt += 1
  return A#exchange_cnt

def selection_sort(A, N):  #N個の要素を含む0-オリジンの配列 A
  # A = [int(a[1]) for a in A]
  exchange_cnt = 0
  for i in range(0, N):
    minj = i
    for j in range(i, N):
      if int(A[j][1]) < int(A[minj][1]):
        minj = j
    else:
      if i != minj:
        A[i], A[minj] = A[minj], A[i]
        exchange_cnt += 1
  return A#exchange_cnt

#* new
def insertion_sort(A, g,is_use_shell=True):
  global cnt
  if not is_use_shell:
    cnt = 0

  for i in range(g, len(A)):
    v = A[i]
    j = i - g
    while j >= 0 and A[j] > v:
      A[j + g] = A[j]
      j = j - g
      cnt += 1
    A[j + g] = v
  return A,cnt

def shell_sort(A,b):
  global cnt
  cnt = 0
  G = [1]
  for i in range(100):
    val = 1 + b * G[-1]
    if len(A) < val:
      break
    G.append(val)
  m = len(G)
  G.reverse()
  for i in range(m):
    insertion_sort(A, G[i],True)
  return A,cnt

n = int(stdin.readline().rstrip())
A = [int(stdin.readline().rstrip()) for i in range(n)]

import time

#insertion_sort
t1 = time.time()
a, c = insertion_sort(list(A), 1,False)
t2 = time.time()
# print("time:{:.8f} A:{} cnt:{}".format(t2-t1, ''.join(map(str, a)), c))
print("time:{:.8f} cnt:{}".format(t2-t1, c))

for b in range(100):
  t = time.time()
  a,c = shell_sort(list(A), b)
  t2 = time.time()
  # print("time:{:.8f} A:{} cnt:{} b:{}".format(t2 - t, ''.join(map(str, a)), c, b))
  print("time:{:.8f} cnt:{} b:{}".format(t2 - t, c, b))


# n = int(stdin.readline().rstrip())
# A = list(stdin.readline().split())

# ans = bubble_sort(list(A), n)
# print(' '.join(map(str, ans)))
# print('Stable')

# ans2 = selection_sort(A, n)
# print(' '.join(map(str,ans2)))
# print('Stable' if ans2==ans else 'Not stable')

#!提出
# -*- coding: utf-8 -*-
from sys import stdin

def insertion_sort2(A, g):
  global cnt

  for i in range(g, len(A)):
    v = A[i]
    j = i - g
    while j >= 0 and A[j] > v:
      A[j + g] = A[j]
      j = j - g
      cnt += 1
    A[j + g] = v


def shell_sort2(A, b):
  global cnt
  cnt = 0
  G = [1]
  for i in range(100):
    val = 1 + b * G[-1]
    if len(A) < val:
      break
    G.append(val)
  m = len(G)
  G.reverse()
  print(m)
  print(' '.join(map(str, G)))
  for i in range(m):
    insertion_sort2(A, G[i])
  print(cnt)
  for e in A:print(e)


n = int(stdin.readline().rstrip())
A = [int(stdin.readline().rstrip()) for i in range(n)]
shell_sort2(A, 3)#なんで３なん
