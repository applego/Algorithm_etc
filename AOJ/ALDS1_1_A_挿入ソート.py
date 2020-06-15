# -*- coding: utf-8 -*-
from sys import stdin

def insertionSort(A, N):  #N個の要素を含む0−オリジンの配列
  print(' '.join(map(str, A)))
  for i in range(1, N):
    v = A[i]
    j = i - 1
    while j >= 0 and A[j] > v:
      A[j + 1] = A[j]
      j -= 1
    A[j + 1] = v
    print(' '.join(map(str,A)))

N = int(stdin.readline().rstrip())
A = list(map(int, stdin.readline().split()))

insertionSort(A, N)
