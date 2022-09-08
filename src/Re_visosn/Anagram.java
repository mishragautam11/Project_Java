package Re_visosn;

import java.util.Arrays;

public class Anagram {
    public static void main(String[] args) {


        String str1 = "race";
        String str2 = "care";

        str1.toLowerCase();
        str2.toLowerCase();

        if (str1.length()==str2.length()){

            char[] ch1 = str1.toCharArray();
            char[] ch2 = str2.toCharArray();

            Arrays.sort(ch1);
            Arrays.sort(ch2);

            boolean result = Arrays.equals(ch1, ch2);

            if (result){
                System.out.println("The string is anagram");
            }else System.out.println("This not an anagram");

        }
    }
}
