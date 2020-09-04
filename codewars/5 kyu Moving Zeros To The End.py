from TestCodewar import Test
"""
 move_zeros([False,1,0,1,2,0,1,3,"a"])
 # returns[False,1,1,2,1,3,"a",0,0]
"""
def move_zeros(array):
    #your code here
    return array

Test = Test()
# test.assert_equals(move_zeros([1,2,0,1,0,1,0,3,0,1]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
# test.assert_equals2(move_zeros([1,2,0,1,0,1,0,3,0,1]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
# test.assert_equals2(move_zeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])

Test.describe("Basic tests")
Test.assert_equals([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ],[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])

Test.assert_equals(move_zeros([1,2,0,1,0,1,0,3,0,1]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
Test.assert_equals(move_zeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]),[9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
Test.assert_equals(move_zeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]),["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
Test.assert_equals(move_zeros(["a",0,0,"b",None,"c","d",0,1,False,0,1,0,3,[],0,1,9,0,0,{},0,0,9]),["a","b",None,"c","d",1,False,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0])
Test.assert_equals(move_zeros([0,1,None,2,False,1,0]),[1,None,2,False,1,0,0])
Test.assert_equals(move_zeros(["a","b"]),["a","b"])
Test.assert_equals(move_zeros(["a"]),["a"])
Test.assert_equals(move_zeros([0,0]),[0,0])
Test.assert_equals(move_zeros([0]),[0])
Test.assert_equals(move_zeros([False]),[False])
Test.assert_equals(move_zeros([]),[])