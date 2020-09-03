"""


"""


def anagrams(word, words):
    sorted_word = ''.join(sorted(word))
    return [jword for jword in words if sorted_word == ''.join(sorted(jword))]

    # anagrams = []
    # sorted_word = ''.join(sorted(word))
    # print(sorted_word)
    # for jword in words:
    #     if sorted_word == ''.join(sorted(jword)):
    #         anagrams.append(jword)
    # else:
    #     return anagrams


print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))#, ['aabb', 'bbaa'])
print(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))#, ['carer', 'racer'])