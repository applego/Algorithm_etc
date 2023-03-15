"""
*,/
+,- 逆
"""
import re

def solve(eq):
    reverse_string = eq[::-1]
    num_eq = re.findall('\d{1,}', eq)
    num_rv = re.findall('\d{1,}', reverse_string)
    answer = reverse_string
    mi = 0
    mi2 = 0
    for i in range(len(num_eq)):
        i_eq = len(num_eq) - i - 1
        mi = mi2 + answer[mi2:].find(num_rv[i])
        # answer = answer[mi:].replace(num_rv[i], num_eq[i_eq], 1)
        answer = answer[:mi] + num_eq[i_eq] + answer[mi + len(num_eq[i_eq]):]
        mi2 = mi + len(num_eq[i_eq])
    return answer

print(solve("110-q/73-55+37"))

# '40+94/19+82+j-74*81/s/22+h+74*17*47' should equal
# '40+94/19+82+j-74*81/s/22+h+47*17*74'

# 'p-w*23*95*e/29+h+t+v*10-58/13*77/53+94/75-85-k/21/69' should equal
# 'p-w*23*95*e/29+h+t+v*10-85/13*77/53+94/75-58-k/21/69'

# '110-q/73-55+37' should equal
# '110-q/37-55+73*e*t-r+s-r*q*54*16'


def solve2(eq):
    return ''.join(reversed(re.split(r'(\W+)', eq)))

def solve3(eq):
    #
    # implemantation takes advantage of abscence of spaces
    #
    leq = (eq.replace('*', ' * ')
             .replace('/', ' / ')
             .replace('+', ' + ')
             .replace('-', ' - ')
             .split(' '))

    out = ''.join(leq[::-1])

    return out


print(solve2("110-q/73-55+37"))
print(solve3("110-q/73-55+37"))