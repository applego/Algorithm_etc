
def spin_words(sentence):
    words = [w[::-1] if len(w) >= 5 else w for w in sentence.split()]
    # print(words)
    # Your code goes here
    return ' '.join(words)

"""
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


"""
import unittest

class TestStringMethods(unittest.TestCase):

    def test(self):
        self.assertEqual('foo'.upper(), 'FOO')
        self.assertEqual(spin_words("Hey fellow warriors"),"Hey wollef sroirraw")
        self.assertEqual(spin_words("This is a test"),"This is a test")
        self.assertEqual(spin_words("This is another test"),"This is rehtona test")

if __name__ == '__main__':
    spin_words("Hey fellow warriors")
    unittest.main()