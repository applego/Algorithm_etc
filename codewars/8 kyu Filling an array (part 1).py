"""
"""

def arr(n=0):
    return [i for i in range(n)]

from TestCodewar import Test
test = Test()
test.assert_equals(arr(4), [0,1,2,3])
test.assert_equals(arr(0), [])
test.assert_equals(arr(), [])

#BP　*↑もOK
def arr2(n=0):
    return [*range(n)]
