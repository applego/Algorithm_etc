def solve_a():
    """
    N:段ボールの個数
    1往復で2個の段ボールを運べる
    何往復必要か？
    """
    n = int(input())
    print(n // 2 if n % 2 == 0 else n // 2 + 1)


"""

"""


def solve_b():
    n = int(input())
    prices = [int(input()) for _ in range(n)]

    # 1番目に高い料理の金額を求める
    max_price = max(prices)

    # 2番目に高い料理の金額を求める
    second_max_price = max(price for price in prices if price != max_price)

    print(second_max_price)


import collections


def solve_c2():
    n, k = map(int, input().split())
    s = input()

    sorted_s = sorted(s)

    ans = list()
    cnt = 0

    for i in range(n):
        counter = collections.Counter(s[: i + 1]) - collections.Counter(ans)
        v = sum(counter.values())
        for c in sorted_s:
            tmp_cnt = cnt + (c != s[i])
            dif = v - (counter[c] > 0)
            if tmp_cnt + dif <= k:
                ans.append(c)
                sorted_s.remove(c)
                cnt = tmp_cnt
                break
    print("".join(ans))


from collections import Counter


def solve_c():
    n, k = map(int, input().split())
    s = input()

    sorted_s = sorted(s)
    ans = list()
    cnt = 0

    for i in range(n):
        diff_counter = Counter(s[: i + 1]) - Counter(ans)
        diff_counts = sum(diff_counter.values())
        for c in sorted_s:
            tmp_cnt = cnt + (c != s[i])
            diff = diff_counts - (diff_counter[c] > 0)
            if tmp_cnt + diff <= k:
                ans.append(c)
                sorted_s.remove(c)
                cnt = tmp_cnt
                break
    print("".join(ans))


if __name__ == "__main__":
    solve_c2()
    # solve_b()
    # solve_a()
    # solve_c2()
