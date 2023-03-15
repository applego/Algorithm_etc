
def open_or_senior(data):
    return ['Senior' if d[0]>=55 and d[1]>7 else 'Open' for d in data]

"""
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
"""
import unittest

class TestStringMethods(unittest.TestCase):

    def test(self):
        self.assertEqual('foo'.upper(), 'FOO')
        self.assertEqual(open_or_senior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]),["Open", "Open", "Senior", "Open", "Open", "Senior"])
        self.assertEqual(open_or_senior([(45, 12),(55,21),(19, -2),(104, 20)]),['Open', 'Senior', 'Open', 'Senior'])
        self.assertEqual(open_or_senior([(16, 23),(73,1),(56, 20),(1, -1)]),['Open', 'Open', 'Senior', 'Open'])

    def limit(self):
        self.assertEqual(open_or_senior([(54, 10),(55,10),(56, 10)]),['Open', 'Senior', 'Senior'])
        self.assertEqual(open_or_senior([(60, 6),(60,7),(60, 8)]),['Open', 'Open', 'Senior'])

if __name__ == '__main__':
    unittest.main()