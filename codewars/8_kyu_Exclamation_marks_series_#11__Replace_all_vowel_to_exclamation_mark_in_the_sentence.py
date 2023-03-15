"""
# aeiouAEIOUを!に
"""
import re

def replace_exclamation(s):
    return re.sub('[aeiouAEIOU]','!',s)

from TestCodewar import Test
test = Test()
test.assert_equals(replace_exclamation("Hi!") , "H!!")
test.assert_equals(replace_exclamation("!Hi! Hi!") , "!H!! H!!")
test.assert_equals(replace_exclamation("aeiou") , "!!!!!")
test.assert_equals(replace_exclamation("ABCDE") , "!BCD!")


# bp
def replace_exclamation_bp(s):
    return ''.join('!' if c in 'aeiouAEIOU' else c for c in s)
