package Revision;

import java.util.Arrays;

public class Anagram {
    public static void main(String[] args) {


        String str1="cart";
        String str2= "trac";

        if (str1.length()==str2.length()){

          char[] ch1  = str1.toCharArray();
            char[] ch2 = str2.toCharArray();

            Arrays.sort(ch1);
            Arrays.sort(ch2);

            boolean arr = Arrays.equals(ch1, ch2);

            if (arr==true){
                System.out.println("Its an anagram");
            }else System.out.println("Its not an anagram");
        }

    }
}
