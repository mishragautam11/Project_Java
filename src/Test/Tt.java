package Test;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Tt {
    public static void main(String[] args) {


        String str = "asdfghjasdfgasdf";

        char[] chars = str.toCharArray();

        Map<Character, Integer> charmap = new HashMap<>();

        for (Character ch : chars) {

            if (charmap.containsKey(ch)) {
                charmap.put(ch, charmap.get(ch)+ 1);{

                }

            } else charmap.put(ch, 1);
            {

            }
        }
        Set<Character> keys = charmap.keySet();

        for (Character ch : keys) {

            if (charmap.containsKey(ch < 1)) ;
            {
            }

            System.out.println(ch+"-"+charmap.get(ch));
        }
    }

    }


