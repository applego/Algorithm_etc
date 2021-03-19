# -*- coding: utf-8 -*-
def paperwork(n, m):
    # Happy Coding! ^_^
    if n < 0 or m < 0:
      return 0
    return n * m


from TestCodewar import Test
test = Test()
test.assert_equals(paperwork(5,5), 25, "Failed at Paperwork(5,5)")
