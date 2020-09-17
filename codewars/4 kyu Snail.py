"""

"""
from enum import Enum


class Direction(Enum):
    RIGHT = "→"
    DOWN = "↓"
    LEFT = "←"
    UP = "↑"

def snail(snail_map):
    print(snail_map)

    length_r = len(snail_map)
    if length_r <= 1:
        return snail_map[0]
    length_c = len(snail_map[0])
    if length_c == 0:
        return [[]]
    cnt_nums = length_r * length_c
    # cnt_move = 0
    r = 0
    c = 0
    gone_map = [[0]*length_c for i in range(length_r)]
    answer = []
    direction = Direction.RIGHT
    for i in range(cnt_nums):
        answer.append(snail_map[r][c])
        gone_map[r][c] = 1
        if direction == Direction.RIGHT:
            if c < length_c-1 and not gone_map[r][c+1]:
                c += 1
            else:
                direction = Direction.DOWN
                r += 1
        elif direction == Direction.DOWN:
            if r < length_r-1 and not gone_map[r+1][c]:
                r += 1
            else:
                direction = Direction.LEFT
                c -= 1
        elif direction == Direction.LEFT:
            if c > 0 and not gone_map[r][c-1]:
                c -= 1
            else:
                direction = Direction.UP
                r -= 1
        else:
            if r > 0 and not gone_map[r-1][c]:
                r -= 1
            else:
                direction = Direction.RIGHT
                c += 1
    return answer


from TestCodewar import Test
test = Test()

array = [[]]
expected = [[]]
test.assert_equals(snail(array), expected)


array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
expected = [1,2,3,6,9,8,7,4,5]
test.assert_equals(snail(array), expected)


array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
expected = [1,2,3,4,5,6,7,8,9]
test.assert_equals(snail(array), expected)

#solution

def snail1(array):
    return list(array[0]) + snail(zip(*array[1:])[::-1]) if array else []

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
expected = [1,2,3,4,5,6,7,8,9]
test.assert_equals(snail1(array), expected)

def snail2(array):
    ret = []
    if array and array[0]:
        size = len(array)
        for n in range((size + 1) // 2):
            print('n: ' + str(n))
            for x in range(n, size - n):
                ret.append(array[n][x])
            for y in range(1 + n, size - n):
                ret.append(array[y][-1 - n])
            for x in range(2 + n, size - n + 1):
                ret.append(array[-1 - n][-x])
            for y in range(2 + n, size - n):
                ret.append(array[-y][n])
    return ret

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
expected = [1,2,3,4,5,6,7,8,9]
test.assert_equals(snail2(array), expected)
