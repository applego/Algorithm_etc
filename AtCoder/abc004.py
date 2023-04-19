def solve_a():
    """
    N円の借金
    2*N円返済する
    """
    N = int(input())
    print(2 * N)


def solve_b():
    """
    4*4のマス目がある
    .oxのいずれかの文字
    180度回転させた時の文字列を出力

    """
    S = [input() for _ in range(4)]
    for s in S[::-1]:
        print(s[::-1])


def solve_c(N):
    """
    6枚のカード
    1-6が書かれている
    左から1-6の順に並んでいる
    動作
    ・整数Nが与えられる
    ・i=0 ... N-1まで以下の動作を行う
        ・左から(i mod 5) + 1番目と(i mod 5) + 2番目のカードを入れ替える
            modとは剰余を意味し、例えば8mod5は3であり、15mod5は0である。
    N=5の時、最終的に
    234561となる
    """
    # N = int(input())
    cards = [1, 2, 3, 4, 5, 6]
    for i in range(N):
        cards[(i % 5)], cards[(i % 5) + 1] = cards[(i % 5) + 1], cards[(i % 5)]
    print("".join(map(str, cards)))


def create_answer(N):
    cards = [1, 2, 3, 4, 5, 6]
    for i in range(N):
        idx = i % 5
        cards[idx], cards[idx + 1] = cards[idx + 1], cards[idx]
    return "".join(map(str, cards))


def solve_d():
    """
    一直線上に無限個の箱が並んでいる
    それぞれの箱に、左から右にかけて...,-2,-1,0,1,2,...の番号がついている
    番号が-100の箱に赤いマーブルがR個入っている。
    同様に、番号が0の箱に緑のマーブルがG個
    番号が100の箱に青いマーブルがB個入っている。
    これら以外の箱には何も入っていない。
    以下の操作を繰り返してすべての箱に入っているマーブルの個数が1個以下になるようにしてください
    ・マーブルを1つ選び、それを左右どちらかの隣接する箱に移動させる
    ・ただしこのとき、１つの箱に複数の異なる色のマーブルを入れてはならない。
    必要となる最小の操作回数を求めてください。

    入力
    R G B
    1<=R,G,B<=300

    2 3 4
    が入力された時、
    7
    と出力する
    """
    R, G, B = map(int, input().split())
    ans = 0
    ans += trend_line(R)
    ans += trend_line(G)
    ans += trend_line(B)
    print(ans)


def count(n):
    if n == 0 or n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return (n // 2) * (n // 2 + 1)


def trend_line(n):
    """=POW(B3,2)*0.25+4.04*POW(10,-3)*B3-0.151"""
    ans1 = n * n * 0.25 + 4.04 * pow(10, -3) * n - 0.151
    return round(ans1)


if __name__ == "__main__":
    solve_d()
    # for i in range(1, 100):
    #     print(f"i: {i}, count: {count(i)}")
    # solve_d()
    # # N=1~30までの答えを辞書で作成
    # answers = {}
    # for i in range(31):
    #     answers[i] = create_answer(i)
    # N = int(input())
    # print(answers[N % 30])

    # for i in range(1, 35):
    #     print(f"i: {i}")
    #     solve_c(i)

    # solve_b()
    # solve_a()
