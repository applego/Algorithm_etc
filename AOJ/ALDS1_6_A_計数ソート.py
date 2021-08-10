"""
計数ソート
計数ソートは各要素が 0 以上
k
 以下である要素数
n
 の数列に対して線形時間(
O
(
n
+
k
)
)で動く安定なソーティングアルゴリズムです。

入力数列
A
 の各要素
A
j
 について、
A
j
 以下の要素の数をカウンタ配列
C
 に記録し、その値を基に出力配列
B
 における
A
j
 の位置を求めます。同じ数の要素が複数ある場合を考慮して、要素
A
j
 を出力（
B
 に入れる）した後にカウンタ
C
[
A
j
]
 は修正する必要があります。詳しくは以下の疑似コードを参考にしてください。

1 CountingSort(A, B, k)
2     for i = 0 to k
3         C[i] = 0
4
5     /* C[i] に i の出現数を記録する */
6     for j = 1 to n
7         C[A[j]]++
8
9     /* C[i] に i 以下の数の出現数を記録する*/
10    for i = 1 to k
11        C[i] = C[i] + C[i-1]
12
13    for j = n downto 1
14        B[C[A[j]]] = A[j]
15        C[A[j]]--
数列
A
 を読み込み、計数ソートのアルゴリズムで昇順に並び替え出力するプログラムを作成してください。上記疑似コードに従ってアルゴリズムを実装してください。

入力
入力の最初の行に、数列
A
 の長さを表す整数
n
 が与えられます。２行目に、
n
 個の整数が空白区切りで与えられます。

出力
整列された数列を1行に出力してください。数列の連続する要素は１つの空白で区切って出力してください。

"""
# -*- coding: utf-8 -*-
from sys import stdin

def counting_sort(A, k):
    n = len(A)
    C = [0 for _ in range(k + 1)]

    # C[i]にiの出現数を記録する
    for j in range(n):
        C[A[j]] += 1

    # C[i]にi以下の数の出現数を記録する
    for i in range(1, k + 1):
        C[i] = C[i] + C[i - 1]

    B = [0 for _ in range(n)]
    for j in range(n - 1, -1, -1):
        B[C[A[j]]-1] = A[j]
        C[A[j]] -= 1

    return B

# N = int(stdin.readline().rstrip())
# A = list(map(int,stdin.readline().rstrip().split(' ')))
# k = max(A)

# A = [4, 5, 0, 3, 1, 5, 0, 5]
A = list(map(int,"2 5 1 3 2 3 0".split(' ')))
k = max(A)

ans = counting_sort(A, k)
print(" ".join(map(str,ans)))
