def is_bom(cells: list, n, c, r: int) -> bool:
  if r >= 0 and c >= 0 and r < n and c < n:
    if cells[r][c] == "B":
      return True
  return False

def solution(N, R, C):
  cells = [["#" for c in range(N)] for r in range(N)]
  for r_b, c_b in zip(R, C):
    cells[r_b][c_b] = "B"

  for r in range(N):
    for c in range(N):

      if cells[r][c] == "B":
        continue

      cnt_bom = 0

      for y in range(-1, 2):
        for x in range(-1, 2):
          if y != 0 or x != 0:
            cnt_bom += 1 if is_bom(cells, N, c + x, r + y) else 0
      cells[r][c] = str(cnt_bom)

  answer = "\n".join(["".join(row) for row in cells])
  return answer

from TestCodewar import Test
test = Test()
n = 3
r = [2, 1, 0, 2]
c = [0, 2, 1, 2]
expected = '1B2\n24B\nB3B'
test.assert_equals(solution(n, r, c), expected)

n = 5
r = [2, 3, 2, 3, 1, 1, 3, 1]
c = [3, 3, 1, 1, 1, 2, 2, 3]
expected ="""12321
2BBB2
3B8B3
2BBB2
12321"""
test.assert_equals(solution(n, r, c), expected)


# test.assert_equals(expanded_form(42), '40 + 2');
# test.assert_equals(expanded_form(70304), '70000 + 300 + 4');
