"""
1の位
　変換
10の位
　
"""
dic_num_word = {n: w for n, w in enumerate('zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split())}
dic_num_word.update({n * 10: w for n, w in enumerate('twenty thirty forty fifty sixty seventy eighty ninety hundred'.split(), 2)})

def parseOne(n):
    if type(n) == str:
        n = int(n)
    if n == 0:
        return ''
    else:
        return dic_num_word[n]

def getOverHundred(h):
    ret = ''
    ret += parseOne(h)  # dic_num_word[h]
    if len(ret) > 0:
        ret += ' hundred'
    return ret

def getUnderHunderd(n):
    ret = ''
    if len(n) < 2:
        return parseOne(n)# dic_num_word[n]
    else:
        if n == '00':
            return ''
        if n[0] == '0':
            return parseOne(int(n[1]))
        key = int(n[0]) * 10
        ret += parseOne(key)  # dic_num_word[key]
        one = parseOne(int(n[1]))
        if len(one) == 0:
            return ret
        return ret + '-' + one

def parseOverThousandGroup(group):
    if group == '100':
        return 'one thousand'
    str_num = parseUnderThousandGroup(group)
    str_num += ' thousand'
    return str_num

def parseUnderThousandGroup(group):
    str_num = ''
    len_group = len(group)
    if len_group > 2:
        str_num += getOverHundred(group[0])
        one = getUnderHunderd(group[1:])
        if len(one) > 0:
            str_num += one
    else:
        str_num += getUnderHunderd(group)
    return str_num


def number2words(n):
    """ works for numbers between 0 and 999999 """
    print(n)
    if n == 100:
        return 'one hundred'
    if n in dic_num_word.keys():
        return dic_num_word[n]

    str_n = str(n)
    str_r = ''.join(list(reversed(str_n)))
    splited_3_number = [str_r[i:i + 3][::-1] for i in range(0, len(str_n), 3)][::-1]

    ans = ''
    if len(splited_3_number) > 1:
        ans += parseOverThousandGroup(splited_3_number[0])
        tmp = parseUnderThousandGroup(splited_3_number[1])
        if len(tmp) > 0:
            ans += ' ' + tmp
    else:
        ans += parseUnderThousandGroup(splited_3_number[0])
    return ans.strip()

from TestCodewar import Test
test = Test()
# test.assert_equals(number2words(0), "zero")
# test.assert_equals(number2words(1), "one")
# test.assert_equals(number2words(8), "eight")
# test.assert_equals(number2words(10), "ten")
# test.assert_equals(number2words(19), "nineteen")
# test.assert_equals(number2words(20), "twenty")
# test.assert_equals(number2words(22), "twenty-two")
# test.assert_equals(number2words(54), "fifty-four")
# test.assert_equals(number2words(80), "eighty")
# test.assert_equals(number2words(98), "ninety-eight")
# test.assert_equals(number2words(100), "one hundred")
# test.assert_equals(number2words(301), "three hundred one")
test.assert_equals(number2words(793), "seven hundred ninety-three")
# 'three hundredone' should equal
# 'three hundred one'
# test.assert_equals(number2words(800), "eight hundred")
# test.assert_equals(number2words(650), "six hundred fifty")
# test.assert_equals(number2words(1000), "one thousand")
# test.assert_equals(number2words(1003), "one thousand three")

# 'three hundred five thousand two' should equal
# 'three thousand fifty-two'

test.assert_equals(number2words(3052), 'three thousand fifty-two')