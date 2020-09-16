"""
1の位
　変換
10の位
　
"""
def parse(string):
    if string == 'zero':
        return 0
    elif string == 'one':
        return 1
    elif string == 'two':
        return 2
    elif string == 'three':
        return 3
    elif string == 'four':
        return 4
    elif string == 'five':
        return 5
    elif string == 'six':
        return 6
    elif string == 'seven':
        return 7
    elif string == 'eight':
        return 8
    elif string == 'nine':
        return 9
    elif string == 'ten':
        return 10
    elif string == 'eleven':
        return 11
    elif string == 'twelve':
        return 12
    elif string == 'thirteen':
        return 13
    elif string == 'fourteen':
        return 14
    elif string == 'fifteen':
        return 15
    elif string == 'sixteen':
        return 16
    elif string == 'seventeen':
        return 17
    elif string == 'eighteen':
        return 18
    elif string == 'nineteen':
        return 19
    elif string == 'twenty':
        return 20
    elif string == 'thirty':
        return 30
    elif string == 'forty':
        return 40
    elif string == 'fifty':
        return 50
    elif string == 'sixty':
        return 60
    elif string == 'seventy':
        return 70
    elif string == 'eighty':
        return 80
    elif string == 'ninety':
        return 90

def index_in_array(array, string):
    return [i for i,_x in enumerate(array) if _x == string]

def parse_thousand(array):
    if 'hundred' in array:
        return parse_hundred(array) * 1000
    else:
        return array[0] * 1000

def parse_hundred(array):
    if len(array) > 2:
        return array[0] * 100 + array[2]
    else:
        return array[0] * 100

def parse_int(string):
    print(string)
    if 'million' in string:
        return 1000000
    numbers = []
    for i, s in enumerate(string.split()):
        if s == 'and':
            continue
        elif s == 'hundred':
            numbers.append('hundred')
        elif s == 'thousand':
            numbers.append('thousand')
        else:
            if '-' in s:
                s2 = s.split('-')
                parsed = parse(s2[0]) + parse(s2[1])
            else:
                parsed = parse(s)
            numbers.append(parsed)

    idxs_thousand = index_in_array(numbers, 'thousand')
    idxs_hundred = index_in_array(numbers, 'hundred')
    if len(idxs_thousand) > 0:
        idx = idxs_thousand[0]
        if any([i > idx for i in idxs_hundred]):
            # thousand以降にhundredがある時
            return parse_thousand(numbers[:idx]) + parse_hundred(numbers[idx + 1:])
        else:
            if isinstance(numbers[-1], int):
                return parse_thousand(numbers[:idx])+numbers[-1]
            else:
                return parse_thousand(numbers[:idx])
    elif len(idxs_hundred) > 0:
        return parse_hundred(numbers)
    else:
        return numbers[0]

# def parse_int_unused(string):
#     print(string)
#     answer = 0
#     numbers = []
#     hundred = []
#     thousand = []
#     splited_string = string.split()
#     for i, s in enumerate(string.split()):
#         if s == 'and':
#             numbers.append('and')
#         elif s == 'hundred':
#             numbers.insert(len(numbers)-1,'hundred')
#         elif s == 'thousand':
#             numbers.insert(len(numbers)-3,'thousand')
#         else:
#             if '-' in s:
#                 s2 = s.split('-')
#                 parsed = parse(s2[0]) + parse(s2[1])
#             else:
#                 parsed = parse(s)
#             numbers.append(parsed)

#     # answer = numbers[0]
#     tmp_num = 0
#     while len(numbers) > 0:
#         num = numbers.pop(0)
#         if num == 'hundred':
#             answer += numbers.pop(0) * 100
#         elif num == 'thousand':
#             # answer += numbers[i - 1] * 1000
#             answer += numbers.pop(0) * 1000
#         # elif string == 'and':
#         #     answer += numbers[i - 1] + numbers[i + 1]
#         else:
#             print('else')
#             # if i == len(numbers)-1:
#             answer += num

#     return answer

from TestCodewar import Test
Test = Test()
# Test.assert_equals(parse_int('one'), 1)
# Test.assert_equals(parse_int('twenty'), 20)
# Test.assert_equals(parse_int('two hundred forty-six'), 246)
# Test.assert_equals(parse_int('seven hundred eighty-three thousand nine hundred and nineteen'), 783919)
# Test.assert_equals(parse_int('zero'), 0)
# Test.assert_equals(parse_int('one hundred'), 100)
# Test.assert_equals(parse_int('three thousand seven hundred eighty-eight'),3788)
# Test.assert_equals(parse_int('two thousand'),2000)
# Test.assert_equals(parse_int('ninety-nine thousand nine hundred and ninety-nine'),99999)
Test.assert_equals(parse_int('two hundred thousand three'), 200003)
Test.assert_equals(parse_int('two hundred thousand and three'), 200003)
Test.assert_equals(parse_int('one million'), 1000000)
Test.assert_equals(parse_int('seven hundred thousand'), 700000)

# solutions

words = {w: n for n, w in enumerate('zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split())}
words.update({w: 10 * n for n, w in enumerate('twenty thirty forty fifty sixty seventy eighty ninety hundred'.split(), 2)})
thousands = {w: 1000 ** n for n, w in enumerate('thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion'.split(), 1)}
def parse_int2(strng):
    num = group = 0
    for w in strng.replace(' and ', ' ').replace('-', ' ').split():
        if w == 'hundred': group *= words[w]
        elif w in words: group += words[w]
        else:
            num += group * thousands[w]
            group = 0
    return num + group

Test.assert_equals(parse_int2('seven hundred eighty-three thousand nine hundred and nineteen'), 783919)