# -*- coding: utf-8 -*-
from sys import stdin

def selection_sort(A, N):  #N個の要素を含む0-オリジンの配列 A
  exchange_cnt=0
  for i in range(0, N):
    minj = i
    for j in range(i, N):
      if A[j] < A[minj]:
        minj = j
    else:
      if i != minj:
        A[i], A[minj] = A[minj], A[i]
        exchange_cnt += 1
  return A,exchange_cnt

n = int(stdin.readline().rstrip())
A = list(map(int, stdin.readline().split()))
ans = selection_sort(A, n)
print(' '.join(map(str,ans[0])))
print(ans[1])

#ALDS1_2_A_バブルソート
