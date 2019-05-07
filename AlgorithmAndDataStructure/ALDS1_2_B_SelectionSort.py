# -*- coding: utf-8 -*-
# 選択ソート
# 選択ソートは、各計算ステップで１つの最小値を「選択」していく、直観的なアルゴリズムです。

# 1 selectionSort(A, N) // N個の要素を含む0-オリジンの配列A
# 2   for i が 0 から N-1 まで
# 3     minj = i
# 4     for j が i から N-1 まで
# 5       if A[j] < A[minj]
# 6         minj = j
# 7     A[i] と A[minj] を交換
# 数列Aを読み込み、選択ソートのアルゴリズムで昇順に並び替え出力するプログラムを作成してください。上の疑似コードに従いアルゴリズムを実装してください。

# 疑似コード 7 行目で、i と minj が異なり実際に交換が行われた回数も出力してください。

def main():
    N = int(input())
    alst = list(map(int,input().split()))
    a,b = selectionSort(alst[:])
    print(' '.join(map(str,a)))
    print(b)

def selectionSort(lst):
    isStateble = True
    cnt = 0
    for i in range(len(lst)):
        minj = i
        for j in range(i,len(lst)):
            if(lst[j] < lst[minj]):
                minj = j
        if lst[i] > lst[minj]:
            lst[i],lst[minj] = lst[minj],lst[i]
            cnt += 1

    # return lst,isStateble
    return lst,cnt

main()
