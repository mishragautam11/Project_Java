package Practice;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Practice03 {

    public static void main(String[] args) {



        String str = "gautammishra";
        char[] chars = str.toCharArray();
        Map<Character , Integer> charmap = new HashMap<>();

        for (Character cc : chars){

            if ( charmap.containsKey(cc)){

                charmap.put(cc, charmap.get(cc)+1);
                {

                }
            }else charmap.put(cc,1);{

            }
        }

        Set<Character> keys = charmap.keySet();

        for (Character cc : keys){

            if (charmap.get(cc)>1){

            }
            System.out.println(cc + "-"+ charmap.get(cc));
        }


    }
}
