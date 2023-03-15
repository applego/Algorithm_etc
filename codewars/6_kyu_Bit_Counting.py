
def countBits(n):
    str_n = str(bin(n))
    return str_n.count('1')


"""
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
"""
import unittest

class TestStringMethods(unittest.TestCase):

    def test(self):
        self.assertEqual(countBits(0), 0)
        self.assertEqual(countBits(4),1)
        self.assertEqual(countBits(7),3)
        self.assertEqual(countBits(9), 2)
        self.assertEqual(countBits(10),2)


if __name__ == '__main__':
    unittest.main()