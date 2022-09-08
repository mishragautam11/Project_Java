package Interview_questions;

public class Reverse_string {
    public static void main(String[] args) {


        String org ="Gautam";
        String rev="";
        int len = org.length();

        for (int i=len-1;i>=0;i--){
            rev = rev + org.charAt(i);
       }
        System.out.println(rev);
        }
    }


