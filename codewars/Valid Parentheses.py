"""
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

"""

def valid_parentheses(string):
    return False


print(valid_parentheses("  ("))#False)
print(valid_parentheses(")test"))#False)
print(valid_parentheses(""))#True)
print(valid_parentheses("hi())("))#False)
print(valid_parentheses("hi(hi)()") )#True
