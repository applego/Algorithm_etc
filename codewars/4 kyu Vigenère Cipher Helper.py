"""
abc =
"abcdefghijklmnopqrstuvwxyz"
key =
"passwordpasswordpasswordpa"ssword"
"""

class VigenereCipher_my(object):
    def __init__(self, key, alphabet):
        self.alphabet_list = [chr(ord('a') + i) for i in range(26)]
        self.vigenere_table2 = {(alphabet_list[row], alphabet_list[col]): alphabet_list[(row + col) % 26] for col in range(26) for row in range(26)}

        # print([chr(ord('a') + i) for i in range(26)])
        # vigenere_table = {}
        # for row in range(26):
        #     for col in range(26):
        #         taiou = (alphabet_list[row],alphabet_list[col])
        #         col_div = (row + col) % 26
        #         vigenere_table[taiou] = alphabet_list[col_div]
        #         print("{} {}".format(taiou, alphabet_list[col_div]))


    def encode(self, text):
        if not text.islower():
            return text

        pass

    def decode(self, text):
        if not text.islower():
            return text

        pass

# 暗号の仕組みが理解できん（Wikipediaはだいたいわかったけど...)
#BP
from itertools import cycle
class VigenereCipher(object):
    def __init__(self, key, alphabet):
        self.key = key#.decode('utf-8')
        self.alphabet = alphabet#.decode('utf-8')
        # self.maps = {c: (self.alphabet[i:] + self.alphabet[:i]) for i, c in enumerate(self.alphabet) if c in self.key}
        self.maps = {}
        for i, c in enumerate(self.alphabet):
            if c in self.key:
                self.maps[c] = self.alphabet[i:] + self.alphabet[:i]
                # print("{} {}".format(i, c))
                # print(self.alphabet[i:])
                # print(self.alphabet[:i])
        print(self.maps)

    def cipher2(self, f, s):
        return ''.join([f(self.maps[self.key[i % len(self.key)]], c) for i, c in enumerate(s)])

        # a = []
        # for i, c in enumerate(s):
        #     a.app

    def cipher(self, mode, str):
        return ''.join(self.alphabet[(self.alphabet.index(m) +
                mode * self.alphabet.index(k)) % len(self.alphabet)]
                if m in self.alphabet else m for m, k in zip(str,cycle(self.key)))

    def encode(self, str):
        bp1 = self.cipher(1, str)
        bp2 = self.cipher2(lambda l, c: l[self.alphabet.index(c)] if c in self.alphabet else c, str)
        return bp1

    def decode(self, str):
        bp1 = self.cipher(-1, str)
        bp2 = self.cipher2(lambda l, c: self.alphabet[l.index(c)] if c in self.alphabet else c, str)
        return bp1


#Test Code
from TestCodewar import Test
test = Test()

abc = "abcdefghijklmnopqrstuvwxyz"
key = "password"
c = VigenereCipher(key, abc)

test.assert_equals(c.encode('codewars'), 'rovwsoiv')
test.assert_equals(c.decode('rovwsoiv'), 'codewars')

test.assert_equals(c.encode('waffles'), 'laxxhsj')
test.assert_equals(c.decode('laxxhsj'), 'waffles')

test.assert_equals(c.encode('CODEWARS'), 'CODEWARS')
test.assert_equals(c.decode('CODEWARS'), 'CODEWARS')