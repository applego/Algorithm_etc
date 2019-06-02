# -*- coding: utf-8 -*-
# 安定なソート
# トランプのカードを整列しましょう。ここでは、４つの絵柄(S, H, C, D)と９つの数字(1, 2, ..., 9)から構成される計 36 枚のカードを用います。例えば、ハートの 8 は"H8"、ダイヤの 1 は"D1"と表します。

# バブルソート及び選択ソートのアルゴリズムを用いて、与えられた N 枚のカードをそれらの数字を基準に昇順に整列するプログラムを作成してください。アルゴリズムはそれぞれ以下に示す疑似コードに従うものとします。数列の要素は 0 オリジンで記述されています。

# 1 BubbleSort(C, N)
# 2   for i = 0 to N-1
# 3     for j = N-1 downto i+1
# 4       if C[j].value < C[j-1].value
# 5         C[j] と C[j-1] を交換
# 6
# 7 SelectionSort(C, N)
# 8   for i = 0 to N-1
# 9     minj = i
# 10    for j = i to N-1
# 11      if C[j].value < C[minj].value
# 12        minj = j
# 13    C[i] と C[minj] を交換

def main():
    N = int(input())
    alst = list(input().split())
    a,b = bubbleSort(alst[:])
    print(' '.join(map(str,a)))
    print(b)

    a,b = selectionSort(alst[:])
    print(' '.join(map(str,a)))
    print(b)
    
def bubbleSort(lst):
    j = len(lst) - 1
    isStateble = 'Stable'
    bcnt = 0
    while j:
        for i in range(j):
            if int(lst[i][1]) > int(lst[i + 1][1]):
                lst[i], lst[i + 1] = lst[i + 1], lst[i]
                bcnt += 1
        j -= 1
        #return bcnt,isStateble
    return lst,isStateble

def selectionSort(lst):
    isStateble = 'Stable'
    cnt = 0
    for i in range(len(lst)):
        minj = i
        for j in range(i,len(lst)):
            if(lst[j][1] < lst[minj][1]):
                minj = j
        if lst[i][1] > lst[minj][1]:
            lst[i],lst[minj] = lst[minj],lst[i]
            cnt += 1
            if not(((i+1) == minj) or ((i-1) == minj)):
                isStateble = 'Not stable'

    return lst,isStateble
    # return lst,cnt

def insertionSort(lst):
    for i in range(1,len(lst)):
        v = lst[i]
        j = i-1
        while j >= 0 and lst[j] > v:
            lst[j+1] = lst[j]
            j -= 1
        lst[j+1] = v
    return ' '.join(map(str,lst)),

main()
