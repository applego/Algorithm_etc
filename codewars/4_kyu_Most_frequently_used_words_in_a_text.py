"""

"""
import re
from collections import Counter
import itertools

def top_3_words(text):
    if not text:
        return []
    lst_alphabet = [re.findall(r"[a-z']+", x.lower(), flags=re.IGNORECASE) for x in text.split()]
    lst_alphabet2 = list(itertools.chain.from_iterable(lst_alphabet))
    print(lst_alphabet2)
    counter = Counter(lst_alphabet2)
    ret = []
    for key, value in counter.most_common():
        if not all([s == "'" for s in key]):
            ret.append(key)
        if len(ret) == 3:
            return ret
    return ret

from TestCodewar import Test
Test = Test()
# Test.assert_equals(top_3_words("a a a  b  c c  d d d d  e e e e e"), ["e", "d", "a"])
# Test.assert_equals(top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"), ["e", "ddd", "aa"])
# Test.assert_equals(top_3_words("  //wont won't won't "), ["won't", "wont"])
# Test.assert_equals(top_3_words("  , e   .. "), ["e"])
# Test.assert_equals(top_3_words("  ...  "), [])
# Test.assert_equals(top_3_words("  '  "), [])
# Test.assert_equals(top_3_words("  '''  "), [])
# Test.assert_equals(top_3_words("""In a village of La Mancha, the name of which I have no desire to call to
# mind, there lived not long since one of those gentlemen that keep a lance
# in the lance-rack, an old buckler, a lean hack, and a greyhound for
# coursing. An olla of rather more beef than mutton, a salad on most
# nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
# on Sundays, made away with three - quarters of his income. """), ["a", "of", "on"])

Test.assert_equals(top_3_words("""'LAX::,-.'LAX /-LBSjA._!_JhUcY  KUNni?;; JhUcY:??LBSjA-'LAX,:?JhUcY? / qLgepk,:LBSjA;,,qLgepk: JhUcY!-PRJDYihB!:_;LBSjA!PRJDYihB/.!PRJDYihB;?!.LBSjA, /LBSjA!_:?-JhUcY-,qLgepk,,LBSjA.__-.JhUcY-LBSjA;,PRJDYihB !JhUcY,;;!JhUcY. - JhUcY- LBSjA/;qLgepk-/ghUPzk!.!LBSjA-,_!;PRJDYihB-LBSjA ?? !KUNni- :.LBSjA;'LAX.:,LBSjA?,:?qLgepk. ?JhUcY,_?'LAX_?;KUNni/-'LAX;:;,KUNni:ghUPzk!//'LAX./?.!JhUcY:_.JhUcY,;,JhUcY _-JhUcY!!LBSjA ??_;'LAX!_:qLgepk_JhUcY: !!PRJDYihB/.LBSjA! PRJDYihB-../PRJDYihB,;//'LAX   JhUcY.,'LAX,JhUcY-JhUcY?! qLgepk:_:,tEUW_ghUPzk?LBSjA/!;ghUPzk;/;/.JhUcY-/JhUcY/.PRJDYihB /,?/KUNni;!__LBSjA?/JhUcY-LBSjA_.JhUcY:.,qLgepk! ,;JhUcY :/.JhUcY ! JhUcY!_?!LBSjA,?.!"""), ["a", "of", "on"])


from collections import Counter
import re


def top_3_words2(text):
    c = Counter(re.findall(r"[a-z']+", re.sub(r" '+ ", " ", text.lower())))
    return [w for w, _ in c.most_common(3)]

import re
from collections import Counter

top_3_words3=lambda t:[w for w,c in Counter(re.findall("'*[a-z][a-z']*",t.lower())).most_common(3)]