package Interview_questions;



import java.util.Map.Entry;

import java.security.KeyStore;
import java.util.*;

public class OccurenceOfDuplicate {
    public static void main(String[] args) {

        int [] arr_in = {5,5,-1,2,4,4,7,-9,-10,-1,2,-9};
        Map<Integer, Integer> map = new HashMap<>();
        int a = 0;
        int b = 0;
        for (int i =0 ; i<arr_in.length;i++){

            if (arr_in[i]<0){
                a++;
            }else b++;
        }
        for (Integer in: arr_in){

            if (map.containsKey(in)){

                map.put(in, map.get(in)+1);{

                }
            }else map.put(in,1);{

            }
        }

        Set<Map.Entry<Integer, Integer>> s = map.entrySet();
        for(Entry<Integer, Integer> entry : map.entrySet()) {
            if(entry.getValue()>1 && entry.getKey()<0) {
                System.out.println(entry.getKey() + " has " + entry.getValue() +" occurences");
            }
        }


        System.out.println("Positive values " + a);
        System.out.println("Negative values " +b);


    }

}

