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

n = int(stdin.readline().rstrip())
A = list(stdin.readline().split())

ans = bubble_sort(list(A), n)
print(' '.join(map(str, ans)))
print('Stable')

ans2 = selection_sort(A, n)
print(' '.join(map(str,ans2)))
print('Stable' if ans2==ans else 'Not stable')
