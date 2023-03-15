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
