"""
1の位
　変換
10の位
　
"""
# import itertools
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
    ret = []
    ret.append(parseOne(h))  # dic_num_word[h]
    if len(ret[0]) > 0:
        ret.append('hundred')
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
        if int(n) in dic_num_word.keys():
            return dic_num_word[int(n)]
        key = int(n[0]) * 10
        ret += parseOne(key)  # dic_num_word[key]
        one = parseOne(int(n[1]))
        if len(one) == 0:
            return ret
        return ret + '-' + one

def parseOverThousandGroup(group):
    if group == '100':
        return 'one thousand'
    ret = parseUnderThousandGroup(group)
    if isinstance(ret, str):
        return ret + ' thousand'
    else:
        ret.append('thousand')
        return ret

def parseUnderThousandGroup(group):
    # ret = []
    len_group = len(group)
    if len_group > 2:
        # ret.append(getOverHundred(group[0]))
        ret = getOverHundred(group[0])
        if len(ret[0]) > 0:
            ret.append(getUnderHunderd(group[1:]))
        else:
            ret = getUnderHunderd(group[1:])
        # ret.append(getUnderHunderd(group[1:]))
    else:
        ret = getUnderHunderd(group)
    return ret

def number2words(n):
    """ works for numbers between 0 and 999999 """
    print(n)
    #100
    if n == 100:
        return 'one hundred'
    # 辞書にあれば
    if n in dic_num_word.keys():
        return dic_num_word[n]

    str_n = str(n)
    str_r = ''.join(list(reversed(str_n)))
    splited_3_number = [str_r[i:i + 3][::-1] for i in range(0, len(str_n), 3)][::-1]

    arr_ans = []
    if len(splited_3_number) > 1:
        tmp1 = parseOverThousandGroup(splited_3_number[0])
        if isinstance(tmp1, str):
            arr_ans.append(tmp1)
        else:
            arr_ans = tmp1
        tmp2 = parseUnderThousandGroup(splited_3_number[1])
        if isinstance(tmp2, str):
            arr_ans.append(tmp2)
        else:
            for i in tmp2:
                arr_ans.append(i)
        # arr_ans.append(parseUnderThousandGroup(splited_3_number[1]))
    else:
        arr_ans = parseUnderThousandGroup(splited_3_number[0])
    # return ' '.join([group for group in list(itertools.chain.from_iterable(arr_ans)) if len(group) > 0])

    if isinstance(arr_ans, str):
        return arr_ans
    else:
        return ' '.join([group for group in arr_ans if len(group) > 0])


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
# test.assert_equals(number2words(793), "seven hundred ninety-three")

# test.assert_equals(number2words(800), "eight hundred")
# test.assert_equals(number2words(650), "six hundred fifty")
# test.assert_equals(number2words(1000), "one thousand")
# test.assert_equals(number2words(1003), "one thousand three")
# test.assert_equals(number2words(3052), 'three thousand fifty-two')
# test.assert_equals(number2words(7300), 'seven thousand three hundred')
# test.assert_equals(number2words(7217), 'seven thousand two hundred seventeen')
# test.assert_equals(number2words(888887), 'seven thousand two hundred seventeen') #答え違う

# 'seven thousand two hundred ten-seven' should equal
# 'seven thousand two hundred seventeen'

# 'three hundredone' should equal
# 'three hundred one'

# 'three hundred five thousand two' should equal
# 'three thousand fifty-two'

#長すぎやし　いきあたりばったりすぎるな
#BP

words = "zero one two three four five six seven eight nine" + \
" ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty" + \
" thirty forty fifty sixty seventy eighty ninety"
words = words.split(' ')

def number2words_(n):
    if n < 20:
        print(words[n])
        return words[n]
    elif n < 100:
        print(words[18 + n // 10] + ('' if n % 10 == 0 else '-' + words[n % 10]))
        return words[18 + n // 10] + ('' if n % 10 == 0 else '-' + words[n % 10])
    elif n < 1000:
        print(number2words_(n // 100) + " hundred" + (' ' + number2words_(n % 100) if n % 100 > 0 else ''))
        return number2words_(n // 100) + " hundred" + (' ' + number2words_(n % 100) if n % 100 > 0 else '')
    elif n < 1000000:
        print(number2words_(n // 1000) + " thousand" + (' ' + number2words_(n % 1000) if n % 1000 > 0 else ''))
        return number2words_(n // 1000) + " thousand" + (' ' + number2words_(n % 1000) if n % 1000 > 0 else '')

test.assert_equals(number2words_(1000), "one thousand")
test.assert_equals(number2words_(1003), "one thousand three")
test.assert_equals(number2words_(3052), 'three thousand fifty-two')
test.assert_equals(number2words_(7300), 'seven thousand three hundred')
test.assert_equals(number2words_(7217), 'seven thousand two hundred seventeen')

#! 再起関数　場合分け
"""
20まで
100まで
1000まで
それ以上
"""