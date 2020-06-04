#提出用
# -*- coding: utf-8 -*-
import sys
def func2(x):
    if not x.isalpha():
        return x
    else:
        if x.isupper():
            return x.lower()
        else:
            return x.upper()
print("".join(map(lambda x:func2(x),sys.stdin.readline().rstrip())))

input = "fAIR, LATER, OCCASIONALLY CLOUDY.";
#リスト内
print("".join([func2(x) for x in sys.stdin.readline().rstrip()]))

test = list(input)
#answer = map(lambda x:)

print(','.join(map(lambda x: '"{}"'.format(x), list(input))))
# => "日","月","火","水","木","金","土"

print(','.join(map(lambda x: '"{}"'.format(x), input)))

#見やすく書いたコード
func = (lambda x:"偶数です" if x % 2 == 0 else "奇数です")
#list_2 = list(map(func,list_1))



answer = "".join(map(lambda x:func2(x),input))

answer = map(lambda x:'"{}"'.format(x),sys.stdin.readline().rstrip())

print(answer)