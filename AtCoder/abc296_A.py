import math

"""
A - Alternately  / 
実行時間制限: 2 sec / メモリ制限: 1024 MB

配点 : 
100 点

問題文
N 人が一列に並んでいます。列の状態は長さ 
N の文字列 
S で与えられ、前から 
i 番目の人は 
S の 
i 文字目が M のとき男性、F のとき女性です。

男女が交互に並んでいるかどうか判定してください。

男性同士が隣り合う箇所も女性同士が隣り合う箇所も存在しないとき、かつ、そのときに限り、男女が交互に並んでいるといいます。

制約
1≤N≤100
N は整数である
S は M および F のみからなる長さ 
N の文字列である
入力
入力は以下の形式で標準入力から与えられる。

N
S
出力
男女が交互に並んでいるとき Yes、そうでないとき No と出力せよ。

"""


def question_a():
    """問題Aの解答"""
    input_n = int(input())
    input_s = input()
    ans = "Yes"
    for i in range(input_n - 1):
        if input_s[i] == input_s[i + 1]:
            ans = "No"
            break
    print(ans)


"""
チェス盤のどこにコマが置かれているか答えてください。
8*8のチェス盤
左から 
- 1 列目にあるマスの名前の1文字目は a である。同様に、左から 2,3,…,8 列目にあるマスの名前の 1 文字目は b, c, d, e, f, g, h である。
- 下から 1 行目にあるマスの名前の 1文字目は 1 である。同様に、下から 2,3,…,8 行目にあるマスの名前の 2 文字目は 2, 3, 4, 5, 6, 7, 8 である。

例えば、グリッドの左下のマスの名前は a1、右下のマスの名前は h1、右上のマスの名前は h8 です。
置かれているとき *、置かれていないとき . 

input1
........
........
........
........
........
........
........
*.......

output1
a1

input2
........
........
........
........
........
.*......
........
........

output2
b3

"""


def question_b():
    """問題Bの解答"""
    chess = []
    for i in range(8):
        chess.append(input())
    for i in range(8):
        for j in range(8):
            if chess[i][j] == "*":
                print(chr(ord("a") + j) + str(8 - i))
                return


"""
長さNの数列Aが与えられます。
1 <= i, j <= Nである組(i,j)でA[i] - A[j] = Xとなるものが存在するか判定してください。
入力はすべて整数

input sample
N X
A1 A2 ... AN

output sample
Yes or No

input3
2 0
141421356 17320508

output3
Yes

"""


def question_c():
    """問題Cの解答"""
    N, X = map(int, input().split())
    A = list(map(int, input().split()))
    sorted_A = sorted(A)
    ans = "No"
    for i in range(N):
        for j in range(N):
            if sorted_A[i] - sorted_A[j] == X:
                ans = "Yes"

    print(ans)


def question_c_2():
    N, X = map(int, input().split())
    A = set(map(int, input().split()))
    ans = "No"
    for a in A:
        if a + X in A:
            ans = "Yes"
            break
    print(ans)


"""
正の整数N,Mが与えられます。
次の条件をともにみたす最小の正整数 X を求めてください。 
ただし、そのようなものが存在しない場合は 「-1」 を出力してください。
- X は 1 以上 N 以下の整数 a,b の積として表される。ここで、a と b は同じ整数でも良い。
- X は M 以上である。

入力例1
5 7
出力例1
8
解答法
7は1以上5以下の積として表せない
8は1以上5以下の積として表せる（2*4）
⇒8が最小の正の整数

入力例2
2 5
出力例2
-1

入力例3
100000 10000000000
出力例3
10000000000

答えが 32 bit 整数型に収まらない場合があることに注意してください。
"""


def question_d():
    N, M = map(int, input().split())
    ans = 10**18
    for a in range(1, min(N + 1, int(M**0.5) + 2)):
        b = -(-M // a)
        if b <= N:
            ans = min(ans, a * b)
    return -1 if ans == 10**18 else ans


def question_d_40270335():
    N_max_candidate, M_min_of_X = map(int, input().split())
    ans = 10**18
    for a in range(1, min(N_max_candidate + 1, int(M_min_of_X**0.5) + 2)):
        b = -(-M_min_of_X // a)
        if b <= N_max_candidate:
            ans = min(ans, a * b)
    print(-1 if ans == 10**18 else ans)


if __name__ == "__main__":
    # question_a()
    # question_b()
    # question_c()
    # question_c_2()
    print(question_d())
    # question_d_40270335()
