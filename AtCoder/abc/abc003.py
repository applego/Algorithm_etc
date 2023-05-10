"""
タスク数x
1～xまでのさいころを振って、出た目*10000円が給料
毎月N個のタスクをこなすとして、平均給料はいくらか
1~xがでる確率は1/x
"""


def solve_a():
    N = int(input())
    print(10000 * (N + 1) // 2)


def solve_b():
    """
    アルファベットの小文字（a~z）or @の文字
    ゲームの手順：
        1. カードを同じ枚数ずつ2列に並べて文字列を2つ作る
        2. @のカードは、それぞれa,t,c,o,d,e,rのどれかに置き換える
        3. 2つの列が指し示す文字列が同じであれば価値、同じでなければ負けです。

    命令：
        手順1の結果として得られる文字列が入力される。適切に@を置換して、ゲームに勝てるかを判定せよ。
        勝てる→You can win、勝てない→You will lose
    入力:
        S
        T
    出力:
        You can win or You will lose

    """
    S = input()
    T = input()
    for s, t in zip(S, T):
        if s == t:
            continue
        elif s == "@" and t in "atcoder":
            continue
        elif t == "@" and s in "atcoder":
            continue
        else:
            print("You will lose")
            return
    print("You can win")


def solve_c():
    """
    N K
    R1 R2 ... RN

    N:配信動画の数
    K:見れる動画の数
    Ri:配信動画のi番目のレート、この動画を見た人のレートは（C+Ri)/2になる（Cは見る前のレート）
    上記の条件で、N個の動画を見た後に取りうる最大のレートはいくらか
    """
    N, K = map(int, input().split())
    R = list(map(int, input().split()))
    R.sort()
    R = R[N - K :]
    ans = 0
    for r in R:
        ans = (ans + r) / 2
    print(ans)


def solve_d():
    """
    社員室がR*C(R行C列)で区切られている会社がある。
    各社員室には、・社員のデスク・サーバーラックのどちらかがある or 何もない
    各社員室は、平行な長方形の領域でないといけない。

    """


if __name__ == "__main__":
    solve_c()
    # solve_b()
    # solve_a()
