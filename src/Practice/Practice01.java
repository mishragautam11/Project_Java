package Practice;

public class Practice01 {

    public static void main(String[] args) {

        String str1 = "Reverse";
        String str2="";

        int len = str1.length();

        for (int i =len-1;i>=0 ;i--) {
            str2 = str2 + str1.charAt(i);
        }

        System.out.print(str2);
    }
}
