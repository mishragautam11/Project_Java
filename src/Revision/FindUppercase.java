package Revision;

public class FindUppercase {
    public static void main(String[] args) {

        String str = "gAuTaM";


        char[] ch = str.toCharArray();


        for (int i =1;i<str.length();i++){

            if (Character.isUpperCase(ch[i])){

                System.out.println(ch[i]);

            }




        }
    }
}
