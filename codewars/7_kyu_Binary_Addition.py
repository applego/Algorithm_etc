def add_binary(a,b):
    return bin(a+b)[2:]

from TestCodewar import Test
test = Test()
test.assert_equals(add_binary(1,1),"10")
test.assert_equals(add_binary(0,1),"1")
test.assert_equals(add_binary(1,0),"1")
test.assert_equals(add_binary(2,2),"100")
test.assert_equals(add_binary(51,12),"111111")
