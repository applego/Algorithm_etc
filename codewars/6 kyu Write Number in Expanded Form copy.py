def expanded_form(num: int) -> str:
  str_num = str(num)
  len_str_num = len(str_num)
  answer = ""
  join_str = " + "
  for i,c in enumerate(str_num):
    if c == "0":
      continue
    if len(answer) != 0:
      answer += join_str
    answer += c + "".join(["0" for _ in range(len_str_num - (i + 1))])
  return answer

from TestCodewar import Test
test = Test()
test.assert_equals(expanded_form(12), '10 + 2');
test.assert_equals(expanded_form(42), '40 + 2');
test.assert_equals(expanded_form(70304), '70000 + 300 + 4');



"""
expanded_form(12) # Should return '10 + 2'
expanded_form(42) # Should return '40 + 2'
expanded_form(70304) # Should return '70000 + 300 + 4'
"""

import sys

# lines = sys.stdin.readlines()
# for i, line in enumerate(lines):
#   line = line.strip("\n")
#   print(i+1,"行目:",line)

# input().strip()


def create_keystr(d: int, area: str) -> str:
  arr = area.split('.')[-d:]
  return ".".join(arr)

n = int(input())
d = int(input())

areas = [input() for _ in range(n)]
# print(areas)

counter = {}

for area in areas:
  # print(area)
  # print(create_keystr(d, area))
  key = create_keystr(d, area)
  if key in counter.keys():
    counter[key] += 1
  else:
    counter[key] = 1

sorted_counter = sorted(counter.items(), key=lambda x: x[1], reverse=True)

for key in sorted_counter:
  # print(key," ",sorted_counter[key])
  print(key)
  print(sorted_counter[key])
