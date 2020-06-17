
"""
マージソートは分割統治法に基づく高速なアルゴリズムで、次のように実装することが
できます。

"""

# -*- coding: utf-8 -*-
from sys import stdin

n = int(stdin.readline().rstrip())
*A, = map(int, stdin.readline().split())
cnt = 0

def merge(A, left, mid, right):
    # n1 = mid - left
    # n2 = right - mid
    #*1
    # L = [i for i in range(n1 + 1)]
    # R = [i for i in range(n2 + 1)]
    # for i in range(n1):
    #     L[i] = A[left + i]
    # for i in range(n2):
    #     R[i] = A[mid + i]
    # L[n1] = 10 ** 9
    # R[n2] = 10 ** 9
    #*2
    # L = [A[left + i] for i in range(n1)]
    # R = [A[mid + i] for i in range(n2)]
    # L.append(10 ** 9)
    # R.append(10 ** 9)
    #*3
    L = A[left:mid] + [10 ** 9 + 1]
    R = A[mid:right] + [10 ** 9 + 1]
    i = 0
    j = 0
    for k in range(left, right):
        # print(" ".join(map(str,A)))#TODO
        if L[i] <= R[j]:
            A[k] = L[i]
            i += 1
        else:
            A[k] = R[j]
            j += 1
    global cnt
    cnt += right - left  # !

def merge_sort(A, left, right):
    if left + 1 < right:
        mid = (left + right) // 2
        merge_sort(A, left, mid)
        merge_sort(A, mid, right)
        merge(A, left, mid, right)
    # return cnt

merge_sort(A, 0,n)
print(" ".join(map(str, A)))
print(cnt)

#* solutions
def count(left, right):
    cnt = 0
    if left + 1 < right:
        mid = (left + right) >> 1
        cnt += count(left, mid)
        cnt += count(mid, right)
        cnt += (right - left)
    return cnt

cnt = count(0, int(stdin.readline().rstrip()))
arr = list(map(int, stdin.readline().rstrip().split()))
arr.sort()
print(*arr)
print(cnt)
