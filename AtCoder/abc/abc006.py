def solve_a():
    """
    Nが与えられる。
    Nに3が含まれる or 3で割り切れる→YES
    それ以外→NO

    """
    N = int(input())
    if N % 3 == 0 or "3" in str(N):
        print("YES")
    else:
        print("NO")


def solve_b():
    """
    トリボナッチ数列
    3つ前までの数字を足したもの
    a1 = 0, a2 = 0, a3 = 1
    an = an-1 + an-2 + an-3

    この数列の第n項、anを10007で割った余りを求めてください。
    """
    n = int(input())
    a = [0, 0, 1]

    for i in range(3, n):
        # print(f"i:{i}, an:{a[i - 1] + a[i - 2] + a[i - 3]}, %:{(a[i - 1] + a[i - 2] + a[i - 3]) % 10007}")
        a.append((a[i - 1] + a[i - 2] + a[i - 3]) % 10007)
    print(a[n - 1])


def solve_c():
    """
    この町には人間がN人いる。
    人間の種類は、大人、老人、赤ちゃんの3通り
    この町にいる人間の足の数の合計はM本で、大人の足は2本、老人の足は3本、赤ちゃんの足は4本と仮定した場合、
    存在する人間の組み合わせとしてあり得るものを1つ答えよ。
    組み合わせが存在しない場合は、-1 -1 -1と出力せよ。

    """
    n, m = map(int, input().split())
    for i in range(n + 1):
        for j in range(n - i + 1):
            if 2 * i + 3 * j + 4 * (n - i - j) == m:
                print(i, j, n - i - j)
                return

    print(-1, -1, -1)


def solve_c2():
    # 人間の数と足の数を入力から取得
    num_people, num_legs = map(int, input().split())

    # 足の数を2倍した値を計算
    two_times_num_people = num_people * 2

    # 足の数から2倍した値を引いた結果を計算
    diff_legs_two_times_num_people = num_legs - two_times_num_people

    # 引いた結果を2で割った整数値を計算
    num_fours = int(diff_legs_two_times_num_people / 2)

    # 四本足の人間の数を計算
    num_threes = diff_legs_two_times_num_people - num_fours * 2

    # 二本足の人間の数を計算
    num_twos = num_people - num_fours - num_threes

    # 二本足の人間、三本足の人間、四本足の人間の数が0以上であるかを判定
    if num_twos >= 0 and num_threes >= 0 and num_fours >= 0:
        # それぞれの人間の数を出力
        print(num_twos, num_threes, num_fours)
    else:
        # それ以外の場合は、-1を3つ出力
        print(-1, -1, -1)


if __name__ == "__main__":
    solve_c2()
