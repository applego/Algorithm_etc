
"""

"""

# -*- coding: utf-8 -*-
from sys import stdin
import math

def counting_sort(A, B, k):
    C = [0] * (k + 1)

    # C[i] にiの出現数を記録する
    for j in range(1, n):
        C[A[j]] += 1

    #C[i]にi以下の数の出現数を記録する
    for i in range(1, k + 1):
        C[i] = C[i] + C[i - 1]

    for j in range(n-1, 0, -1):
        B[C[A[j]]] = A[j]
        C[A[j]] -= 1


n = int(stdin.readline().rstrip())
*A, = map(int, stdin.readline().rstrip().split())
B = []
C = []
counting_sort(A, B, max(A))
print(*B)
