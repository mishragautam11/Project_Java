package Practice;

public class Practice02 {
    public static void main(String[] args) {

        String str = "non";
        String str1 ="";

        for (int i=str.length()-1; i>=0;i--)
         {
             str1=str1+str.charAt(i);
         }

        if (str1.equalsIgnoreCase(str)){
            System.out.println("The string is palindrome");

        }else
        System.out.println("The string is not palindrome");

    }
}
