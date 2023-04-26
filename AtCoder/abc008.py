def solve_a():
    s, t = map(int, input().split())
    print(t - s + 1)


def solve_b():
    n = int(input())
    d = {}
    for _ in range(n):
        s = input()
        if s in d:
            d[s] += 1
        else:
            d[s] = 1
    print(max(d, key=d.get))


import itertools


def solve_c():
    def to_dict(pattern):
        d = {}
        for i in range(len(pattern)):
            d[i] = True
        return d

    def move(pattern, d):
        for i in range(len(pattern) - 1):
            current = pattern[i]
            right = pattern[i + 1 :]
            for i_right, v_right in enumerate(right):
                if v_right % current == 0:
                    d[i + i_right + 1] = not d[i + i_right + 1]
        return d

    def count(d):
        cnt_omote = 0
        for k, v in d.items():
            if v:
                cnt_omote += 1
        return cnt_omote

    n = int(input())
    c = [int(input()) for _ in range(n)]
    # cの並び順を全通り取得する
    c_perm = list(itertools.permutations(c))
    # d = {}
    sum_omote = 0
    for pattern in c_perm:
        d = to_dict(pattern)
        d_moved = move(pattern, d)
        sum_omote += count(d_moved)

    # 期待値
    print(sum_omote / len(c_perm))


def solve_c2():
    n = int(input())
    a = [int(input()) for _ in range(n)]
    ans = 0
    for i in a:
        # x = sum([1 for j in a if not i % j])
        x = 0
        for j in a:
            if not i % j:
                x += 1
        ans += (x + 1) // 2 / x
    print(ans)


if __name__ == "__main__":
    # solve_a()
    # solve_b()
    # solve_c()
    solve_c2()
    # solve_d()
