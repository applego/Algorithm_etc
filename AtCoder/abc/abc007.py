def solve_a():
    n = int(input())
    print(n - 1)


def solve_b():
    """
    ・それぞれの文字列の同じ位置同士を先頭から比較していって、初めて不一致になったら、その文字同士の(アルファベットでの)比較結果が文字列の全体の比較結果である。 例えば、
    "abcd" と
    "ax" を比較すると、
    2 文字目で、"b"< "x" となるので、"abcd"<"ax" である。
    ・もし、比較している途中で片方の文字列が尽きてしまったら、文字列の長さが短い方が小さい。例えば
    "ab"<"abc"である。

    input1
    xyz

    output sample
    xy
    abcd

    input2
    c

    output sample
    a
    b

    input3
    a

    output sample
    -1
    """

    a = input()

    # 文字列を比較
    if a == "a":
        print(-1)
        return
    print("a")


from collections import deque


def solve_c():
    """幅優先探索"""
    # 入力
    r, c = map(int, input().split())
    sy, sx = map(int, input().split())
    gy, gx = map(int, input().split())
    maze = [list(input()) for _ in range(r)]

    # スタート地点をキューに入れ、その地点の距離を0にする
    queue = deque([[sy - 1, sx - 1]])
    maze[sy - 1][sx - 1] = 0

    # キューから取り出しながら、上下左右を探索
    while queue:
        y, x = queue.popleft()
        for i, j in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
            if maze[y + i][x + j] == ".":
                queue.append([y + i, x + j])
                maze[y + i][x + j] = maze[y][x] + 1
            if y + i == gy - 1 and x + j == gx - 1:
                print(maze[y][x] + 1)
                return


def solve_c_2():
    """復習"""
    r, c = map(int, input().split())
    sy, sx = map(int, input().split())
    gy, gx = map(int, input().split())
    maze = [list(input()) for _ in range(r)]

    queue = deque([[sy - 1, sx - 1]])
    maze[sy - 1][sx - 1] = 0

    while queue:
        y, x = queue.popleft()
        down, up, right, left = [y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]
        for direction in [down, up, right, left]:
            dy, dx = direction
            if maze[dy][dx] == ".":
                queue.append(direction)
                maze[dy][dx] = maze[y][x] + 1
            if dy == gy - 1 and dx == gx - 1:
                print(maze[y][x] + 1)
                return


def solve_d():
    """
    入力されるA Bの区間に
    4 or 9が含まれている数がいくつあるかを出力する

    整数 A,B(1≦A≦B≦10^18)
    """

    def is_4or9(n):
        while n > 0:
            if n % 10 in [4, 9]:
                return True
            n //= 10
        return False

    a, b = map(int, input().split())
    count = 0
    for i in range(a, b + 1):
        if is_4or9(i):
            count += 1
    print(count)


def solve_d3():
    a, b = map(int, input().split())
    count_a = count_4or9_in_range(a - 1) if a > 0 else 0
    count_b = count_4or9_in_range(b)
    count = count_b - count_a
    print(count)


if __name__ == "__main__":
    solve_d()
