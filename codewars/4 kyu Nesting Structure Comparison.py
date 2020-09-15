"""

"""
# import itertools

def same_structure_as(original, other):
    is_same = True
    print(original)
    print(other)
    if type(original) is list and type(other) is not list:
        return False
    if type(original) is not list and type(other) is list:
        return False
    if type(original) is list and type(other) is list:
        len_org = len(original)
        len_oth = len(other)
        if len_org != len_oth:
            return False
        for org, oth in zip(original, other):
            if type(org) is list and type(oth) is not list:
                is_same = False
                return False
            if type(org) is not list and type(oth) is list:
                is_same = False
                return False
            if type(org) is list and type(oth) is list:
                if len(org) != len(oth):
                    is_same = False
                    return False
                for org_c, oth_c in zip(org, oth):
                    if type(org_c) is list and type(oth_c) is not list:
                        is_same = False
                        return False
                    if type(org_c) is not list and type(oth_c) is list:
                        is_same = False
                        return False
                    if type(org_c) is list and type(oth_c) is list:
                        if len(org_c) != len(oth_c):
                            is_same = False
                            return False
    return True

from TestCodewar import Test
Test = Test()
# Test.assert_equals(same_structure_as([1,[1,1]],[2,[2,2]]), True, "[1,[1,1]] same as [2,[2,2]]")
# Test.assert_equals(same_structure_as([1, [1, 1]], [[2, 2], 2]), False, "[1,[1,1]] not same as [[2,2],2]")
# Test.assert_equals(same_structure_as([[[], []]], [[1, 1]]), False, "[[[],[]]] not same as [[1,1]]: True should equal False")
# Test.assert_equals(same_structure_as([],1), False, "[[[],[]]] not same as [[1,1]]: True should equal False")
# Test.assert_equals(same_structure_as([1, '[', ']'], ['[', ']', 1]), False, "[[[],[]]] not same as [[1,1]]: True should equal False")
# Test.assert_equals(same_structure_as([1, '[', ']'], ['[', ']', 1]), True, "[1,'[',']'] same as ['[',']',1]: False should equal True")
# Test.assert_equals(same_structure_as([1,[1,1]], [[2, 2], 2]), False, "[1,'[',']'] same as ['[',']',1]: False should equal True")
Test.assert_equals(same_structure_as([[[], []]], [[[], []]]), False, "[1,'[',']'] same as ['[',']',1]: False should equal True")
Test.assert_equals(same_structure_as([1, [[[1]]]], [2, [[[2]]]]), False, "[1,'[',']'] same as ['[',']',1]: False should equal True")

#solution
def same_structure_as2(original,other):
    if isinstance(original, list) and isinstance(other, list) and len(original) == len(other):
        for o1, o2 in zip(original, other):
            if not same_structure_as2(o1, o2): return False
        else: return True
    else: return not isinstance(original, list) and not isinstance(other, list)

def same_structure_as3(original, other):
    if type(original) == list == type(other):
        return len(original) == len(other) and all(map(same_structure_as3, original, other))
    else:
        return type(original) != list != type(other)
