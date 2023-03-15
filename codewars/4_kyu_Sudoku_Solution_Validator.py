"""
sudoku
"""
def valid_solution(board):
    print(board)
    valid_sum = len(board) * (1 + 9) // 2
    dic_arr_col = {i: [] for i in range(len(board))}
    dic_arr_subgrid = {(i, j): [] for j in range(3) for i in range(3)}
    for idx_r, row in enumerate(board):
        arr_row = []
        idx_r_sub = 0 if idx_r < 3 else 1 if idx_r < 6 else 2
        for idx_c, cell in enumerate(row):
            if cell <= 0 or 9 < cell:
                return False

            if cell in dic_arr_col[idx_c]:
                return False
            dic_arr_col[idx_c].append(cell)

            idx_c_sub = 0 if idx_c < 3 else 1 if idx_c < 6 else 2
            if cell in dic_arr_subgrid[(idx_r_sub,idx_c_sub)]:
                return False
            dic_arr_subgrid[idx_r_sub, idx_c_sub].append(cell)
            print(idx_r_sub, idx_c_sub) #todo

            if cell in arr_row:
                return False
            arr_row.append(cell)
        if sum(arr_row) != valid_sum:
            return False
    if not all([sum(arr_col) == valid_sum for arr_col in dic_arr_col.values()]):
        return False
    if not all([sum(arr_sub) == valid_sum for arr_sub in dic_arr_subgrid.values()]):
        return False
    return True



from TestCodewar import Test
test = Test()
# test.assert_equals(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
#                                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
#                                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
#                                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
#                                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
#                                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
#                                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
#                                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
#                                    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), True)

# test.assert_equals(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
#                                    [6, 7, 2, 1, 9, 0, 3, 4, 9],
#                                    [1, 0, 0, 3, 4, 2, 5, 6, 0],
#                                    [8, 5, 9, 7, 6, 1, 0, 2, 0],
#                                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
#                                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
#                                    [9, 0, 1, 5, 3, 7, 2, 1, 4],
#                                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
#                                    [3, 0, 0, 4, 8, 1, 1, 7, 9]]), False)

# incorrect answer
test.assert_equals(valid_solution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                                   [2, 3, 4, 5, 6, 7, 8, 9, 1],
                                   [3, 4, 5, 6, 7, 8, 9, 1, 2],
                                   [4, 5, 6, 7, 8, 9, 1, 2, 3],
                                   [5, 6, 7, 8, 9, 1, 2, 3, 4],
                                   [6, 7, 8, 9, 1, 2, 3, 4, 5],
                                   [7, 8, 9, 1, 2, 3, 4, 5, 6],
                                   [8, 9, 1, 2, 3, 4, 5, 6, 7],
                                   [9, 1, 2, 3, 4, 5, 6, 7, 8]]), False)

#solution1
def validSolution(board):
    boxes = validate_boxes(board)
    cols = validate_cols(board)
    rows = validate_rows(board)
    return boxes and cols and rows

def validate_boxes(board):
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            nums = board[i][j:j+3] + board[i+1][j:j+3] + board[i+2][j:j+3]
            if not check_one_to_nine(nums):
                return False
    return True

def validate_cols(board):
    transposed = zip(*board)
    for row in transposed:
        if not check_one_to_nine(row):
            return False
    return True

def validate_rows(board):
    for row in board:
        if not check_one_to_nine(row):
            return False
    return True


def check_one_to_nine(lst):
    check = range(1,10)
    return sorted(lst) == check

test.assert_equals(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                                   [2, 3, 4, 5, 6, 7, 8, 9, 1],
                                   [3, 4, 5, 6, 7, 8, 9, 1, 2],
                                   [4, 5, 6, 7, 8, 9, 1, 2, 3],
                                   [5, 6, 7, 8, 9, 1, 2, 3, 4],
                                   [6, 7, 8, 9, 1, 2, 3, 4, 5],
                                   [7, 8, 9, 1, 2, 3, 4, 5, 6],
                                   [8, 9, 1, 2, 3, 4, 5, 6, 7],
                                   [9, 1, 2, 3, 4, 5, 6, 7, 8]]), False)

#sotuion2
correct = [1, 2, 3, 4, 5, 6, 7, 8, 9]

def validSolution2(board):
    # check rows
    for row in board:
        if sorted(row) != correct:
            return False

    # check columns
    for column in zip(*board):
        if sorted(column) != correct:
            return False

    # check regions
    for i in range(3):
        for j in range(3):
            region = []
            for line in board[i*3:(i+1)*3]:
                region += line[j*3:(j+1)*3]

            if sorted(region) != correct:
                return False

    # if everything correct
    return True

test.assert_equals(validSolution2([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                                   [2, 3, 4, 5, 6, 7, 8, 9, 1],
                                   [3, 4, 5, 6, 7, 8, 9, 1, 2],
                                   [4, 5, 6, 7, 8, 9, 1, 2, 3],
                                   [5, 6, 7, 8, 9, 1, 2, 3, 4],
                                   [6, 7, 8, 9, 1, 2, 3, 4, 5],
                                   [7, 8, 9, 1, 2, 3, 4, 5, 6],
                                   [8, 9, 1, 2, 3, 4, 5, 6, 7],
                                   [9, 1, 2, 3, 4, 5, 6, 7, 8]]), False)