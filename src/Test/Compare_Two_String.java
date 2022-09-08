package Test;

import java.util.Arrays;

class Compare_Two_String {
    public static void main(String[] args) {
        String str1 = "cat";
        String str2 = "act";

        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        if(str1.length() == str2.length()) {

            char[] charArray1 = str1.toCharArray();
            char[] charArray2 = str2.toCharArray();

            Arrays.sort(charArray1);
            Arrays.sort(charArray2);

            boolean result = Arrays.equals(charArray1, charArray2);

            if(result) {
                System.out.println(str1 + " and " + str2 + " are anagram.");
            }else
                System.out.println(str1 + " and " + str2 + " are not anagram.");


        }
    }
}