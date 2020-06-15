# -*- coding: utf-8 -*-
from sys import stdin

def bubble_sort(A, N):  #N個の要素を含む0-オリジンの配列 A
  flag = True  #逆の隣接要素が存在する
  exchange_cnt =0
  while flag:
    flag = False
    for j in range(N - 1, 0, -1):
      if A[j] < A[j - 1]:
        A[j], A[j - 1] = A[j - 1], A[j]
        flag = True
        exchange_cnt += 1
  return A, exchange_cnt

n = int(stdin.readline().rstrip())
A = list(map(int, stdin.readline().split()))
ans = bubble_sort(A, n)
print(' '.join(map(str,ans[0])))
print(ans[1])

#ALDS1_2_A_バブルソート
