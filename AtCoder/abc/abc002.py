"""
そこで、与えられた 2 つの整数のうち、大きい方の値を出力するプログラムを書いてください。

入力例1
3 5
出力例1
5
"""


def solve_a():
    """"""
    a, b = map(int, input().split())
    print(max(a, b))


def solve_b():
    """
    remove 母音（a, i, u, e, o）を削除する

    input1
    chokudai
    output1
    chkd
    """
    input_s = input()
    for i in "aiueo":
        input_s = input_s.replace(i, "")
    print(input_s)


import re


def solve_b_reg():
    """こっちの方が遅かった"""
    input_s = input()
    # 正規表現
    print(re.sub("[aiueo]", "", input_s))


def solve_c():
    """今回は三角形の測量です。高橋くんには 2 次元平面上の 3 つの点 A, B, C が与えられます。
        三角形ABC の面積を出力するプログラムを書いてください。
        hint:
            3 点 (0,0), (a,b), (c,d) で構成される三角形の面積は、
    ∣ad−bc∣/2
    となります。

        input1:
            1 0 3 0 2 5

        output1:
            5.0
    """
    ax, ay, bx, by, cx, cy = map(int, input().split())
    print(abs(ax * by + bx * cy + cx * ay - ay * bx - by * cx - cy * ax) / 2)

    """
    not クリアー
    正答と誤答がある
    """


def solve_d():
    N, M = map(int, input().split())
    adj = [[] for _ in range(N)]
    ans = 0

    def dfs(u, visited, cnt):
        nonlocal ans
        if cnt > ans:
            ans = cnt
        visited[u] = True
        for v in adj[u]:
            if not visited[v]:
                dfs(v, visited, cnt + 1)

    for i in range(M):
        x, y = map(int, input().split())
        x -= 1
        y -= 1
        adj[x].append(y)
        adj[y].append(x)

    for i in range(N):
        visited = [False] * N
        dfs(i, visited, 1)

    print(ans)


if __name__ == "__main__":
    solve_d()
    # solve_c()
    # solve_b_reg()
    # solve_b()
    # solve_a()
