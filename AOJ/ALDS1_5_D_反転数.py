
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

n = int(stdin.readline().rstrip())
A = list(map(int, stdin.readline().split()))

import time
#1
t1 = time.time()
c = bubble_sort(list(A))
print(c)
print("time:{}".format(time.time() - t1))

#コムソートしてみるComb
# →早くなるけど反転数は変わる（隣の要素と交換でない）
def comb_sort(A):
    cnt = 0
    h = int(n // 1.3)
    while 1:
        for i in range(0, n - h):
            if A[i] > A[i + h]:
                A[i], A[i + h] = A[i + h], A[i]
                # print(*A)
                # cnt += h  #
                cnt += 1
        if h == 1:
            return cnt
        h = int(h // 1.3)

#2
t2 = time.time()
c = comb_sort(list(A))
print(c)
print("time:{}".format(time.time() - t2))

#シェーカーソート
def shaker_sort(A):
    cnt = 0
    flg = 1
    for i in range(len(A)):
        if flg:
            for j in range(len(A) - 1, i, -1):
                if A[j] < A[j - 1]:
                    A[j], A[j - 1] = A[j - 1], A[j]
                    # print(*A)
                    cnt += 1
        else:
            for j in range(0,len(A)-1):
                if A[j] > A[j + 1]:
                    A[j], A[j + 1] = A[j + 1], A[j]
                    # print(*A)
                    cnt += 1
        flg = not flg
    return cnt

#3
t3 = time.time()
c = shaker_sort(list(A))
print(c)
print("time:{}".format(time.time() - t3))

#solutions
INF = 10 ** 9 + 1
def merge(A: list, left: int, mid: int, right: int) -> int:
    '''
    2つの配列をmergeする関数

    Aはこのプログラムで処理する配列
    left,mid,rightはAのindex
    '''
    cnt = 0  #mergeするときに何回反転するか
    n1 = mid - left

    L = A[left:mid] #python sliceはshallow copyらしい
    L.append(INF)  #番兵
    R = A[mid:right]
    R.append(INF)  #番兵

    i_l, i_r = 0, 0  #LとRのコントロール用index
    for k in range(left, right):
        # L、Rの先頭を比較指定って小さい方をAに打ち込む
        if L[i_l] <= R[i_r]:
            A[k] = L[i_l]
            i_l += 1
        else:
            A[k] = R[i_r]
            i_r += 1
            cnt += n1 - i_l  #ここが重要　反転したときだけ反点数を足し込んでいく
    return cnt

def merge_sort(A: list, left: int, right: int):
    '''
    マージソートをしつつ、反点数を再帰的に計算する
    ここではマージを再帰的に適用し反点数をどんどん上に伝播させていく仕組み
    '''
    if left + 1 >= right:  #終了条件
        return 0
    mid = (left + right) // 2
    v1 = merge_sort(A, left, mid)
    v2 = merge_sort(A, mid, right)
    v3 = merge(A, left, mid,right)

    return v1 + v2 + v3

#4
t4 = time.time()
# n = int(input())
# A = list(map(int, input().split()))
print(merge_sort(list(A), 0, n))
print("time:{}".format(time.time() - t4))

#5
#BIT木
n = int(input())
a = list(map(int, input().split()))
a2=list(a)
a2.sort()
S={}
for i, x in enumerate(a2):
    S[x] = i
a = [S[a[i]] + 1 for i in range(n)]

bit = [0] * (n + 1)

def acc(i):
    s = 0
    while i > 0:
        s += bit[i]
        i = i & (i - 1)  ###
    return s

def add(i, x):
    while i <= n:  ###<=
        bit[i] += x
        i += i & (-i)  ###

def solve():
    ans = 0
    for j in range(n):
        ans += j - acc(a[j])
        add(a[j], 1)
    print(ans)

t5 = time.time()
solve()
print("time:{}".format(time.time() - t5))
