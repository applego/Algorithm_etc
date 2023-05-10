def solve_a():
    """
    x:g/個
    y:g
    """
    x, y = map(int, input().split())
    print(y // x)


def solve_b():
    """
    N:入力の行数
    T1:1個目が何秒前に完成したか
    T2:2個目が何秒前に完成したか
    TN:N個目が何秒前に完成したか

    T1~TNの中で、最も遅く完成したものが何秒前かを出力
    """
    N = int(input())
    T = [int(input()) for _ in range(N)]
    print(min(T))


def solve_c():
    """
    T秒以内に作成されたたこ焼きを売り続ける時に、売りさばけるか
    入力
    T:お客さんが来た時にT秒以内に作られたたこ焼きは売れる
    N:たこ焼きの数
    A1 A2 ... AN:たこ焼きの焼き上がり時間(秒後)
    M:お客さんの数
    B1 B2 ... BM:お客さんが来た時刻(秒後)
    """
    T = int(input())
    takoyaki_num = int(input())
    takoyaki_list = list(map(int, input().split()))
    customer_num = int(input())
    customer_list = list(map(int, input().split()))
    # お客さんの数がたこ焼きの数より多い場合は売り切れない
    if customer_num > takoyaki_num:
        print("no")
        return
    # お客さんが来た時に、T秒以内に作られたたこ焼きがない場合は売り切れない
    for customer_time in customer_list:
        # 売ることができるたこやきのリスト
        can_sell_takoyaki_list = [
            takoyaki_time
            for takoyaki_time in takoyaki_list
            if takoyaki_time <= customer_time and (customer_time - takoyaki_time) <= T
        ]
        if len(can_sell_takoyaki_list) == 0:
            print("no")
            return
        # takoyaki_list.remove(min(can_sell_takoyaki_list))
        takoyaki_list.remove(can_sell_takoyaki_list[0])
    print("yes")


def solve_d():
    """
    たこ焼き器:N*Nの正方形
    場所(i,j)のおいしさDij
    Pk:一度に焼ける個数（店員kの値）
    ※一度に焼けるたこ焼きはたこ焼き器の長方形の部分になっていて、その中の全てを使わなければなりません。

    """


if __name__ == "__main__":
    solve_d()
