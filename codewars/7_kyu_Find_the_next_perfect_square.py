import math

def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    sqrt = math.sqrt(sq)
    if float.is_integer(sqrt):
        return (sqrt+1) ** 2
    return -1

from TestCodewar import Test
test = Test()
test.assert_equals(find_next_square(121), 144, "Wrong output for 121")
test.assert_equals(find_next_square(625), 676, "Wrong output for 625")
test.assert_equals(find_next_square(319225), 320356, "Wrong output for 319225")
test.assert_equals(find_next_square(15241383936), 15241630849, "Wrong output for 15241383936")

test.assert_equals(find_next_square(155), -1, "Wrong output for 155")
test.assert_equals(find_next_square(342786627), -1, "Wrong output for 342786627")
