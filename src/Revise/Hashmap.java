package Revise;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Hashmap {
    public static void main(String[] args) {


        String str = "gaaaauuuttaamm";
        char[] chars = str.toCharArray();

        Map<Character , Integer> map = new HashMap<>();

        for (Character ch : chars){

            if (map.containsKey(ch)){

                map.put(ch, map.get(ch)+1);
                {
                }
            }else map.put(ch,1);
            {
            }
        }
        Set<Character> keys = map.keySet();

        for (Character ch : keys){

            if (map.get(ch)>1){

            }
            System.out.println(ch + map.get(ch));
        }


    }
}
