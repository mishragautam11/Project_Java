package Interview_questions;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class Count_Duplicate01_Practice {
    public static void main(String[] args) {

        String str = "repprederttd";
        char[] chars = str.toCharArray();
        Map<Character, Integer> charmap = new HashMap<>();


        for (Character cc : chars) {

            if (charmap.containsKey(cc)) {

                charmap.put(cc,charmap.get(cc) + 1);
                {

                }
            } else charmap.put(cc, 1);
            {

            }
        }
        Set<Character> keys = charmap.keySet();

        for (Character cc : keys) {

            if (charmap.get(cc)>1) {

                System.out.println(cc + "-" + charmap.get(cc));
            }

        }

    }
}







