
"""
反転数＝バブルソートの交換回数
"""

# -*- coding: utf-8 -*-
from sys import stdin
import math

def bubble_sort(A):
    cnt = 0
    for i in range(len(A)):
        for j in range(len(A) - 1, i, -1):
            if A[j] < A[j - 1]:
                A[j], A[j - 1] = A[j - 1], A[j]
                # print(*A)
                cnt += 1
    return cnt

# n = int(stdin.readline().rstrip())
# A = list(map(int, stdin.readline().split()))

# cnt = bubble_sort(A)
# print(cnt)

#* solution
def merge(A, left, mid, right):
    global c
    L, R = A[left:mid] + [1e9], A[mid:right] + [1e9]
    i = j = 0
    for k in range(left, right):
        # print("A" + " ".join(map(str, A)))
        # print("L" + " ".join(map(str, L)))
        # print("R" + " ".join(map(str, R)))
        # print("================================================")

        if L[i] < R[j]:
            A[k] = L[i]; i += 1; c += j
            # print("A" + " ".join(map(str, A)))
            # print("L" + " ".join(map(str, L)))
            # print("R" + " ".join(map(str, R)))
            # print("================================================")
        else:
            A[k] = R[j]; j += 1
            # print("A" + " ".join(map(str, A)))
            # print("L" + " ".join(map(str, L)))
            # print("R" + " ".join(map(str, R)))
            # print("================================================")
def merge_sort(A, left, right):
    if left + 1 < right:
        mid = (left + right) // 2
        merge_sort(A, left, mid)
        merge_sort(A, mid, right)
        merge(A, left, mid, right)
c = 0
n = int(input())
A = list(map(int, input().split()))
merge_sort(A, 0, n)
print(c)
