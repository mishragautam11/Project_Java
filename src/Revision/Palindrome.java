package Revision;

public class Palindrome {
    public static void main(String[] args) {

        String str1= "gautam";
        String str2="";

        for (int i=str1.length()-1;i>0;i--){

            str2=str2+str1.charAt(i);

        }if (str1.equalsIgnoreCase(str2)){
            System.out.println("It is palindrome");
        }else System.out.println("It is not palindrom");
    }
}
