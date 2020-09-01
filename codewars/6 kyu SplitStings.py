"""
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
"""

def solution(s):
    len_s = len(s)
    if len_s % 2:
    is_odd = len_s % 2 != 0
    arr_cnt = int((len_s+1)/2 if is_odd else len_s/2)
    arr = []

    for i in range(arr_cnt):
#         print('i:'+str(i))
        if i ==arr_cnt-1 and is_odd:
            arr.append(s[i*2]+'_')
#             print(s[i*2]+'_')
        else:
            arr.append(s[i*2:i*2+2])
#             print(s[i*2:i*2+2])
    return arr

if __name__ == '__main__':
    arg = 'abc'
    print(solution(arg))
    arg = 'abcdef'
    print(solution(arg))

# Solutions
def solution2(s):
    answer = []
    if len(s) % 2:
        s += '_'
    for i in range(0,len(s),2):
        answer.append(s[i:i+2])
    return answer
