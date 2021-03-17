using System;
public class Kata
{
  public static string FindNeedle(object[] haystack)
  {
    return "found the needle at position " + Array.IndexOf(haystack,"needle");
  }
}
