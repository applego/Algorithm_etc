"""
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true


1)空文字True
2)　)が(より左にある　False
3)　（と）の数が合わない
"""

def valid_parentheses(string):
    if len(string) == 0:
        return True
    checknum = 0
    for s in string:
        if s == '(':
            checknum += 1
        elif s == ')':
            checknum -= 1
        if checknum < 0:
            return False
    else:
        return True if checknum == 0 else False


print(valid_parentheses(""))#True)
print(valid_parentheses("  ("))#False)
print(valid_parentheses(")test"))#False)
print(valid_parentheses("hi())("))#False)
print(valid_parentheses("hi(hi)()"))  #True

#solutionとほぼ同じ　Yeah
