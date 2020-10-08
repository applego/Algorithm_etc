"""

"""
import re

def domain_name(url):
    print('url: ' + url)
    while True:
        if url.startswith("http"):
            url = re.sub(r'http.*//', '', url)
            print(url)
        elif url.startswith("www"):
            url = re.sub(r'www.', '', url, 1)
            print(url)
        else:
            break
    url = re.sub(r'\..*', '', url)
    return url


from TestCodewar import Test
Test = Test()
# Test.assert_equals(domain_name("http://google.com"), "google")
# Test.assert_equals(domain_name("http://google.co.jp"), "google")
# Test.assert_equals(domain_name("www.xakep.ru"), "xakep")
# Test.assert_equals(domain_name("https://youtube.com"), "youtube")
Test.assert_equals(domain_name("http://www.codewars.com/kata/"), "codewars")

#BP

def domain_name_(url):
    tmp1 = url.split("//")
    print(tmp1)
    tmp2 = tmp1[-1].split("www.")
    print(tmp2)
    tmp3=tmp2[-1].split(".")
    print(tmp3)

    return url.split("//")[-1].split("www.")[-1].split(".")[0]

Test.assert_equals(domain_name_("http://www.codewars.com/kata/"), "codewars")