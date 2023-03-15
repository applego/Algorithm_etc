"""

"""
import re

def solution(string, markers):
    print(string)
    print(markers)

    for m in markers:
        pattern = '\{}.*'.format(m)
        results = re.findall(pattern, string)
        string = re.sub(pattern, '', string)
    # print(string.rstrip(' '))
    string = re.sub('(\s)+(?=\n)', '', string)
    string = string.rstrip(' ')
    print(string)
    return string

from TestCodewar import Test
Test = Test()
# -*- coding: utf-8 -*-
Test.assert_equals(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]), "apples, pears\ngrapes\nbananas")
Test.assert_equals(solution("a #b\nc\nd $e f g", ["#", "$"]), "a\nc\nd")

#解けず

#BP
def solution2(string, markers):
    parts = string.split('\n')
    for s in markers:
        parts = [v.split(s)[0].rstrip() for v in parts]
    return '\n'.join(parts)

Test.assert_equals(solution2("a #b\nc\nd $e f g", ["#", "$"]), "a\nc\nd")
