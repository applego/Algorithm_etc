"""
始まりの数
終わりの数
配列（出力単位（カンマごと）
解答文字列

前の数+1かどうか
    True
        配列に追加
    False
    　　配列から文字列生成
        解答文字列に追加



"""
str_comma = ','
str_bar = '-'

def get_one_comma_str(args):
    len_args = len(args)
    if len_args == 0:
        return ''
    elif len_args == 1:
        return str(args[0]) + str_comma
    elif len_args == 2:
        return str(args[0]) + str_comma + str(args[1]) + str_comma
    else:
        return str(args[0]) + str_bar + str(args[len_args - 1]) + str_comma


def solution(args):
    answer = ''
    arr_one_comma = []
    len_args = len(args)
    for index,i in enumerate(args):
        # print(str(index) + ' ' + str(i))
        if index == 0:
            arr_one_comma.append(i)
            continue
        if args[index - 1] + 1 == i:
            arr_one_comma.append(i)
            if index == len_args-1:
                answer += get_one_comma_str(arr_one_comma)
        else:
            answer += get_one_comma_str(arr_one_comma)
            arr_one_comma = [i]
            if index == len_args - 1:
                answer += get_one_comma_str(arr_one_comma)
    else:
        if answer[-1] == ',':
            answer = answer[:-1]
        return answer


print(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))  #, '-6,-3-1,3-5,7-11,14,15,17-20')
print(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]))  #, '-3--1,2,10,15,16,18-20')


# solutions
def solution_(args):
    out = []
    beg = end = args[0]

    for n in args[1:] + [""]:
        if n != end + 1:
            if end == beg:
                out.append( str(beg) )
            elif end == beg + 1:
                out.extend( [str(beg), str(end)] )
            else:
                out.append( str(beg) + "-" + str(end) )
            beg = n
        end = n

    return ",".join(out)