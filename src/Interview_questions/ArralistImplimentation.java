package Interview_questions;

import java.util.ArrayList;

public class ArralistImplimentation {
    public static void main(String[] args) {

        ArrayList<Object> arr = new ArrayList<>();

        arr.add(12);
        arr.add("G");
        arr.add("gautam");
        arr.add(23.3);

        // WE are using Foreach loop for reduce the code complexity
        for (Object Obj:arr) {
            System.out.println(Obj);

        }




    }
}
