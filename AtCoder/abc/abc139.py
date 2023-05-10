def solve_a():
    s = input()
    t = input()

    match = 0
    for si, ti in zip(s, t):
        if si == ti:
            match += 1
    print(match)


# solve_a()

import math


def solve_b():
    num_per_1tap, num_goal = map(int, input().split())

    x = (num_goal - 1) / (num_per_1tap - 1)
    # xが整数ならxを、そうでないならxを切り上げたものを出力する
    # 例えば、x = 1.5なら2を出力する
    # 例えば、x = 1.0なら1を出力する
    ans = math.ceil(x)
    print(ans)


# solve_b()


def solve_c():
    n = int(input())
    hs = list(map(int, input().split()))

    ans = 0
    cnt = 0
    for i in range(n - 1):
        if hs[i] >= hs[i + 1]:
            cnt += 1
        else:
            cnt = 0
        ans = max(ans, cnt)
    print(ans)


# solve_c()

import itertools


def solve_c():
    n = int(input())
    # 1...nまでの数字の並び順を全通り取得する
    # 例えば、n=3なら、[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]を取得する
    all_patterns = list(itertools.permutations(range(1, n + 1)))
    ans_max_sum = -1
    for pattern in all_patterns:
        tmp_sum = 0
        for i, v in enumerate(pattern):
            mi = (i + 1) % v
            tmp_sum += mi
        ans_max_sum = max(ans_max_sum, tmp_sum)
    print(ans_max_sum)
    # TLE


# solve_c()


def solve_c2():
    n = int(input())
    print(n * (n - 1) // 2)


solve_c2()
