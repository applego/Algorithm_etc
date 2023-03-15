
def sum_array(a):
    return sum(a)
    # sum:number = 0
    # for i in a:
    #     sum += i
    # else:
    #     return sum



def sum_array_binary(a):
    # return sum(a)
    len_a = len(a)
    if len_a == 0:
        return 0
    i_right = len_a // 2
    i_left = i_right - 1
    sum :number = 0
    sum += a[i_left]
    sum += a[i_right]
    while True:
        if i_left > 0:
            i_left -= 1
            sum += a[i_left]
        if i_right < len_a - 1:
            i_right += 1
            sum += a[i_right]
        if i_left <= 0 and i_right >= len_a - 1:
            break
    return sum

import time
from TestCodewar import Test
test = Test()
test.assert_equals(sum_array([]), 0)

test.assert_equals(sum_array([1, 2, 3]), 6)
test.assert_equals(sum_array([1.1, 2.2, 3.3]), 6.6)
test.assert_equals(sum_array([4, 5, 6]), 15)

test.assert_equals(sum_array_binary(range(5)), 10)
test.assert_equals(sum_array_binary(range(6)), 15)

start = time.time()
test.assert_equals(sum_array(range(101000000)), 5100499949500000)
elapsed_time = time.time() - start
print("elapsed_time:{0}".format(elapsed_time) + "[sec]")

start = time.time()
test.assert_equals(sum_array_binary(range(101000000)), 5100499949500000)
elapsed_time = time.time() - start
print("elapsed_time:{0}".format(elapsed_time) + "[sec]")

"""
Correct Answer
Correct Answer
Correct Answer
Correct Answer
Correct Answer
elapsed_time:6.660479307174683[sec]
Correct Answer
elapsed_time:2.650846004486084[sec]
"""
